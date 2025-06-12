<template>
  <div class="contact-details-block">
    <div class="contact-information">
      <form action="#">
        <h2>CONTACT INFORMATION</h2>
        <div class="form-group">
          <label>Title</label>
          <div class="dropdown">
            <button class="dropdown-btn">
              <span class="dropdown-text">Mr.</span>
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
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Mr.</a>
              <a class="dropdown-item" href="#">Mrs.</a>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" value="Adam" />
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value="bazytepu@teleg.eu"
          />
        </div>
      </form>
      <button type="button" class="btn-common" @click="submit()">PROCEED</button>
    </div>

    <div class="right-content">
      <div class="search-selected-dates">
        <span>JUN 17, 2025</span>
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
        <span>JUN 18, 2025</span>
      </div>

      <h4>ROOM: 1 GUEST</h4>
      <img src="../assets/room.webp" alt="" class="room-thumbnail" />
      <h5 class="room-title">ROOM 1 TITLE</h5>
      <div class="fees">
        <span>Room</span>
        <span>S$1,080.00</span>
      </div>
      <div class="fees">
        <span>Tax & Service Charges (9%)</span>
        <span>S$97.20</span>
      </div>
      <div class="fees">
        <span>TOTAL</span>
        <span>S$1,177.20</span>
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
      background: #f0f1eb;
      border: 1px solid #ddd;
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
          border-bottom: 1px solid #ddd;
        }
        .dropdown {
          display: inline-block;
          .dropdown-btn {
            min-width: 100px;
            color: #1b1b1b;
            padding: 0;
            background-color: unset;
            border-bottom: 1px solid #ddd;
          }
        }
      }
    }
  }
  .right-content {
    padding: 1rem;
    background: #e0e2d7;
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
import $ from 'jquery';
import { useRouter } from 'vue-router';
const router = useRouter();
const submit = () => {
  // Handle form submission logic here
  router.push('/confirmation');
};
$(function () {
  $('.dropdown-btn').click(function (e) {
    e.stopPropagation();
    const dropdown = $(this).next('.dropdown-menu');
    $('.dropdown-menu').not(dropdown).hide();
    dropdown.toggle();
  });

  $(document).click(function () {
    $('.dropdown-menu').hide();
  });

  $('.dropdown-item').click(function (e) {
    e.preventDefault();
    const textValue = $(this).text();
    const $dropdown = $(this).closest('.dropdown');
    $dropdown.find('.dropdown-text').text(textValue);
    $dropdown.find('.dropdown-menu').hide();
  });
});
</script>
