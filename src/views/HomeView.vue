<template>
  <div>
    <div class="bg-white shadow rounded-lg p-4">
      <h2 class="text-xl font-semibold mb-4">Welcome to our Demo App!</h2>
      <p class="mb-4">This app demonstrates some basic features of Telegram Mini Apps.</p>
      <button @click="showAlert" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Show Alert
      </button>
    </div>
    <UserInfo />
    <ColorPicker />
  </div>
</template>

<script setup lang="ts">
import WebApp from '@twa-dev/sdk';
import UserInfo from '@/components/UserInfo.vue';
import ColorPicker from '@/components/ColorPicker.vue';

const showAlert = () => {
  WebApp.showAlert('Hello from Telegram Mini App!');
};
</script>