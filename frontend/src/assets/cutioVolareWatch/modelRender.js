/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './watchRacer.glb';

export default class RacerWatch extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Racer Watch';

    loader.load(MODEL, (gltf)=>{
      this.add(gltf.scene);
      
    });
  }
}