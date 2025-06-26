<template>
  <div class="login">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" placeholder="Email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" placeholder="Password" required />
      </div>
      <button type="submit" class="btn-common">Login</button>
    </form>
  </div>
</template>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  text-align: center;
  form {
    width: 100%;
    max-width: 500px;
    padding: 2rem 1rem;
    background: var(--vt-c-gray);
    border: 1px solid var(--vt-c-gray-soft);
    margin-bottom: 1.5rem;
    @media (max-width: 767px) {
      margin-bottom: 1rem;
    }
    .form-group {
      display: flex;
      @media (max-width: 767px) {
        flex-direction: column;
      }
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      label {
        text-align: left;
        display: inline-block;
        width: 100px;
        @media (max-width: 767px) {
          width: unset;
          margin-bottom: 0.5rem;
        }
      }
      input {
        color: #666;
        padding: 0;
        flex: 1;
        background: unset;
        border: unset;
        border-bottom: 1px solid var(--vt-c-gray-soft);
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const email = ref('any@email.com');
const password = ref('any');
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const handleLogin = () => {
  if (userStore.login(email.value, password.value)) {
    router.push((route.query.returnUrl as string) || '/');
  } else {
    alert('Invalid credentials');
  }
};
</script>

<!-- <script setup lang="ts">
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
</template> -->
