<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/userStore'

const email = ref('')
const password = ref('')
const router = useRouter()
const userStore = useUserStore()

const handleLogin = () => {
  if (userStore.login(email.value, password.value)) {
    router.push('/booking')
  } else {
    alert('Invalid credentials')
  }
}
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Email" required />
    <input v-model="password" type="password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
</template>