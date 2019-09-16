import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {extendObservable} from 'mobx';

//router
import views from 'config/views';

import './item.css';

class Item extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      item: {},
      fullname: ''
    });
    this.searchItemDetails(props.store.router.params.fullname);
  }
    
  render() {
    
    const {store} = this.props;
    const {router: {params, goTo}} = store;
    const project = this.item;
    const username = store.router.params.username;

    return (
        <div className="item-content">
            <div className="header-content">
                {project.name}
            </div>
            <div className="item-description">
                <div className="description url">
                    <span>URL:</span>
                    {project.html_url}
                </div>
                <div className="description">
                    <span>Language:</span>
                    {project.language}
                </div>
                <div className="description flex-description">
                    <span>Watchers:</span>
                    {project.watchers}
                    <span>Stars:</span>
                    {project.stargazers_count}
                    <span>Subscribes:</span>
                    {project.subscribers_count}
                </div>
                <div className="footer-content">
                    <button onClick={() => goTo(views.user, {username}, store)}>Voltar</button>
                </div>
            </div>
        </div>
    );
  }

  searchItemDetails(name) {
    fetch('https://api.github.com/repos/' + name)
    .then(res => res.json().then(response => {
          this.item = response;
      }))
    .catch(error => console.log(error));
  }
}

export default inject('store')(observer(Item));

