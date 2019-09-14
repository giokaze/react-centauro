import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {extendObservable} from 'mobx';

import eye from '../../assets/eye.svg';
import fork from '../../assets/fork.svg';
import star from '../../assets/star.svg';

import './user.css';

import views from 'config/views';

class User extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      user: {},
      repositories: []
    });
    this.searchUser(props.store.router.params.username);
    this.searchRepos(props.store.router.params.username);
  }

  render() {

    const {store} = this.props;
    const {router: {params, goTo}} = store;
    const user = this.user;
    const repositories = this.repositories

    var listItems = repositories.sort((a,b) => a.stargazers_count > b.stargazers_count)
    .map((item, i) => {
        return (
          <div item={item} key={i} className="card-list">
            <div className="user-repositories-title">
              <div className="flex">
                <span>name:</span>
                <p>{item.name}</p>
              </div>
              <div className="flex">
                <img src={star} alt="star"/>
                <p>{item.stargazers_count}</p>
              </div>
            </div>
            <div className="user-repositories-title">
              <div className="flex">
                <span>language:</span>
                <p>{item.language}</p>
              </div>
              <div className="flex">
              <img src={eye} alt="watchers"/>
                <p>{item.watchers}</p>
              </div>
              <div className="flex">
              <img src={fork} alt="forks"/>
                <p>{item.forks}</p>
              </div>
            </div>
          </div>
        );
    });

    return (
      <div className="user-content">
        <div className="user-description">
          <div className="div-img">
            <img src={user.avatar_url}/>
          </div>
          <div>
            <h3>{user.name}</h3>
            <div className="div-followers">
              <span>Followers:</span>
              <p>{user.followers}</p>
              <span>Following:</span>
              <p>{user.following}</p>
            </div>
            <div className="div-long">
              <span>Location:</span>
              <p>{user.location}</p>
            </div>
          </div>
        </div>
        <div className="user-bio-description">
          <div className="div-long">
                <span>E-mail:</span>
                <p>{user.email}</p>
          </div>
          <div className="div-long">
                <span>About:</span>
                <p>{user.bio}</p>
          </div>
        </div>
        <div className="user-repositories">
          <div className="user-repositories-title">
            <h3>Repositories:</h3>
            <button>*</button>
          </div>
          <div className="user-repositories-list">
            {listItems}
          </div>
        </div>
        <div className="footer-content">
          <button onClick={() => goTo(views.home, store)}>Voltar</button>
        </div>
      </div>
    );
  }

  searchUser(user) {
    fetch('https://api.github.com/users/' + user)
    .then(res => res.json().then(response => {
          this.user = response;
      }))
    .catch(error => console.log(error));
  }

  searchRepos(user) {
    fetch('https://api.github.com/users/' + user + '/repos')
    .then(res => res.json().then(response => {
          this.repositories = response;
      }))
    .catch(error => console.log(error));
  }
}

export default inject('store')(observer(User));

