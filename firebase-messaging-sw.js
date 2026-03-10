// firebase-messaging-sw.js – handles background messages
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBw-EKxDt4lE1wB34YP0ovc3yAKwnS3Zng",
  authDomain: "catchat-6e94d.firebaseapp.com",
  projectId: "catchat-6e94d",
  storageBucket: "catchat-6e94d.firebasestorage.app",
  messagingSenderId: "151675472868",
  appId: "1:151675472868:web:3720620c3031e6bb0655f1",
  measurementId: "G-3ZGTP8DLZM"
});

const messaging = firebase.messaging();

// Optional: customize background notification
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification?.title || 'New message in CatChat!';
  const notificationOptions = {
    body: payload.notification?.body || 'Someone sent you a meow~ 🐾',
    icon: 'https://via.placeholder.com/192/ff9ec1/ffffff?text=Cat'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
