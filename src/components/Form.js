import React, {useRef} from "react";
import { useForm } from "react-hook-form";

export default function Form({inputs, button, onSubmit}) {
  const { register, handleSubmit, watch,  formState: { errors }  } = useForm();
  const password = useRef({}); 
  password.current = watch("password", "");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        
    {
        inputs.map((inp, index) => <div key={index}>
                <input {...register(inp.name, {
                        ...(inp.name === 'confirmPassword' && {validate: value => value === password.current || "The passwords do not match"}),
                        required: true,
                        ...(inp.name === 'email' && {pattern: /^\S+@\S+$/i})
                     })}
                        placeholder={inp.placeholder}
                        type={inp.type}
                        />
                <br/>
                {errors[inp.name] && errors[inp.name].type === "required" && <span style={{color: 'red', fontSize:'10px'}}>This is required</span>}
                {errors[inp.name] && inp.name === 'email' && errors[inp.name].type === "pattern" && <span style={{color: 'red', fontSize:'10px'}}>Not a valid Email</span> }
                {errors[inp.name] && inp.name === 'confirmPassword' && errors[inp.name].type === "validate" && <span style={{color: 'red', fontSize:'10px'}}>{errors[inp.name].message}</span> }
                <br/>
                <br/>
            </div>
            )
    }

    <input type="submit" value={button.name}/>
    </form>
  );
}
