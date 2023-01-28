import React from 'react';
import './welcome.css';

export function WelcomeMessageComponent({name}) {
    return <div className='webpack'>Hi {name.toUpperCase()}, welcome to wepack config</div>;
}