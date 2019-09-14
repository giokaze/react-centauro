import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {extendObservable} from 'mobx';

import './user.css';

import views from 'config/views';

class User extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      user: {},
      repositories: {}
    });
    this.searchUser(props.store.router.params.username);
    this.searchRepos(props.store.router.params.username);
  }

  render() {

    const {store} = this.props;
    const {router: {params, goTo}} = store;
    const user = this.user;
    const repositories = this.repositories
    console.log("user", user);
    console.log("repos", repositories);

    return (
      <div className="user-content">
        {/* <div className="header-content">
          <button onClick={() => goTo(views.home, store)}></button>
        </div> */}
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

