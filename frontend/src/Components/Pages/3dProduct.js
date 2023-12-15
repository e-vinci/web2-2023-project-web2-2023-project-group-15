/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { WebGLRenderer,PerspectiveCamera , Scene, Vector3 } from 'three';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Racer from '../../assets/cutioVolareWatch/sceneRender';
import Invicta from '../../assets/invictaWatch/sceneRender';
import Rolex from '../../assets/rolexsubmarine/sceneRender';
import '../../stylesheets/_product.scss';






const animationProducts = async () => {
  const nameProductURL = window.location.search;
  const urlParams = new URLSearchParams(nameProductURL);
  const nameproduct =  urlParams.get('product');
  console.log(`nameProduct${  nameproduct}`);

const scene = new Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new WebGLRenderer({antialias: true , alpha : true});
renderer.gammaOutput = true;
renderer.gammaFactor = 2.2;
renderer.physicallyCorrectLights = true;
const racer = new Racer();
const rolex = new Rolex();
const topLight = new THREE.DirectionalLight(0xffffff, 10);
const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 10 );


let model = '';
// scene.add( directionalLight );
// scene.add( hemisphereLight ) ;
model = racer;

scene.add(model);
scene.add(topLight);
if(model === racer){
  scene.background = new THREE.Color('white');
}else{
scene.background = new THREE.Color('black');
}
// camera

camera.position.set(9,8,14);
camera.lookAt(new Vector3(0,0,0));

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

// render loop
const onAnimationFrameHandler = (timeStamp) => {
  renderer.render(scene, camera );
  model.update && model.update(timeStamp);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

const controls = new OrbitControls(camera, renderer.domElement);
// dom


const main = document.querySelector('main');
main.innerHTML = '';
main.appendChild(renderer.domElement);
};
export default animationProducts;