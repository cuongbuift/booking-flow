<template>
  <div class="confirmation center-block">
    <div class="text-content">
      <h2>YOUR BOOKING HAS BEEN CONFIRMED</h2>
      <p>We have sent your booking confirmation to the email address that you have provided.</p>
      <p>
        Check-in/Check-out: <strong>JUN 17,2025</strong>
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
        <strong>JUN 18, 2025</strong>
      </p>
      <p>Booking Confirmation Number: <strong>RES123456789</strong></p>
      <p>Total Price for 1 Night: <strong>S$1,177.20</strong></p>
    </div>

    <div class="booking-info">
      <div class="left-content">
        <div class="flex-box">
          <img src="../assets/room.webp" alt="" class="room-thumbnail" />
          <div>
            <h4 class="room-title">ROOM: ROOM 1 TITLE</h4>
            <p>1 GUEST</p>
          </div>
        </div>
        <strong>PACKAGE:</strong>
        <div class="fees">
          <span>Room</span>
          <span>S$1,080.00</span>
        </div>
        <div class="fees">
          <span>Tax & Service Charges (9%)</span>
          <span>S$97.20</span>
        </div>
        <div class="fees">
          <span>Total Price</span>
          <span>S$1,177.20</span>
        </div>
      </div>

      <div class="guest-detail">
        <h5>GUEST DETAILS</h5>
        <p>Name: Mr.Keegan Middleton</p>
        <p>Email address: bazytepu@teleg.eu</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.confirmation {
  .text-content {
    margin-bottom: 2rem;
    text-align: center;
    h2 {
      font-size: 1.8rem;
      font-weight: 400;
      margin-bottom: 2rem;
      @media (max-width: 767px) {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    }
    p {
      letter-spacing: 1px;
    }
  }
  .booking-info {
    display: flex;
    padding: 1rem;
    text-align: left;
    background: #f0f1eb;
    border: 1px solid #ddd;
    @media (max-width: 767px) {
      flex-direction: column;
    }
    .left-content {
      flex: 1;
      padding-right: 1rem;
      @media (max-width: 767px) {
        margin-bottom: 2rem;
      }
    }
    .room-thumbnail {
      width: 100%;
      max-width: 100px;
      aspect-ratio: 340/210;
      object-fit: cover;
      margin-right: 1rem;
    }
    .room-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    .flex-box {
      align-items: flex-start;
      text-align: left;
      margin-bottom: 1rem;
    }
    strong {
      margin-bottom: 1rem;
    }
    .fees {
      display: flex;
      justify-content: space-between;
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
    .guest-detail {
      width: 35%;
      padding: 1.5rem 1rem;
      background: #e0e2d7;
      @media (max-width: 767px) {
        width: 100%;
      }
    }
  }
}
</style>
<script setup lang="ts"></script>
