<template>
    <!-- component -->
    <div
        class="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-siteMain-100 shadow-md duration-300 hover:shadow-lg">
        <img class="h-48 w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image" />
        <div class="p-4">
            <h2 class="mb-2 text-lg font-medium text-siteMain-200">Product Name</h2>
            <p class="mb-2 text-base text-siteMain-200 opacity-75">Product description goes here.</p>
            <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">€53,-</p>
                <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">€74,99</p>
                <p class="ml-auto text-base font-medium text-green-500">30% off</p>
            </div>
            <div>
                <button class="w-full bg-siteMain-200 rounded-md text-center my-2 hover:bg-slate-400">Buy now</button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped></style>