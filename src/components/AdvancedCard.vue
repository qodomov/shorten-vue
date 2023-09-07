<template>
<!-- Advanced Card -->
<figure class="advanced_card bg-white p-3 font-poppins relative">
    <div class="bg-dark-violet inline-block p-5  absolute -top-10 rounded-full">
        <img :src="item.image" class="w-9 h-9" :alt="item.title">
    </div>
    <figcaption class="text-center mt-10">
        <h2 class="text-xl ">{{ item.title }}</h2>
        <p class="mt-5 text-gray-violet">{{ item.body }}</p>
    </figcaption>
  </figure>
</template>
<!-- Vue 3 composition api -->
<script setup>
defineProps(['item'])
</script>

<!-- Vue 2 options api -->
<!-- <script>
export default {
    props:['item']
}
</script> -->