// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      "name": "Spullekes.net",
      "short_name": "Spullekes",
      "description": "Een plek voor jouw tweede hands spullekes",
      "start_url": ".",
      "display": "standalone",
      "background_color": "#12355B",
      icons: [
        {
          src: "public/android-chrome-192x192.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "public/android-chrome-192x192.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "public/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "public/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ]
    }
  },
  plugins: ["~/plugins/firebaseConfig.js"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "siteMain": {
              100: "#12355B",
              200: "#F0F2EF",
              300: "#FF206E"
            }
          }
        }
      }
    }
  }
}
)


// "icons": [
//   {
//     "src": "images/touch/homescreen48.png",
//     "sizes": "48x48",
//     "type": "image/png"
//   },
//   {
//     "src": "images/touch/homescreen72.png",
//     "sizes": "72x72",
//     "type": "image/png"
//   },
//   {
//     "src": "images/touch/homescreen96.png",
//     "sizes": "96x96",
//     "type": "image/png"
//   },
//   {
//     "src": "images/touch/homescreen144.png",
//     "sizes": "144x144",
//     "type": "image/png"
//   },
//   {
//     "src": "images/touch/homescreen168.png",
//     "sizes": "168x168",
//     "type": "image/png"
//   },
//   {
//     "src": "images/touch/homescreen192.png",
//     "sizes": "192x192",
//     "type": "image/png"
//   }
// ],