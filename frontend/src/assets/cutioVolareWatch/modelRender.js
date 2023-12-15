/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './model.glb';

export default class RacerWatch extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Cutio VOlare Watch';

    loader.load(MODEL, (gltf)=>{
      this.add(gltf.scene);
      
    });
  }
}