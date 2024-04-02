<template>
  <div class="header-main-cont">
    <div v-if="!mobile" class="side-cont"></div>
    <div id="header-cont" class="bgColour">
      <NuxtLink to="/">
        <h1 class="textColour">William Westwood</h1>
      </NuxtLink>
      <p>user@site: ~{{ $route.path }}</p>
    </div>
    <div v-if="!mobile" class="side-cont"><ThemeChange /></div>
  </div>
</template>

<script setup lang="ts">
const mobile = ref(false);
onMounted(() => {
  window.addEventListener('resize', () => {
    mobile.value = window.matchMedia('(max-width: 600px)').matches;
  });
});
</script>

<style scoped>
.header-main-cont {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.side-cont {
  width: 15vw;
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
}

#header-cont {
  justify-self: center;
  width: 60vw;
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
  font-size: 2.5vw;
  text-align: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

#header-cont p {
  font-family: monospace;
  font-size: 0.8vw;
  text-align: center;
  width: 100%;
  margin: 0 0 10px 0;
  padding: 0;
}

@media screen and (max-width: 600px) {
  #header-cont {
    height: 12svw;
    width: 100vw;
  }

  #header-cont h1 {
    font-size: 1.3rem;
    margin-top: 5px;
  }
  #header-cont p {
    font-size: 0.5rem;
  }
}
</style>
