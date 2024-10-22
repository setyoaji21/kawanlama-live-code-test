// plugins/api.ts
import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: 'https://dummyjson.com/products',
  })

  // Provide the Axios instance globally
  nuxtApp.provide('api', api)
})
