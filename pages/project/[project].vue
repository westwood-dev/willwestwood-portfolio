<script setup>
const { params } = useRoute();
const data = await queryContent('projects')
  .where({ route: params.project })
  .findOne();
// const articles = await queryContent('articles').where({ title: 'Home' }).findOne()
// console.log(data);

onBeforeMount(() => {
  document.querySelector('#scroll-section').scrollTo({ top: 0 });
});
</script>

<template>
  <NuxtImg :src="data.cover" class="cover-img" />
  <div class="project-details">
    <h1 class="project-title">{{ data.title }}</h1>
    <p class="project-date">{{ data.date }}</p>
    <div>
      <div v-for="item in data.detail">
        <div v-if="item.type == 'text'">
          <p class="project-text">{{ item.data }}</p>
        </div>
        <div v-else-if="item.type == 'image'">
          <NuxtImg
            :src="item.data.src"
            class="project-image"
            alt="{{ item.data.alt }}"
          />
        </div>
        <div v-else-if="item.type == 'link'">
          <a href="{{ item.data.url }}" target="{{ item.data.target }}">
            <p class="project-text">{{ item.data.text }}</p>
          </a>
        </div>
        <div
          v-else-if="item.type == 'imageGrid'"
          class="project-image-grid"
          :style="{
            'grid-template-columns': 'repeat(' + item.columns + ', 1fr)',
          }"
        >
          <div v-for="img in item.data">
            <NuxtImg
              :src="img.src"
              alt="img.alt"
              class="project-image-grid-image"
            />
            <p class="project-image-grid-caption">{{ img.cap }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- {{ data }} -->
</template>

<style scoped>
.cover-img {
  width: calc(100vw - 20px);
  height: calc(100vh - 5vw - 20px);
  object-fit: cover;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 10px;
}

.project-details {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.project-title {
  font-size: 5vw;
  margin: 0;
  padding: 0;
}

.project-date {
  font-size: 1vw;
  margin: 0;
  padding: 0;
}

.project-text {
  font-size: 1rem;
}

.project-image {
  max-width: 90vw;
  max-height: 60vh;
}

.project-image-grid {
  display: grid;
  gap: 10px;
  /* grid-template-columns: repeat(3, 1fr); */
}

.project-image-grid-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.project-image-grid-caption {
  font-size: 1rem;
  margin: 0 0 10px 0;
  padding: 0;
}
</style>
