import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {extendObservable} from 'mobx';

//router
//import views from 'config/views';

class Item extends Component {

  constructor(props) {
    super(props)
    extendObservable(this, {
      fullname: ''
    });
  }
    
  render() {
    
    const {store} = this.props;
    const {router: {params, goTo}} = store;
    const {fullname} = this;

    return (
        <div>
            teste
            {fullname}
        </div>
    );
  }
}

export default inject('store')(observer(Item));

