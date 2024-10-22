<template>
  <div>
    <section class="bg-gray-50 dark:bg-gray-900 ">
      <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
      >
        <div
          class="w-full bg-white rounded-lg shadow dark:border md:h-full xl:p-0 m-10 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"
            >
              Product List
            </h1>
            <NuxtLink to="/cart">
              <UButton
              type="button"
              color="blue"
              >Cart</UButton>
            </NuxtLink>
            <div class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
              <UCard
                ui="{shadow: 'shadow'}"
                class="w-72"
                v-for="product in productStore.products" :key="product.id">
                <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                <div class="px-4 py-3 w-68">
                  <span class="text-gray-400 mr-3 uppercase text-xs">{{ product.brand }}</span>
                  <p class="text-lg font-bold text-black truncate block capitalize">{{ product.title }}</p>
                  <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">{{ product.price }}</p>
                    <div class="ml-auto">
                      <UButton
                        type="button"
                        @click="addToCart(product)"
                      >Add to cart</UButton>
                    </div>
                  </div>
                </div>
                </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue';

  const productStore = useProductStore()

  const state = reactive({
    productsToCart: []
  })

  onMounted(async () => {
    await productStore.getAllProducts()
  })

  function addToCart(product: any) {
    state.productsToCart.push(product)
    productStore.setCartProducts(state.productsToCart)
  }
</script>