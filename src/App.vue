<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import stats from "./common/stats";
import { onMounted } from "vue";
import * as CANNON from "cannon-es";
import CannonDebugger from "cannon-es-debugger";

onMounted(() => {
  const canvas = document.querySelector("#mainCanvas") as HTMLCanvasElement;
  console.log(canvas);
  // Scene
  const scene = new THREE.Scene();
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(4, 4, 15);
  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.zoomSpeed = 0.3;

  /**
   * Physics
   */
  const world = new CANNON.World();
  world.gravity.set(0, -9.82, 0);

  const defaultMaterial = new CANNON.Material("default");
  const defaultContactMaterial = new CANNON.ContactMaterial(
    defaultMaterial,
    defaultMaterial,
    {
      friction: 0.8,
      restitution: 0.7,
    }
  );
  world.addContactMaterial(defaultContactMaterial);
  // const sphereShape = new CANNON.Sphere(1);
  const size = 0.5;
  const halfExtents = new CANNON.Vec3(size, size, size);
  const boxShape = new CANNON.Box(halfExtents);
  const sphereBody = new CANNON.Body({
    mass: 1,
    position: new CANNON.Vec3(0, 4, 0),
    shape: boxShape,
    material: defaultMaterial,
  });
  world.addBody(sphereBody);
  sphereBody.applyForce(
    new CANNON.Vec3((Math.random() - 1) * 3, 5, (Math.random() - 1) * 3),
    new CANNON.Vec3((Math.random() - 1) * 3, 5, (Math.random() - 1) * 3)
  );
  // floor
  const floorShape = new CANNON.Plane();
  const floorBody = new CANNON.Body({
    type: CANNON.Body.STATIC,
    shape: floorShape,
    material: defaultMaterial,
  });
  floorBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
  world.addBody(floorBody);

  const loader = new GLTFLoader();
  let sphere: THREE.Group<THREE.Object3DEventMap>;
  let cannonDebugger: {
    update: () => void;
  };
  loader.load(
    "/dice/scene.gltf",
    function (gltf) {
      sphere = gltf.scene;
      scene.add(gltf.scene);
      cannonDebugger = CannonDebugger(scene, world);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  const material = new THREE.MeshStandardMaterial();
  // plane
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(18, 18), material);
  plane.rotateX(-Math.PI / 2);
  plane.receiveShadow = true;
  scene.add(plane);

  /**
   * Light
   */
  const directionLight = new THREE.DirectionalLight();
  directionLight.castShadow = true;
  directionLight.position.set(5, 5, 6);
  const ambientLight = new THREE.AmbientLight(new THREE.Color("#ffffff"), 0.3);
  scene.add(ambientLight, directionLight);

  const directionLightHelper = new THREE.DirectionalLightHelper(
    directionLight,
    2
  );
  directionLightHelper.visible = false;
  scene.add(directionLightHelper);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // Animations
  let ended = false;
  const tick = () => {
    stats.begin();
    controls.update();
    cannonDebugger?.update();
    world.fixedStep();
    if (sphere) {
      sphere.position.copy(sphereBody.position as any);
      sphere.quaternion.copy(sphereBody.quaternion as any);
    }

    // Render
    renderer.render(scene, camera);
    stats.end();
    requestAnimationFrame(tick);
  };

  tick();
});
</script>

<template>
  <canvas id="mainCanvas" class="webgl"></canvas>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
