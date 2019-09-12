import React, {useState} from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function Login() {

    const [username, setUsername] = useState('');

    function submit(usernames) {
        usernames.preventDefault();
        console.log("username", username);
    }

    return (
        <div className="login-content">
            <form onSubmit={submit}>
                <img src={logo} alt="github" />
                <input type="text" placeholder="Digite o usuário do Github" value={username} onChange={ u => setUsername(u.target.value)}/>
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}