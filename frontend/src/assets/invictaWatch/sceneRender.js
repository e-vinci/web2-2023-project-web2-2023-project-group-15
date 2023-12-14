import { Group } from 'three';
import Racerwatch from './modelRender';
import Light from '../light'

export default class sceneCutioVolareWatch extends Group {
    constructor() {
      super();
  
      const race = new Racerwatch();
      const light = new Light();
    
  
      this.add(race,light);
    }
  
    update(timeStamp) {
      this.rotation.y = timeStamp / 10000;
    }
  }