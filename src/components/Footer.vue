<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-very-dark-blue py-5">
    <div class="container mx-auto flex justify-between">
      <!-- Footer Logo -->
      <a href="">
        <img class="footer-logo" :src="logo" alt="footer-logo" />
      </a>
      <!--Nav -->
      <nav class="flex gap-10 font-poppins">
        <!-- Features -->
        <ul>
          <li class="text-white font-bold mb-3 text-lg">Features</li>
          <li
            class="text-gray-violet mb-1 text-sm hover:text-cyan transition-all duration-200"
            v-for="item in features"
            :key="item.id"
          >
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
        <!-- Resources -->
        <ul>
          <li class="text-white font-bold mb-3 text-lg">Resources</li>
          <li
            class="text-gray-violet mb-1 text-sm hover:text-cyan transition-all duration-200"
            v-for="item in resources"
            :key="item.id"
          >
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
        <!-- Company -->
        <ul>
          <li class="text-white mb-3 text-lg font-bold">Company</li>
          <li
            class="text-gray-violet mb-1 text-sm hover:text-cyan transition-all duration-200"
            v-for="item in company"
            :key="item.id">
            <a :href="item.url">{{ item.title }}</a>
          </li>
        </ul>
        <!-- Social -->
        <ul class="flex gap-3" >
          <li v-for="item in social" :key="item.id">
            <a href="item.url">
               <img :src="item.icon" :alt="item.title">
            </a>
           
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { logo } from '../assets'
import { features, resources, company, social } from '../config'
</script>
