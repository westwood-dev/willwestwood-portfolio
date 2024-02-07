<template>
  <vue-p5 v-on="{ setup, draw }"></vue-p5>
</template>

<script lang="ts">

async onMounted() {
  const {default: p5} = await import('p5');

  const sketch = (s) => {
    s.createCanvas(400, 400);
  }
}
</script>
