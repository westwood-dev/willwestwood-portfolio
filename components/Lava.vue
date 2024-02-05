<template>
  <div id="lava-cont">
    <div class="wrap">
      <div class="meta"></div>
      <div class="meta"></div>
      <div class="meta"></div>
    </div>
    <div id="cursor-meta"></div>
  </div>
</template>

<script setup>
// document.querySelectorAll('.meta').forEach((meta, i) => {});
let mouseX = 0;
let mouseY = 0;
onMounted(() => {
  document.getElementById('lava-cont').addEventListener('mousemove', (e) => {
    document.getElementById('cursor-meta').style.transform =
      'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
  });
});
// document.getElementById('lava-cont').addEventListener('mousemove', (e) => {
//   mouseY = e.clientY / window.innerHeight + '%';
//   mouseX = e.clientX / window.innerWidth + '%';
// });
</script>

<style scoped>
#lava-cont {
  background-color: black;
  width: 100vw;
  height: 100vh;
  -webkit-filter: contrast(25);
  filter: contrast(25);
  position: fixed;
  top: 0;
  z-index: -1;
}

.wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.meta:before,
.meta:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  left: 50%;
  top: 50%;
  margin: -50px;
  background: rgba(255, 0, 0, 0.9);
  border-radius: 50%;
  -webkit-filter: blur(25px);
  filter: blur(25px);
  animation: move 12s infinite alternate ease-in-out;
}
.meta:before {
  animation-duration: 19.3s;
  animation-delay: -3.3s;
}
.meta:nth-child(2):before {
  animation-duration: 14.7s;
  animation-delay: -2.7s;
}
.meta:nth-child(2):after {
  animation-duration: 8.7s;
  animation-delay: -5.32s;
}
.wrap {
  animation: spin 10s linear infinite;
}

#cursor-meta:before,
#cursor-meta:after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  /* left: 50%;
  top: 50%; */
  margin: -50px;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 50%;
  -webkit-filter: blur(25px);
  filter: blur(25px);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes move {
  0% {
    transform: translate(0%, 100%);
  }
  15% {
    transform: translate(-120%, 160%);
  }
  30% {
    transform: translate(100%, -80%);
  }
  40% {
    transform: translate(-140%, 0%);
  }
  60% {
    transform: translate(40%, -80%);
  }
  80% {
    transform: translate(-160%, -20%);
  }
  100% {
    transform: translate(40%, 60%);
  }
}
</style>
