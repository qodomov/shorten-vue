<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <header class="font-poppins py-5">
        <div class="container mx-auto flex items-center gap-8">
            <!-- Logo -->
            <a href="">
                <img :src="logo" alt="brand">
            </a>
            <!-- Navigation -->
            <nav class="flex items-center justify-between flex-grow">
                <ul class="flex gap-5">
                    <li v-for="link in navLinks" :key="link.id">
                        <a class="text-gray-violet hover:text-black transition-all duration-300" :href="link.url">{{ link.title }}</a>
                    </li>
                </ul>
                <!-- Login Buttons -->
                <div class="flex items-center gap-3">
                    <a href="#" class="">Login</a>
                    <Button class="p-2 px-5 rounded-3xl">
                        <a href="">Sign Up</a>
                    </Button>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup>
import { navLinks } from "../config";
import { logo } from "../assets";
import Button from "../ui-components/Button.vue";
</script>

