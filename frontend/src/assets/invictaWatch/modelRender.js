/* eslint-disable import/extensions */
import { Object3D } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import MODEL from './invicta.glb';

export default class InvcitaWatch extends Object3D {
  constructor() {
    const loader = new GLTFLoader();
    
    super();
   
    this.name = 'Invicta Watch';

    loader.load(MODEL, (gltf)=>{
      this.add(gltf.scene);
      
    });
  }
}