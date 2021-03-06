import * as THREE from 'three';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var height = window.innerHeight,
    width = window.innerWidth;

// 3 must haves - SCENE , CAMERA, RENDERER

var scene = new THREE.Scene(); // Creates a new scene

var camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 ); // Creates a camera and passes (field of view, aspect ratio, near clipping plane, far clipping plane)
      camera.position.set(0, 0, 5);// moves the camera back some so we won't be inside of the cube
      camera.lookAt( scene.position ); // makes the camera always point toward the scene
      scene.add(camera);

var light = new THREE.PointLight( 0xFFFF00 );
      light.position.set( 10, 0, 10 );
      scene.add(light);

var renderer = new THREE.WebGLRenderer();
      renderer.setSize( width, height ); // sets size of render to the screen size
      document.body.appendChild( renderer.domElement); // Renders a canvas tag to the DOM

var geometry = new THREE.BoxGeometry( 2, 2, 2); // give the cube it's dimensions (width, height, depth)
var material = new THREE.MeshLambertMaterial( { color: 0xFF0000, wireframe: false} ); // creates material and gives it a color
var cube1 = new THREE.Mesh( geometry, material ); // crates the cube using the geometry and the material
var cube2 = new THREE.Mesh( geometry, material );
      cube2.position.set(5, -2, -5);
var cube3 = new THREE.Mesh( geometry, material );
      cube3.position.set(-5, -2, -5);

scene.add( cube1, cube2, cube3); // adds the cube to the scene

// Render loop to display cube
function render() {
  requestAnimationFrame( render ); // requestAnimationFrame will pause when the user navigates to a new tab
  cube1.rotation.z += 0.01;
  cube1.rotation.x += 0.01;
  cube1.rotation.y += 0.01;  // Runs every frame giving it the animation

  cube2.rotation.x += 0.01;

  cube3.rotation.y += 0.01;

  renderer.render( scene, camera );
};

render();

// Adding REACT.js for the html

var Main = React.createClass ({
  render: function() {
    return (
      <div className='container'>
          <p>Hello World!</p>
          <p>THREE.js and REACT</p>
      </div>
    );
  }
});

ReactDOM.render(<Main />, document.getElementById('root'));
