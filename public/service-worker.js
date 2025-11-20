// Empty service worker to prevent 404 errors
// This file exists to handle any browser requests for service-worker.js
// If you want to implement a service worker, you can modify this file

self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of all pages immediately
  event.waitUntil(self.clients.claim());
});

// No fetch event handler - this service worker does nothing
// It exists only to prevent 404 errors

