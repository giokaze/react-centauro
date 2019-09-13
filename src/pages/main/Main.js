// import React from 'react';

// export default function Main({match}) {
//     console.log(match);
//     return (
//         <h1>{match.params.id}</h1>
//     );
// }


import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//style
class Main extends Component {
  render() {

    const {store}= this.props;
    const {router: {params}} = store;

    return (
      <div>
        <h3> Main </h3>
        <div> with id: {params.id} </div>
      </div>
    );
  }
}

export default inject('store')(observer(Main));

