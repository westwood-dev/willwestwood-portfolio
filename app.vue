<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
  <div class="bgColour">
    <Header />
    <NuxtPage />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

@font-face {
  font-family: 'CloisterBlack';
  src: url(/assets/fonts/CloisterBlack.ttf);
  font-weight: normal;
  font-style: normal;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: rgb(var(--bg));
  color: rgb(var(--text));
  overflow: hidden;
  transition: background-color 0.5s, color 0.5s;
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
</style>

<script>
const setFavicon = () => {
  const isDark = usePreferredDark();
  const favicon = computed(() =>
    isDark.value
      ? '/assets/images/LOGO-white.svg'
      : '/assets/images/LOGO-black.svg'
  );

  useFavicon(favicon, {
    rel: 'icon',
  });
};
onMounted(() => {
  setFavicon();
});
</script>
