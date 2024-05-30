<script setup lang="ts">
const { data } = await useAsyncData(
  'galleryProjects',
  () =>
    queryContent('/project')
      .only(['title', 'cover', 'route'])
      .sort({ id: -1 })
      .find(),
  { lazy: true }
);

const galleryOpacity = ref(1);

const spawnNewInPlace = (e: any) => {
  const clickedEl = e.srcElement;
  const newImg = document.createElement('img');
  newImg.setAttribute('src', clickedEl.getAttribute('src'));
  newImg.id = 'newImg';
  newImg.style.backgroundColor = 'red';
  newImg.style.position = 'fixed';
  newImg.style.margin = '10px';
  newImg.style.borderRadius = '10px';
  newImg.style.top = `${clickedEl.getBoundingClientRect().top}px`;
  newImg.style.left = `${clickedEl.getBoundingClientRect().left - 10}px`;
  newImg.style.width = `${clickedEl.getBoundingClientRect().width}px`;
  newImg.style.height = `${clickedEl.getBoundingClientRect().height - 10}px`;
  newImg.style.zIndex = '1000';
  newImg.style.objectFit = 'cover';
  newImg.style.transition = 'all 0.5s ease-in-out';
  document.body.appendChild(newImg);
  galleryOpacity.value = 0;
  setTimeout(() => {
    if (window.matchMedia('(max-width: 600px)').matches) {
      newImg.style.top = '12svw';
      newImg.style.left = '0';
      newImg.style.width = 'calc(100vw - 20px)';
      newImg.style.height = 'calc(100vh - 12svw - 20px)';
    } else {
      newImg.style.top = '5vw';
      newImg.style.left = '0';
      newImg.style.width = 'calc(100vw - 20px)';
      newImg.style.height = 'calc(100vh - 5vw - 20px)';
    }
  }, 100);
  setTimeout(() => {
    newImg.remove();
  }, 1000);
};

const routeToProject = (route: string, e: any) => {
  spawnNewInPlace(e);
  setTimeout(() => {
    navigateTo(`/project/${route}`);
  }, 500);
};
</script>

<template>
  <div id="gallery-root">
    <div class="gallery">
      <div
        v-for="(item, index) in data"
        :key="index"
        class="gallery-item"
        :style="{ opacity: galleryOpacity }"
        tabindex="0"
      >
        <NuxtImg
          class="project-image"
          :src="item.cover"
          :alt="item.title + ' cover image'"
          @click="routeToProject(item.route, $event)"
          sizes="xl:20vw lg:30vw md:40vw sm:50vw xs:100vw"
          format="webp"
        />
        <div class="project-details">
          <div class="project-cover bgColour"></div>
          <div class="project-text">
            <p>
              {{ item.title }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 10px;
  padding: 0 10px;
}

.gallery-item {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 5;
  box-sizing: border-box;
  /* padding: 5px 5px 0px 5px; */
  transition: opacity 0.5s linear;
  height: fit-content;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

.project-cover {
  box-sizing: border-box;
  /* margin: 10px 5px 0 5px; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  opacity: 0.5;
}

.project-text {
  box-sizing: border-box;
  margin: 5px 25px;
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 50px);
  height: calc(100% - 10px);
  border-radius: 10px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.project-text p {
  margin: 0;
  padding: 0;
  font-size: 1.5vw;
  color: white;
  max-width: calc(100% - 20px);
}

.project-details {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
}

.gallery-item:hover .project-details {
  opacity: 1;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .gallery {
    grid-template-columns: repeat(1, 1fr);
  }

  .project-text p {
    font-size: 1rem;
  }
}
</style>
