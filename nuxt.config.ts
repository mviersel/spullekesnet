// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ["~/plugins/firebaseConfig.js"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            "site-main": {
              100: "#12355B",
              200: "#F0F2EF",
              300: "FF206E"
            }
          }
        }
      }
    }
  }
})
