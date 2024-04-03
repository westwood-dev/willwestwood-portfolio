<script setup lang="ts">
const { params } = useRoute();
const { data } = await useAsyncData(params.project, () =>
  queryContent('/project').where({ route: params.project }).findOne()
);

onBeforeMount(() => {
  document.querySelector('#scroll-section')?.scrollTo({ top: 0 });
});

const fsImageData = ref({ src: '', alt: '' });

const showFSImage = (src: string, alt: string) => {
  fsImageData.value = { src, alt };
};

const closeFSImage = () => {
  fsImageData.value = { src: '', alt: '' };
};
</script>

<template>
  <div>
    <!-- <div v-if="data"> -->
    <NuxtImg :src="data.cover" class="cover-img" />
    <div class="project-details">
      <h1 class="project-title">{{ data.title }}</h1>
      <p class="project-date">{{ data.date }}</p>
      <div>
        <div v-for="item in data.detail">
          <div v-if="item.type === 'text'">
            <p class="project-text">{{ item.data }}</p>
          </div>

          <div v-else-if="item.type === 'image'" class="project-image-cont">
            <NuxtImg
              :src="item.data.src"
              class="project-image"
              :alt="item.data.alt"
              @click="showFSImage(item.data.src, item.data.alt)"
            />
          </div>

          <div v-else-if="item.type === 'link'">
            <a
              :href="item.data.href"
              :target="item.data.target"
              class="textColour"
            >
              <p>{{ item.data.text }}</p>
            </a>
          </div>

          <div
            v-else-if="item.type === 'imageGrid'"
            class="project-image-grid"
            :style="{
              'grid-template-columns': 'repeat(' + item.columns + ', 1fr)',
            }"
          >
            <div v-for="img in item.data">
              <NuxtImg
                :src="img.src"
                :alt="img.alt"
                class="project-image-grid-image"
                @click="showFSImage(img.src, img.alt)"
              />
              <p class="project-image-grid-caption">{{ img.cap }}</p>
            </div>
          </div>
          <div v-else-if="item.type === 'video'" class="project-video-cont">
            <video
              :src="item.data.src"
              class="project-video"
              :controls="item.data.controls"
              :muted="item.data.muted"
              :autoplay="item.data.autoplay"
              :loop="item.data.loop"
            ></video>
          </div>
          <div v-else>
            <!-- <p>Unknown type</p> -->
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <template v-if="fsImageData.src">
      <ImageFullscreen
        :src="fsImageData.src"
        :alt="fsImageData.alt"
        @close="closeFSImage"
      />
    </template>
  </div>
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

.project-image-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  max-width: 90vw;
  max-height: 60vh;
  cursor: pointer;
}

.project-image-grid {
  display: grid;
  gap: 10px;
}

.project-image-grid-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

.project-image-grid-caption {
  font-size: 1rem;
  margin: 0 0 10px 0;
  padding: 0;
}

.project-video-cont {
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-video {
  max-width: calc(100svw - 20px);
  max-height: 80vh;
  margin-bottom: 20px;
  border-radius: 10px;
}

@media screen and (max-width: 600px) {
  .cover-img {
    height: calc(100vh - 12svw - 20px);
  }
  .project-title {
    font-size: 2rem;
  }
  .project-date {
    font-size: 1rem;
  }

  .project-text {
    font-size: 0.8rem;
  }

  .project-image {
    max-width: calc(100vw - 20px);
  }

  .project-image-grid {
    grid-template-columns: 1fr !important;
  }

  .project-image-grid-caption {
    font-size: 0.5rem;
  }
}
</style>
