/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
import { WebGLRenderer,PerspectiveCamera , Scene, Vector3 } from 'three';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import GenericWatch from '../../assets/cutioVolareWatch/sceneRender';
import Rolex from '../../assets/rolexsubmarine/sceneRender';
import PradaBag from '../../assets/pradaBag/sceneRender';
import Channel5 from '../../assets/channel5/sceneRender';
import Patek from '../../assets/grandComplications/sceneRender';
import Puffer from '../../assets/louisVuittonPuffer/sceneRender';
import Goose from '../../assets/canadaGoosePuffer/sceneRender'
import Backpack from '../../assets/lvBackPack/sceneRender';
import GenericParfum from '../../assets/genericparfum/sceneRender';
import Lvbag from '../../assets/lvbag/sceneRender';
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

const genericwatch = new GenericWatch();
const rolex = new Rolex();
const pradaBag = new PradaBag();
const channel5 = new Channel5();
const patek = new Patek();
const puffer = new Puffer();
const goose = new Goose();
const backpack = new Backpack();
const genericparfum = new GenericParfum();
const lvBag = new Lvbag();

const topLight = new THREE.DirectionalLight(0xffffff, 10);
const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 10 );


let model = '';
// scene.add( directionalLight );
// scene.add( hemisphereLight ) ;

if(nameproduct ==='pradaBag'){
  model = pradaBag;
  scene.background = new THREE.Color('white');
  camera.position.set(0 ,15 , 10)
}else if(nameproduct === 'rolexSubmarine'){
  model = rolex;
  scene.background = new THREE.Color('black');
  camera.position.set(9,8,14);
  }else if (nameproduct ==='channelN5'){
  model = channel5;
  scene.background = new THREE.Color('white');
  camera.position.set(0 ,15 , 10)
  }else if(nameproduct === 'GrandComplications'){
    model = patek;
    scene.background = new THREE.Color('black');
    camera.position.set(9,8,14);
  }else if(nameproduct === 'canadaGoosePuffer'){
    model = goose;
    scene.background = new THREE.Color('white');
    camera.position.set(9,8,14);
  }
  else if(nameproduct === 'ballonBleu'){
    model = genericwatch;
    scene.background = new THREE.Color('white');
    camera.position.set(9,8,14);
  }else if (nameproduct === 'lvBackpack'){
    model = backpack;
    scene.background = new THREE.Color('white');
    camera.position.set(9,8,14);
  }else if (nameproduct === 'genericparfum'){
    model = genericparfum;
    scene.background = new THREE.Color('white');
    camera.position.set(9,8,14);
  }else if (nameproduct === 'LVDubai'){
    model = lvBag;
    scene.background = new THREE.Color('black');
    camera.position.set(9,8,14);
  }
// model = gucciBag;

scene.add(model);
scene.add(topLight);
scene.add(hemisphereLight);

// camera
camera.lookAt(model);
// 

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
const div = document.createElement('div');
div.appendChild(renderer.domElement);
main.appendChild(div);
};
export default animationProducts;