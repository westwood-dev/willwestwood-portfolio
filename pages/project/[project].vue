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
      </div>
    </div>
  </div>
  {{ data }}
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
  padding: 10px;
}

.project-details h1 {
  font-size: 5vw;
  margin: 0;
  padding: 0;
}
</style>
