<template>
  <div id="header-cont" class="bgColour">
    <NuxtLink to="/">
      <h1 class="textColour">William Westwood</h1>
    </NuxtLink>
    <p>user@site: ~{{ $route.path }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
#header-cont {
  height: min-content;
  /* background-color: violet; */
  height: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}

#header-cont a {
  text-decoration: none;
}

#header-cont h1 {
  font-family: monospace;
  font-size: 3vw;
  text-align: center;
  width: 100vw;
  margin: 0;
  padding: 0;
}

#header-cont p {
  font-family: monospace;
  font-size: 0.8vw;
  text-align: center;
  width: 100vw;
  margin: 0 0 0 0;
  padding: 0;
}
</style>
