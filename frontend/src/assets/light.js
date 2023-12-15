import { Group, SpotLight, PointLight, AmbientLight, HemisphereLight } from 'three';

export default class BasicLights extends Group {
  constructor(...args) {
    super(...args);

    const point = new PointLight(0xFFFFFF, 1, 10, 1);
    const dir = new SpotLight(0xFFFFFF, 10, 7, 0.8, 1, 1);
    const ambi = new AmbientLight( 0xFFFFFF , 100);
    const hemi = new HemisphereLight( 0xFFFFFF, 0x080820, 1.15 )

    dir.position.set(5, 1, 2);
    dir.target.position.set(0,0,0);

    point.position.set(0, 1, 5);
    point.intensity = 10;

    this.add(point, ambi, hemi, dir);

  }
}