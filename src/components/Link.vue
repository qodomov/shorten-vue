<template>
  <div class="flex justify-between items-center font-poppins p-5 bg-white rounded">
    <p class="text-black font-medium">{{ link.original_link }}</p>
    <div class="flex items-center gap-3">
      <p class="text-cyan font-medium">{{ link.full_short_link }}</p>
      <button
        @click="copyClipBoard(link.full_short_link)"
        :class="{ 'bg-dark-violet': copied }"
        class="bg-cyan px-5 font-medium text-white rounded hover:opacity-70 py-2"
      >
        {{ copied ? 'Copied':'Copy' }}
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps(['link'])
const copied = ref(false)
const copyClipBoard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      copied.value = true
    })
    .catch((err) => console.log(err))
}
</script>