<script setup>
import MessageDisplay from "@/components/MessageDisplay.vue";

import { ref } from 'vue'

import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage  } from "firebase/messaging";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
  });
}

const firebaseConfig = {
  apiKey: "AIzaSyAVI3zxO0LDOsG2HJw91JXe6woo-EgIWVY",
  authDomain: "pocs-8fc8d.firebaseapp.com",
  projectId: "pocs-8fc8d",
  storageBucket: "pocs-8fc8d.appspot.com",
  messagingSenderId: "790304630826",
  appId: "1:790304630826:web:a9f9f396183e3eb9417b53",
  measurementId: "G-TX1VJC348H"
};

let token = ref();
const app = initializeApp(firebaseConfig);
const messaging = getMessaging();

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
});

getToken(messaging, { vapidKey:
      'BF9JJjsi86JtJaB12_n2jO7SxuguwgT5av0w0UBfRmN0T8k1qnIe7nZDHlaA-jBXJkz0LORX_2vvFno-kl3G_-M' })
    .then((currentToken) => {
  if (currentToken) {
    token.value = currentToken;

    console.log("Token is:",currentToken);
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }

}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});
</script>

<template>
  <main>
    <MessageDisplay />
  </main>
</template>
<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
