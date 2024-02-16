<template>
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
    />
    <div class="bgColour">
      <Header />
      <div id="scroll-section">
        <NuxtPage />
        <!-- <Gallery /> -->
        <Footer />
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  background-color: rgb(var(--bg));
  color: rgb(var(--text));
  overflow: hidden;
  transition: background-color 0.5s, color 0.5s;
  font-family: 'Poppins', sans-serif;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

:root {
  --text: 255, 255, 255;
  --bg: 33, 37, 41;
}

.textColour {
  color: rgb(var(--text));
  transition: color 0.5s;
}

.bgColour {
  background-color: rgb(var(--bg));
  transition: background-color 0.5s;
}

.textColourInvert {
  color: rgb(var(--bg));
  transition: color 0.5s;
}

.bgColourInvert {
  background-color: rgb(var(--text));
  transition: background-color 0.5s;
}

#scroll-section {
  overflow-y: scroll;
  height: calc(100vh - 5vw);
  box-sizing: border-box;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#scroll-section::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 600px) {
  #scroll-section {
    height: calc(100vh - 12vw);
  }
}
</style>

<!-- <script setup land="ts">
import { usePreferredDark } from '@vueuse/core';

const setFavicon = () => {
  const isDark = usePreferredDark();
  const favicon = computed(() =>
    isDark.value ? '/favicon.ico' : '/favicon.ico'
  );

  useFavicon(favicon, {
    rel: 'icon',
  });
};
onMounted(() => {
  setFavicon();
});
</script> -->
