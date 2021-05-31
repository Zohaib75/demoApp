import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../styles/Input";
import { Button } from "../styles/Button";
import { Span } from "../styles/Span";

export default function Form({ inputs, button, onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((inp, index) => (
        <div key={index}>
          <Input
            {...register(inp.name, {
              ...(inp.name === "confirmPassword" && {
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              }),
              required: true,
              ...(inp.name === "email" && { pattern: /^\S+@\S+$/i }),
            })}
            placeholder={inp.placeholder}
            type={inp.type}
          />
          <br />
          {errors[inp.name] && errors[inp.name].type === "required" && (
            <Span>This is required</Span>
          )}
          {errors[inp.name] &&
            inp.name === "email" &&
            errors[inp.name].type === "pattern" && (
              <Span> Not a valid Email</Span>
            )}
          {errors[inp.name] &&
            inp.name === "confirmPassword" &&
            errors[inp.name].type === "validate" && (
              <Span> {errors[inp.name].message}</Span>
            )}
          <br />
        </div>
      ))}

      <Button type="submit">{button.name}</Button>
    </form>
  );
}
