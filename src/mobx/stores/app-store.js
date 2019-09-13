import {extendObservable, action} from 'mobx';

class AppStore {
  constructor() {
    extendObservable(this, {
      title: 'Teste Centauro'
    });
  }

  setTitle = action(title => {
    this.title = title;
  });
}

export default AppStore;