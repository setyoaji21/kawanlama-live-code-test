import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
  state: (): any => ({
    products: [],
    cart: []
  }),
  actions: {
    async getAllProducts() {
      const { $api }: any = useNuxtApp()
      try {
        const { data } = await $api.get('/')
        this.products = data.products
      } catch (error) {
        console.log('Data not found: ', error)
      }
    },
    setCartProducts (products: any) {
      this.cart = products
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
    getCartProducts () {
      const tempCart = localStorage.getItem('cart')
      this.cart = tempCart ? JSON.parse(tempCart) : []
      return this.cart
    }
  }
})