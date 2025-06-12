<template>
  <div class="contact-details-block">
    <div class="contact-information">
      <form @submit.prevent="submit">
        <h2>CONTACT INFORMATION</h2>

        <div class="form-group">
          <label>Title</label>
          <div class="dropdown" ref="dropdownRef">
            <button class="dropdown-btn" @click="toggleDropdown" type="button">
              <span class="dropdown-text">{{ selectedTitle }}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div class="dropdown-menu" v-show="dropdownOpen">
              <a class="dropdown-item" href="javascript:" @click.prevent="selectTitle('Mr.')"
                >Mr.</a
              >
              <a class="dropdown-item" href="javascript:" @click.prevent="selectTitle('Mrs.')"
                >Mrs.</a
              >
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email address" />
        </div>
      </form>

      <button type="button" class="btn-common" @click="submit">PROCEED</button>
    </div>

    <div class="right-content">
      <div class="search-selected-dates">
        <span>{{ formatDate(store.fromDate) }}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12H20L14 6M20 12L14 18"
            stroke="black"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>{{ formatDate(store.toDate) }}</span>
      </div>

      <h4>{{ store.room?.title }}</h4>
      <img :src="store.room?.image" :alt="store.room?.title" class="room-thumbnail" />
      <h5 class="room-title">{{ store.room?.description }}</h5>
      <div class="fees">
        <span>Room</span>
        <span>{{ formatCurrency(store.roomPrice, 2) }}</span>
      </div>
      <div class="fees">
        <span>Tax & Service Charges (9%)</span>
        <span>{{ formatCurrency(store.tax, 2) }}</span>
      </div>
      <div class="fees">
        <span>TOTAL</span>
        <span>{{ formatCurrency(store.totalPrice, 2) }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.contact-details-block {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 2rem;
  }
  .contact-information {
    flex: 1;
    @media (max-width: 767px) {
      width: 100%;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    form {
      padding: 1rem 1rem 1.5rem;
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
          display: inline-block;
          width: 200px;
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
        .dropdown {
          display: inline-block;
          .dropdown-btn {
            min-width: 100px;
            color: #1b1b1b;
            padding: 0;
            background-color: unset;
            border-top: none;
            border-right: none;
            border-left: none;
            border-bottom: 1px solid var(--vt-c-gray-soft);
            border-radius: 0;
          }
        }
      }
    }
  }
  .right-content {
    padding: 1rem;
    background: var(--vt-c-gray-mute);
    @media (max-width: 767px) {
      width: 100%;
    }
    .search-selected-dates {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
      span {
        font-size: 0.875rem;
        font-weight: 600;
      }
    }
    h4 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .room-thumbnail {
      width: 100%;
      max-width: 300px;
      aspect-ratio: 340/210;
      object-fit: cover;
    }
    .room-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .fees {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 1rem;
      &:last-child {
        margin-bottom: 0;
        span {
          font-size: 1rem;
        }
      }
      span {
        font-size: 0.875rem;
        color: #666;
        letter-spacing: 1px;
      }
    }
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { formatDate, formatCurrency } from '../helpers/formatHelper';
import useBookingStore from '../stores/bookingStore';

const router = useRouter();

const dropdownOpen = ref(false);
const selectedTitle = ref('Mr.');
const name = ref('');
const email = ref('');
const dropdownRef = ref<HTMLElement | null>(null);
const store = useBookingStore();

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectTitle = (title: string) => {
  selectedTitle.value = title;
  dropdownOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
};

const submit = () => {
  store.addContact(selectedTitle.value, name.value, email.value);
  router.push('/confirmation');
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
