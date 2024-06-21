<template>
    <div>
        <!-- <h1>Items List title</h1> -->
        <div v-for="product in products" :key="product.id">
            <productCards :product="product"/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import useFirestore from "~/composables/useFirestore";

const { getItems } = useFirestore();

const products = ref([]);

const fetchItems = async () => {
    products.value = await getItems();
    console.log(products);
};

onMounted(fetchItems);
</script>