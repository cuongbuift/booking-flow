<template>
  <header>
    <img src="../assets/room.webp" alt="book a room" class="banner" />
  </header>
  <div class="content">
    <nav>
      <RouterLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <linearGradient
            id="h_Mf-NXBgiNYGydh6al-ga_DUr955fGCcud_gr1"
            x1="17.21"
            x2="37.725"
            y1="947.262"
            y2="883.021"
            gradientTransform="matrix(1 0 0 -1 0 950)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#dfe9f2"></stop>
            <stop offset=".391" stop-color="#d6e0e9"></stop>
            <stop offset="1" stop-color="#bfc8d1"></stop>
          </linearGradient>
          <path
            fill="url(#h_Mf-NXBgiNYGydh6al-ga_DUr955fGCcud_gr1)"
            d="M35,42H13c-3.866,0-7-3.134-7-7V13c0-3.866,3.134-7,7-7h22c3.866,0,7,3.134,7,7v22	C42,38.866,38.866,42,35,42z"
          ></path>
          <linearGradient
            id="h_Mf-NXBgiNYGydh6al-gb_DUr955fGCcud_gr2"
            x1="-12.732"
            x2="44.635"
            y1="-11.732"
            y2="45.635"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fed100"></stop>
            <stop offset="1" stop-color="#e36001"></stop>
          </linearGradient>
          <path
            fill="url(#h_Mf-NXBgiNYGydh6al-gb_DUr955fGCcud_gr2)"
            d="M35.602,20.924L34,19.692V15.5c0-0.276-0.224-0.5-0.5-0.5h-2c-0.276,0-0.5,0.224-0.5,0.5	v1.885l-6.634-5.103c-0.216-0.166-0.516-0.166-0.732,0l-11.236,8.643C11.944,21.274,12.191,22,12.764,22H14v12.5	c0,0.276,0.224,0.5,0.5,0.5h19c0.276,0,0.5-0.224,0.5-0.5V22h1.236C35.809,22,36.056,21.274,35.602,20.924z"
          ></path>
          <linearGradient
            id="h_Mf-NXBgiNYGydh6al-gc_DUr955fGCcud_gr3"
            x1="1.039"
            x2="51.08"
            y1="3.877"
            y2="53.918"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fed100"></stop>
            <stop offset="1" stop-color="#e36001"></stop>
          </linearGradient>
          <polygon
            fill="url(#h_Mf-NXBgiNYGydh6al-gc_DUr955fGCcud_gr3)"
            points="16,33 16,20.677 24,14.523 32,20.677 32,33"
          ></polygon>
          <linearGradient
            id="h_Mf-NXBgiNYGydh6al-gd_DUr955fGCcud_gr4"
            x1="14.182"
            x2="54.219"
            y1="16.513"
            y2="56.55"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fed100"></stop>
            <stop offset="1" stop-color="#e36001"></stop>
          </linearGradient>
          <polygon
            fill="url(#h_Mf-NXBgiNYGydh6al-gd_DUr955fGCcud_gr4)"
            points="18,31 18,21.662 24,17.046 30,21.662 30,31"
          ></polygon>
          <linearGradient
            id="h_Mf-NXBgiNYGydh6al-ge_DUr955fGCcud_gr5"
            x1="-12.115"
            x2="33.818"
            y1="-10.292"
            y2="35.641"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffd869"></stop>
            <stop offset="1" stop-color="#fec52b"></stop>
          </linearGradient>
          <polygon
            fill="url(#h_Mf-NXBgiNYGydh6al-ge_DUr955fGCcud_gr5)"
            points="20,29 20,22.647 24,19.57 28,22.647 28,29"
          ></polygon>
          <linearGradient
            id="h_Mf-NXBgiNYGydh6al-gf_DUr955fGCcud_gr6"
            x1="22.402"
            x2="68.501"
            y1="23.718"
            y2="69.817"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#ffd869"></stop>
            <stop offset="1" stop-color="#fec52b"></stop>
          </linearGradient>
          <polygon
            fill="url(#h_Mf-NXBgiNYGydh6al-gf_DUr955fGCcud_gr6)"
            points="22,27 22,23.632 24,22.093 26,23.632 26,27"
          ></polygon>
        </svg>
        Home</RouterLink
      >
      <span>|</span>
      <RouterLink v-if="store.isAuthenticated" to="/my-account">Your Booking</RouterLink>
      <span v-if="store.isAuthenticated">
        (<a href="javascript:" @click="logout()">Logout</a>)
      </span>
      <RouterLink v-else to="/login">Login</RouterLink>
    </nav>
  </div>
</template>
<style scoped lang="less">
header {
  text-align: center;
  .banner {
    width: 100%;
    max-height: 400px;
    aspect-ratio: 1000/400;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
}
nav {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 1.5rem;
  span {
    display: flex;
    align-items: center;
  }
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/userStore';

const store = useUserStore();

const logout = () => {
  store.logout();
};
</script>
