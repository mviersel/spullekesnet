<template>
    <header
        class='flex py-4 px-4 sm:px-10 bg-siteMain-100 font-sans min-h-[70px] tracking-wide relative z-50 text-white border-b-4 border-siteMain-300'>
        <div class='flex flex-wrap items-center gap-4 w-full'>
            <NuxtLink to="/"><img src="../assets/img/Spulleke-logo-transparent.png" alt="logo" class='w-40' />
            </NuxtLink>
            <div class="border-l border-siteMain-200 h-6 max-lg:hidden opacity-45"></div>
            <div class="hidden lg:block">
                <ul class='flex gap-x-8 max-lg:space-y-2'>
                    <li class='max-lg:py-3'>
                        <NuxtLink to="/" class='hover:text-siteMain-300 block font-medium text-[15px]'>Home
                        </NuxtLink>
                    </li>
                    <li class='max-lg:py-3'>
                        <NuxtLink to="/products" class='hover:text-siteMain-300 block font-medium text-[15px]'>
                            Products
                        </NuxtLink>
                    </li>
                    <li class='max-lg:py-3'>
                        <NuxtLink to="/" class='hover:text-siteMain-300 block font-medium text-[15px]'>
                            Account
                        </NuxtLink>
                    </li>
                    <li class='max-lg:py-3'>
                        <NuxtLink to="/" class='hover:text-siteMain-300 block font-medium text-[15px]'>Edit
                        </NuxtLink>
                    </li>
                </ul>
            </div>


            <div class='flex items-center ml-auto space-x-6'>
                <!-- check if the user is loggen in. If yes then show user -->
                <div v-if="user" class="flex items-center gap-6">
                    <p class="font-light">Welcome, {{ user.email }}</p>
                    <button @click="handleLogout"
                        class='hover:text-[#007bff] block font-medium text-[15px]'>Logout</button>
                </div>
                <!-- Else show login/register button -->
                <div v-else>
                    <p class="flex gap-2 items-center"><a href="/login"
                            class='hover:text-siteMain-300 block font-medium text-[15px]'>Login</a> or <a href="/register"
                            class='hover:text-siteMain-300 block font-medium text-[15px]'>Register</a></p>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { logout } from '~/services/AuthService';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const user = ref(null);
const auth = getAuth();

const handleLogout = async () => {
    await logout();
    user.value = null;
};

onMounted(() => {
    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
    });
});
</script>

<style scoped></style>