<template>
  <div class="bg-white shadow rounded-lg p-4 mt-4">
    <h3 class="text-lg font-semibold mb-2">Color Picker</h3>
    <div class="flex space-x-2">
      <button
        v-for="color in colors"
        :key="color"
        @click="selectColor(color)"
        :class="`w-10 h-10 rounded-full ${color}`"
      ></button>
    </div>
    <p class="mt-2">Selected color: <span :class="`font-bold ${selectedColor}`">{{ selectedColor }}</span></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { WebApp } from '@twa-dev/sdk';

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'];
const selectedColor = ref('');

const selectColor = (color: string) => {
  selectedColor.value = color;
  WebApp.HapticFeedback.impactOccurred('medium');
};
</script>