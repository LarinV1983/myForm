import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {LoginValidation, passwordValidation} from './validation';
import { useForm, Controller, SubmitHandler, useFormState } from "react-hook-form";
import './AuthForm.css';

interface SignForm {
	login: string;
	password: string;
}

 function AuthForm() {
 	const {handleSubmit, control} = useForm<SignForm>();
 	const onSubmit:SubmitHandler<SignForm> = (data) => console.log(data);
 	const { errors }= useFormState({control});

	return (
		<div className='auth-form'>
		<Typography variant="h4" component="div" gutterBottom>
        Войдите
      </Typography>
      	<Typography variant="subtitle1" component="div" gutterBottom>
        Чтобы получить доступ
      </Typography>
      <form className='auth-form__form' 
      onSubmit={handleSubmit(onSubmit)}>
      <Controller
      	control={control}
      	name="login"
      	rules={LoginValidation}
      	render={({ field }) => ( 
      		<TextField
          label="Логин"
          onChange={ (e)=> field.onChange(e) }
          value={ field.value || '' }
          error={!!errors.login?.message}
          helperText={errors.login?.message}
        	/>
        )}
      />
      <Controller
      	control={control}
      	name="password"
      	rules={passwordValidation}
      	render={({ field }) => ( 
      		<TextField
          label="Пароль"
          type="password"
          onChange={ (e)=> field.onChange(e) }
          value={ field.value || '' }
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        	/>
        )}
      />
        <Button type="submit" variant="contained">
        	Войти
        </Button>
      </form>
		</div>
	);
}

export default AuthForm;