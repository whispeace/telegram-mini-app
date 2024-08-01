<template>
  <div class="bg-white shadow rounded-lg p-4 mt-4">
    <h3 class="text-lg font-semibold mb-2">User Info</h3>
    <p><strong>Name:</strong> {{ WebApp.initDataUnsafe.user?.first_name }} {{ WebApp.initDataUnsafe.user?.last_name }}</p>
    <p><strong>Username:</strong> {{ WebApp.initDataUnsafe.user?.username || 'Not available' }}</p>
    <button @click="requestLocation" class="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
      Request Location
    </button>
  </div>
</template>

<script setup lang="ts">
import WebApp from '@twa-dev/sdk';

const requestLocation = () => {
  console.log(WebApp);
  
  // WebApp.().then((location) => {
  //   if (location) {
  //     WebApp.showAlert(`Latitude: ${location.latitude}, Longitude: ${location.longitude}`);
  //   }
  // });
};
</script>