<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import stats from "./common/stats";
import { onMounted } from "vue";

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
  const loader = new GLTFLoader();
  loader.load(
    "/dice/scene.gltf",
    function (gltf) {
      gltf.scene.scale.set(0.002, 0.002, 0.002);
      scene.add(gltf.scene);
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
    // antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // Animations
  const tick = () => {
    stats.begin();
    controls.update();

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
