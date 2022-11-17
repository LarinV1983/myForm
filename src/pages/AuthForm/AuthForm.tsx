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
      	<Typography 
        className='auth-form__subtitle' 
        variant="subtitle1" component="div" 
        gutterBottom>
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
          className='auth-form__input'
          label="Логин"
          size='small'
          margin="normal"
          fullWidth={ true }
          onChange={ (e)=> field.onChange(e) }
          value={ field.value}
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
          className='auth-form__input'
          size="small"
          margin="normal"
          label="Пароль"
          type="password"
          fullWidth={ true }
          onChange={ (e)=> field.onChange(e) }
          value={ field.value}
          error={!!errors.password?.message}
          helperText={errors.password?.message}
        	/>
        )}
      />
        <Button
        type="submit"
        variant="contained"
        fullWidth={ true }
        disableElevation={ true }
        sx={{
            marginTop: 2
            }}>
        	Войти
        </Button>
      </form>
      <div className="auth-form__footer">
                <Typography variant="subtitle1" component="span">
                    Нету аккаунта?{" "}
                </Typography>
                <Typography variant="subtitle1" component="span" sx={{ color: 'blue'}}>
                    Зарегистрируйтесь
                </Typography>
            </div>
        </div>
	);
}

export default AuthForm;