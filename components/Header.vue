<!-- <template>
  <div id="header-cont">
    <div class="header-center">
      <h1 id="header-title" class="textColour">WW.</h1>
      <div id="header-linkCont">
        <a class="header-link textColour" href="/">Home</a>
        <a class="header-link textColour" href="/shop">Shop</a>
        <a class="header-link textColour" href="/about">About</a>
      </div>
    </div>
    <div class="header-buttons">
      <ThemeChange />
      <NuxtLink to="/cart">
        <span class="material-symbols-outlined textColour">
          shopping_cart
        </span>
      </NuxtLink>
    </div>
  </div>
</template> -->

<template>
  <div id="header-cont">
    <div
      class="header-section"
      :style="{ color: route.path.split('/')[1] == '' ? 'red' : 'white' }"
    >
      <h1>W.</h1>
      <p>Westwood</p>
    </div>

    <div
      class="header-section"
      :style="{ color: route.path.split('/')[1] == 'work' ? 'red' : 'white' }"
    >
      <h1>Work.</h1>
      <p>two</p>
    </div>

    <div
      class="header-section-center"
      :style="{
        color: route.path.split('/')[1] == 'project' ? 'red' : 'white',
      }"
    >
      <h1>W.</h1>
      <p>Center</p>
    </div>

    <div
      class="header-section"
      :style="{ color: route.path.split('/')[1] == 'about' ? 'red' : 'white' }"
    >
      <h1>About.</h1>
      <p>four</p>
    </div>

    <div
      class="header-section"
      :style="{
        color: route.path.split('/')[1] == 'contact' ? 'red' : 'white',
      }"
    >
      <h1>Contact.</h1>
      <p>five</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped>
#header-cont {
  display: grid;
  grid-template-columns: 15% 15% 40% 15% 15%;
  height: min-content;
}
.header-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0 1em;
}

.header-section h1 {
  font-family: 'CloisterBlack';
  font-size: 65px;
  text-align: center;
  margin: 0;
  padding: 0;
}

.header-section p {
  font-size: 20px;
  margin: 0;
  padding: 0;
}

.header-section-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

#header-title {
  font-family: 'CloisterBlack';
  font-size: 80px;
  text-align: center;
  margin: 0;
  padding: 0;
}

#header-linkCont {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.header-link {
  font-size: 15px;
  text-decoration: none;
  margin: 0 20px;
  padding: 0;
}

.header-link:hover {
  opacity: 0.5;
}

.header-link:active,
.header-link:visited {
  color: inherit;
}

.header-buttons {
  grid-area: fifth;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
