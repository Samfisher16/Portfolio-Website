import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardModule } from 'primeng/card';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

@Component({
  selector: 'app-home',
  imports: [CardModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  @ViewChild('homeCanvas', { static: true }) homeCanvas!: ElementRef;

  camera!: THREE.PerspectiveCamera;
  scene!: THREE.Scene;
  renderer!: THREE.WebGLRenderer;
  orbitControls!: OrbitControls;

  ngOnInit(): void {
    this.initializeCamera();
    this.initializeScene();
    this.initializeRenderer();
    this.initializeOrbitControls();
    this.renderer.setAnimationLoop(() => {
      this.animate();
      this.orbitControls.update();
    });
  }

  initializeOrbitControls() {
    this.orbitControls = new OrbitControls(this.camera, this.renderer.domElement);
    this.orbitControls.enableDamping = true;
    this.orbitControls.autoRotate = true;
  }

  initializeCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.camera.updateProjectionMatrix();
  }

  initializeScene() {
    this.scene = new THREE.Scene();
    let geometry = new THREE.BoxGeometry();
    let material = new THREE.MeshBasicMaterial({ color: 'yellow' });
    let cube = new THREE.Mesh(geometry, material);
    this.scene.background = new THREE.Color('black');
    this.scene.add(cube);
  }

  initializeRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.homeCanvas.nativeElement,
      antialias: true,
    });
    this.renderer.setPixelRatio(Number(window.devicePixelRatio) > 2 ? 2 : window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    window.addEventListener('resize', () => {
      this.windowResized();
    });
    this.renderer.render(this.scene, this.camera);
  }

  windowResized() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
