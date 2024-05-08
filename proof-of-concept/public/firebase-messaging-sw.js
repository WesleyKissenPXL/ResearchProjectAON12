importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAVI3zxO0LDOsG2HJw91JXe6woo-EgIWVY",
    authDomain: "pocs-8fc8d.firebaseapp.com",
    projectId: "pocs-8fc8d",
    storageBucket: "pocs-8fc8d.appspot.com",
    messagingSenderId: "790304630826",
    appId: "1:790304630826:web:a9f9f396183e3eb9417b53",
    measurementId: "G-TX1VJC348H"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: playload.notification.body,
        icon: '/favicon-32x32.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});