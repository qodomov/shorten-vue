<template>
  <section id="short" class="bg-[#eff0f5] pb-10">
    <div class="container mx-auto">
      <!-- Form -->
      <form
        @submit.prevent="handleSubmit"
        class="bg-shorten-desktop bg-center bg-no-repeat bg-cover -translate-y-14 bg-dark-violet p-10 rounded"
      >
       <div class="flex gap-5">
        <input
          placeholder="Shorten a link here"
          type="text"
          :class="{'border-red border-2':fechtError}"
          v-model="url"
          class="text-lg py-2 px-5 flex-grow rounded outline-none"
        />
        <Button class="py-2 px-5 rounded text-lg">Shorten it!</Button>
       </div>
       <p class="text-red text-sm mt-3">{{ fechtError }}</p>
      </form>
      <div class="flex flex-col gap-5">
        <Link v-for="(link,index) in links " :key="index" :link="link" />
      </div>
      <div class="text-center pt-10 font-poppins">
        <h2 class="text-4xl font-medium">Advanced Statistics</h2>
        <p class="text-sm text-gray-violet mt-3">
          Track how your links are performing across the web with <br />
          our advanced statistics dashboard.
        </p>
      </div>
      <!-- Flex -->
      <div class="flex items-start mt-5 gap-5">
        <AdvancedCard v-for="item in advanced" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Link from '../components/Link.vue'
import Button from '../ui-components/Button.vue'
import AdvancedCard from '../components/AdvancedCard.vue'
import { advanced } from '../config'
const url = ref('')
const fechtError = ref('')
const links = ref([])
const handleSubmit = async () => {
  try {
    if(!url.value.trim().length) {
      fechtError.value = "Please add link"
      return
    }
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url.value.trim()}`)
    const data = await res.json()
    if(!data.ok) {
      fechtError.value = 'This is not a valid URL'
      return
    }
    links.value.push(data.result);
    fechtError.value = ''
    url.value = ''
  } catch (err) {
    fechtError.value = err.message
  }
}
</script>

<!-- <script>
let count = 0
export default {
  data() {
    return {
      count:0
    }
  }
}
</script> -->