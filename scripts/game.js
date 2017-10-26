window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas");
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 5, -10), scene);

    camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(canvas, false);

    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    //Creating Shapes to get familiar with babylon.
    const sphere = new BABYLON.Mesh.CreateSphere('sphere', 16, 2, scene);
    const cube = new BABYLON.Mesh.CreateBox("box", 3.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const plane = new BABYLON.Mesh.CreatePlane("plane", 10.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const disc = new BABYLON.Mesh.CreateDisc("disc", 5, 30, scene, false, BABYLON.Mesh.DEFAULTSIDE);
    const torus = new BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene);
    const knot = new BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, scene, false, BABYLON.Mesh.DEFAULTSIDE);

    const cylinder = new BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene);

    //Creation of Polygon.
    //const polygon = new BABYLON.Mesh.CreatePolygon(); 

    // Positions of Geometry.
    sphere.position.y = 6;
    sphere.position.x = -8;

    torus.position.y = 9;
    torus.positionx = -8;

    cube.position.y = 10;
    cube.position.x = -11;

    polygon.position.y = 14;
    polygon.position.x = -12;

    plane.position.x = 15;
    plane.position.y = -2;

    disc.position.x = 12;
    disc.position.y = -7;

    knot.position.x = 12;
    knot.position.y = -10;

    const ground = new BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);

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
