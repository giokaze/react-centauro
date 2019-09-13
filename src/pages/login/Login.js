// import React, {useState} from 'react';
// import './Login.css';

// import api from '../../services/api';

// import logo from '../../assets/logo.svg';

// export default function Login({history}) {

//     const [username, setUsername] = useState('');

//     async function searchUser(usernames) {
//         usernames.preventDefault();

//         const response = await api.get('users/' + username);

//         console.log("response", response);
        
//         const { _id } = response.data;

//         console.log("id", _id);

//         history.push(`/user/${_id}`);
//     }

//     return (
//         <div className="login-content">
//             <form onSubmit={searchUser}>
//                 <img src={logo} alt="github" />
//                 <input type="text" placeholder="Digite o usuário do Github" value={username} onChange={ u => setUsername(u.target.value)}/>
//                 <button type="submit">Buscar</button>
//             </form>
//         </div>
//     );
// }

import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

class Login extends Component {
  render() {
    const {store} = this.props;
    const {router: {params}} = store;

    return (
      <div>
        <h1> Book {params.id} </h1>
      </div>
    );
  }
}

export default inject('store')(observer(Login));