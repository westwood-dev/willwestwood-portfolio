<template>
  <div class="fs-image-cont" @click="emit('close')">
    <NuxtImg :src="src" class="fs-image" :alt="alt" />
    <span
      @click="emit('close')"
      class="fs-image-close material-symbols-outlined"
    >
      close
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  src: string;
  alt: string;
}>();

const emit = defineEmits(['close']);
</script>

<style scoped>
.fs-image-cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.fs-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  pointer-events: none;
}

.fs-image-close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
