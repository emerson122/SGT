import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from '../components/NavBar.js';

export default function RegisterPage(props) {
	const [loginid, setLoginid] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onSubmit = (evt) => {
		evt.preventDefault();
		if (password === confirmPassword && loginid !== '') {
			fetch('http://localhost:3001/api/registration', {
				method: 'POST',
				body: JSON.stringify({ loginid, password }),
				headers: {
					'Content-Type': 'application/json',
				},
			})
				.then((res) => {
					if (res.status === 200) {
						alert('Registration Success.');
						window.location.href = '/';
					} else {
						alert('Error occured. Try again.');
					}
				})
				.catch((err) => {
					alert('Error occured. Try again.');
				});
		}
	};

	return (
		<React.Fragment>
			<NavBar {...props} title={'React Tareas System'} />
			<div className='d-flex justify-content-center text-center mt-3'>
				<Form className='w-100 col-md-6 col-xl-3 ' onSubmit={onSubmit}>
					<h1 className='mb-4'>Registro</h1>
					<Form.Group
						controlId='formLoginid'
						onChange={(evt) => setLoginid(evt.target.value)}
					>
						<Form.Label>Usuario</Form.Label>
						<Form.Control type='text' placeholder='Ingresa tu usuario' />
					</Form.Group>
					<Form.Group
						controlId='formPassword'
						onChange={(evt) => setPassword(evt.target.value)}
					>
						<Form.Label>Contraseña</Form.Label>
						<Form.Control type='password' placeholder='Ingresa tu contraseña' />
					</Form.Group>
					<Form.Group
						controlId='formConfirmPassword'
						onChange={(evt) => setConfirmPassword(evt.target.value)}
					>
						<Form.Label>Confirmar Contraseña</Form.Label>
						<Form.Control type='password' placeholder='ingresa nuevamente tu contraseña' />
					</Form.Group>
					<Button variant='primary' type='submit'>
						Registrar
					</Button>
				</Form>
			</div>
		</React.Fragment>
	);
}
