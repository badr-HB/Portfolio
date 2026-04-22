"use client"
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";


export const world = (canvas) => {

    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#111827')
    const geometry = new THREE.IcosahedronGeometry(2, 3);
    const material = new THREE.MeshBasicMaterial({ color: "#00f2ff", wireframe: true });
    let fov = 0;
    if (window.innerWidth >= 1200) {
        fov = 55;
    }
    else if (window.innerWidth <= 450) {
        fov = 0
    }
    else if (window.innerWidth < 1200) {
        fov = 85
    }

    const mesh = new THREE.Mesh(
        geometry,
        material
    );
    scene.add(mesh);
    const camera = new THREE.PerspectiveCamera(fov, innerWidth / innerHeight, 0.1, 35);
    camera.position.z = 5;
    scene.add(camera)
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    })
    renderer.setSize(window.innerWidth, window.innerHeight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false;

    function animate() {
        controls.update();
        mesh.rotation.y += 0.00110;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
        console.log("Running....");
    }
    animate();
}