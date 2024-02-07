<template>
  <div>
    <canvas id="meta-canvas"></canvas>
  </div>
</template>

<script setup>
const { $p5 } = useNuxtApp();

// console.log('p5: ', $p5);

let mShader;
let balls;
let isSave = false;

const sketch = (s) => {
  s.setup = () => {
    const canvas = s.createCanvas(1000, 600, s.WEBGL);
    canvas.parent('meta-canvas');
    s.colorMode(s.HSB);
    mShader = s.loadShader('/shaders/meta-frag.glsl');
    console.log(mShader);
    s.shader(mShader);
    for (let i = 0; i < balls.length; i++) {
      const pos = s.createVector(s.random(s.width), s.random(s.height), 1.0);
      const vel = s.createVector(s.random(-3, 3), s.random(-1, 1), 0.0);
      const c = s.color(s.random(255), 255, 255);
      const rgb = s.createVector(
        s.red(c) / 255,
        s.green(c) / 255,
        s.blue(c) / 255
      );
      const r = s.random(50, 80);
      balls[i] = new Ball(pos, vel, rgb, r);
      balls[i].sync('balls', i);
    }
    mShader.set('n_balls', balls.length);
    s.colorMode(s.RGB);
  };

  s.draw = () => {
    s.background(0);
    s.shader(mShader);
    s.rect(0, 0, s.width, s.height);
    balls[0].pos.x = s.mouseX;
    balls[0].pos.y = s.height - s.mouseY;
    balls[0].sync('balls', 0);
    for (let i = 1; i < balls.length; i++) {
      balls[i].update();
      balls[i].sync('balls', i);
    }
    if (isSave) {
      s.saveFrame('screen-####.png');
    }
  };
};

class Ball {
  constructor(pos, vel, rgb, r) {
    this.pos = pos;
    this.vel = vel;
    this.rgb = rgb;
    this.r = r;
  }

  sync = (arrName, idx) => {
    varname = arrName + '[' + idx + '].';
    mShader.set(varname + 'pos', pos);
    mShader.set(varname + 'rgb', rgb);
    mShader.set(varname + 'r', r);
  };

  update = () => {
    pos.add(vel);
    if (pos.x < 0 || pos.x >= width) {
      vel.x *= -1;
    }
    if (pos.y < 0 || pos.y >= height) {
      vel.y *= -1;
    }
  };
}

const sketchInstance = new $p5(sketch);

// const setup = () => {
//   const canvas = $p5.createCanvas(1000, 600, $p5.WEBGL);
//   canvas.parent('meta-canvas');
//   $p5.colorMode($p5.HSB);
//   mShader = $p5.loadShader('/shaders/meta-frag.glsl');
//   console.log(mShader);
//   $p5.shader(mShader);
//   for (let i = 0; i < balls.length; i++) {
//     const pos = $p5.createVector(
//       $p5.random($p5.width),
//       $p5.random($p5.height),
//       1.0
//     );
//     const vel = $p5.createVector($p5.random(-3, 3), $p5.random(-1, 1), 0.0);
//     const c = $p5.color($p5.random(255), 255, 255);
//     const rgb = $p5.createVector(
//       $p5.red(c) / 255,
//       $p5.green(c) / 255,
//       $p5.blue(c) / 255
//     );
//     const r = $p5.random(50, 80);
//     balls[i] = new Ball(pos, vel, rgb, r);
//     balls[i].sync('balls', i);
//   }
//   mShader.set('n_balls', balls.length);
//   $p5.colorMode($p5.RGB);
// };

// const draw = () => {
//   $p5.background(0);
//   $p5.shader(mShader);
//   $p5.rect(0, 0, $p5.width, $p5.height);
//   balls[0].pos.x = $p5.mouseX;
//   balls[0].pos.y = $p5.height - $p5.mouseY;
//   balls[0].sync('balls', 0);
//   for (let i = 1; i < balls.length; i++) {
//     balls[i].update();
//     balls[i].sync('balls', i);
//   }
//   if (isSave) {
//     $p5.saveFrame('screen-####.png');
//   }
// };

// class Ball {
//   constructor(pos, vel, rgb, r) {
//     this.pos = pos;
//     this.vel = vel;
//     this.rgb = rgb;
//     this.r = r;
//   }

//   sync = (arrName, idx) => {
//     varname = arrName + '[' + idx + '].';
//     mShader.set(varname + 'pos', pos);
//     mShader.set(varname + 'rgb', rgb);
//     mShader.set(varname + 'r', r);
//   };

//   update = () => {
//     pos.add(vel);
//     if (pos.x < 0 || pos.x >= width) {
//       vel.x *= -1;
//     }
//     if (pos.y < 0 || pos.y >= height) {
//       vel.y *= -1;
//     }
//   };
// }
</script>
