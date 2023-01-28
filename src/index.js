import React from 'react';
import { WelcomeMessageComponent } from './Components/welcomeReact';
import {createRoot} from 'react-dom/client';

// console.log(WelcomeMessage({name: 'Rohit'}));
// const welcome = document.createElement('div');
// welcome.classList.add('webpack')
// welcome.innerText = WelcomeMessage({name: 'Rohit'});
// document.body.appendChild(welcome);
createRoot(document.body).render(<WelcomeMessageComponent name="Rohit"/>)

