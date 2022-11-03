import React from 'react';
import NavBar from '../components/NavBar.js';
import ToDoApp from '../components/ToDoApp.js';

export default function LandingPage(props) {
	return (
		<React.Fragment>
			<NavBar {...props} title={'React Tareas System'} />
			<div className='justify-content-center text-center mt-3'>
				{!props.isLogined ? (
					<div>
						<h1 className='mb-4'>Bienvenido</h1>
						<h4>Porfavor ingresa tus credenciales para acceder al sistema</h4>
					</div>
				) : (
					<ToDoApp />
				)}
			</div>
		</React.Fragment>
	);
}
