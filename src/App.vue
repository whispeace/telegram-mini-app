<template>
  <div class="min-h-screen bg-gray-100 p-4">
    <header class="bg-white shadow rounded-lg p-4 mb-4">
      <h1 class="text-2xl font-bold text-gray-800">Example Mini App</h1>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import WebApp from '@twa-dev/sdk';

onMounted(() => {
  WebApp.ready();
});
</script>