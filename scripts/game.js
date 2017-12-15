'use strict';

//When dom is done loading, render screne on canvas.
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas");
  const engine = new BABYLON.Engine(canvas, true);

  // This function creates the scene.
  const createScene = () => {

    //Sets up a scene, which gets rendered by the canvas.
    const scene = new BABYLON.Scene(engine);

    //Changes the scene background color and light.
    scene.clearColor =  BABYLON.Color3.Blue();
    scene.ambientColor = new BABYLON.Color3(2, 3, 5);

    // Sets up Camera
    const camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 5, -10), scene);

    camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(canvas, true);


    //The diff lights you can use in babylon, and the light properties.
    // const light = new BABYLON.DirectionalLight("spotLight", new BABYLON.Vector3(0, 1, 1), scene);

    //const light = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, 1), scene);

    //const light = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene);

    //const light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene);

    const light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene);


    //Light properties/colors.
    light.diffuse = new BABYLON.Color3(0,1,2);
    light.specular = new BABYLON.Color3(0,1,2);

    //Creating Shapes to get familiar with babylon.
    const sphere = new BABYLON.Mesh.CreateSphere('sphere', 16, 2, scene);
    const cube = new BABYLON.Mesh.CreateBox("box", 3.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const plane = new BABYLON.Mesh.CreatePlane("plane", 10.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const disc = new BABYLON.Mesh.CreateDisc("disc", 5, 30, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const torus = new BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene);
    const knot = new BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const cylinder = new BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene);

    const building = new BABYLON.MeshBuilder.CreateBox("building",{
      height: 100,
      width: 100,
      depth: 100
    }, scene);

    //Creating polygons using mesh builder.
    const myBox = new BABYLON.MeshBuilder.CreateBox('box', {
      height: 5,
      width: 6,
      depth: 1.0
    }, scene);

    const mySphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', {
      diameter: 4,
      diameterX: 3
    }, scene);

    const myPlane = new BABYLON.MeshBuilder.CreatePlane("myPlane", {
      width: 5,
      height: 100
    }, scene);

    //const myGround = new BABYLON.MeshBuilder.CreateGround("myGround", {width: 100, height: 100, subdivsions: 4}, scene);

    //Created Line by using different vectors to connect the points.
    const myPoints = [
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.Vector3(0, 1, 1),
      new BABYLON.Vector3(0, 1, 0)

    ];

    const myLine = new BABYLON.MeshBuilder.CreateLines("myLine", {
      points: myPoints
    }, scene);

    // Position of pilot and the rotation configuration.

    const pilot = new BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene);

    const alpha = 10;
    const beta = 11;
    const gamma = 12;

    // Positions of Geometry.

    pilot.position = new BABYLON.Vector3(6, 6, 10);
    pilot.rotation = new BABYLON.Vector3(alpha, beta, gamma);

    sphere.position.y = 6;
    sphere.position.x = -8;

    torus.position.y = 9;
    torus.positionx = -8;

    cube.position.y = 10;
    cube.position.x = -11;

    myLine.position.y = 25;
    myLine.position.x = 25;

    mySphere.position.y = -40;
    mySphere.position.x = 10;

    myBox.position.x = 50;
    myBox.position.y = -6;

    myPlane.position.x = 60;
    myPlane.position.y = -50;

    plane.position.x = 15;
    plane.position.y = -2;

    disc.position.x = 12;
    disc.position.y = -7;

    knot.position.x = 12;
    knot.position.y = -10;

    building.position.x = 0;
    building.position.y = 0;

    const ground = new BABYLON.Mesh.CreateGround("ground1", 600, 600, 600, scene);

    scene.debugLayer.show();

    //Setting ambient lighting for the scene.
    scene.ambientColor = new BABYLON.Color3(1, 1, 1);

    //Setting Texture for shapes by using pictures of texture.
    const metalTexture = new BABYLON.StandardMaterial("metalTexture", scene);
    metalTexture.ambientTexture = new BABYLON.Texture("styles/textures/metal.jpeg", scene);

    const brickTexture = new BABYLON.StandardMaterial("brickTexture", scene);
    brickTexture.ambientTexture = new BABYLON.Texture("styles/textures/bricks.jpg", scene);

    const floorTexture = new BABYLON.StandardMaterial("floorTexture", scene);
    floorTexture.ambientTexture = new BABYLON.Texture("styles/textures/asphalt.jpg", scene);

    const buildingTexture = new BABYLON.StandardMaterial("buildingTexture", scene)
    buildingTexture.ambientTexture = new BABYLON.Texture("styles/textures/bricks.jpg", scene);



    // metalTexture.diffuseColor = new BABYLON.Color3(1, 0, 1);
    // metalTexture.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    // metalTexture.emissiveColor = new BABYLON.Color3(9, 7, 5);

    //makes mesh transparent.
    // myMaterial.alpha = 0.5;

    floorTexture.ambientColor = new BABYLON.Color3(9, 9, 0);
    brickTexture.ambientColor = new BABYLON.Color3(9, 9, 0);
    metalTexture.ambientColor = new BABYLON.Color3(9, 9, 0);

    buildingTexture.ambientColor = new BABYLON.Color3(9,9,0);

    building.material = buildingTexture;
    sphere.material = brickTexture;
    cube.material = metalTexture;
    ground.material = floorTexture;



    return scene;
  }

  //Initializes Scene
  const scene = createScene();

  //Renders the scene.
  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', function() {
    engine.resize();
  });

});
