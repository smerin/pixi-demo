PIXI.utils.sayHello();

var renderer = PIXI.autoDetectRenderer(512, 512, {
  transparent: true,
  resolution: 1
});
document.getElementById("display").appendChild(renderer.view);

var stage = new PIXI.Container();

PIXI.loader.add("logo", "images/react.png").load(setup);

var logo;

function setup() {
  stage.interactive = true;

  logo = new PIXI.Sprite(PIXI.loader.resources["logo"].texture);

  logo.interactive = true;
  logo.scale.set(0.5, 0.5);
  logo.anchor.set(0.5, 0.5);
  logo.pivot.set(200, 0);

  logo.click = function() {
    logo.scale.x -= 0.05;
    logo.scale.y -= 0.05;
  };

  stage.addChild(logo);

  animationLoop();
}

function animationLoop() {
  requestAnimationFrame(animationLoop);

  logo.x = renderer.width / 2;
  logo.y = renderer.height / 2;

  logo.rotation += 0.01;

  renderer.render(stage);
}
