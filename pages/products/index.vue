<template>
    <div>
        <h1>Items List title</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }}
            </li>
        </ul>
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