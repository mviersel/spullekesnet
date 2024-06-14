// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@vite-pwa/nuxt"],
  pwa: {
    "name": "Spullekesnet",
    "short_name": "Spullekes",
    "icons": [
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#ffffff",
    "background_color": "#ffffff",
    "display": "standalone"
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
})