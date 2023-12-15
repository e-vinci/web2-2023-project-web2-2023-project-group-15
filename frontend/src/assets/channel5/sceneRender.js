import { Group } from 'three';
import Model from './modelRender';
import Light from '../light'

export default class GucciBag extends Group {
    constructor() {
      super();
  
      const model = new Model();
      const light = new Light();
    
  
      this.add(model,light);
    }
  
    update(timeStamp) {
      this.rotation.y = timeStamp / 10000;
    }
  }