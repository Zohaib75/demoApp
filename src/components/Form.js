import * as React from "react";
import { useForm } from "react-hook-form";

export default function Form({inputs, button, onSubmit}) {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
    {
        inputs.map((inp, index) => <div key={index}>
                <input {...register(inp.name, {required: true, pattern: inp.name === 'email' ? /^\S+@\S+$/i : '' })} placeholder={inp.placeholder} type={inp.type}/>
                <br/>
                {errors[inp.name] && errors[inp.name].type === "required" && <span>This is required</span>}
                {errors[inp.name] && inp.name === 'email' && errors[inp.name].type === "pattern" && <span>Not a valid Email</span> }
                <br/>
                <br/>
            </div>
            )
    }

    <input type="submit" value={button.name}/>
    </form>
  );
}
