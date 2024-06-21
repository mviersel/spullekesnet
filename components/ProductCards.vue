<template>
    <div class="mt-5 w-80 transform overflow-hidden rounded-lg bg-siteMain-100 shadow-md duration-300 hover:shadow-lg">
        <img class="h-48 w-full object-cover object-center" :src="`${product.image}`" alt="Product Image" />
        <div class="p-4">
            <h2 class="mb-2 text-lg font-medium text-siteMain-200">{{ product.title }}</h2>
            <p class="mb-2 text-base text-siteMain-200 opacity-75">{{ product.description }}</p>
            <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-white">{{ product.newPrice }}</p>
                <p class="text-base  font-medium line-through text-gray-400">{{ product.oldPrice }}</p>
                <p class="ml-auto text-base font-medium text-green-500">30% off</p>
            </div>
            <div>
                <NuxtLink :to="`/products/${product.id}`">
                    <button
                        class="w-full bg-siteMain-200 rounded-md text-center my-2 hover:bg-siteMain-300 hover:text-white">Buy
                        now</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style scoped></style>