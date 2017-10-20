window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("renderCanvas");
  const engine = new BABYLON.Engine(canvas, true);

  const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(100, 100, -10), scene);

    camera.setTarget(BABYLON.Vector3.Zero());

    camera.attachControl(canvas, false);

    const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    const sphere = new BABYLON.Mesh.CreateSphere('sphere', 16, 2, scene);

    sphere.position.y = 1;

    const ground = new BABYLON.Mesh.CreateGround("ground1", 100, 100, 1, scene);

    return scene;
  }

  const scene = createScene();

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', function() {
    engine.resize();
  });

});
