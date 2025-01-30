<template>
  <div class="review-header">
    <img :src="googleIcon" alt="Google icon" />
    <div class="review-header--text">Відгуки наших клієнтів у Google</div>
  </div>
</template>

<script setup lang="ts">
import googleIcon from '../assets/google.svg';
</script>

<style scoped lang="scss">
.review-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  &--text {
    margin: 0;
    font-size: 20px;
    line-height: 30px;
    font-family: Formular, sans-serif;
    color: #394155;
    font-weight: 500;
  }

  @media (max-width: 1366px) {
    &--text {
      font-size: 18px;
      line-height: 28px;
    }
  }

  @media (max-width: 1199px) {
    &--text {
      font-size: 16px;
      line-height: 24px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;

    &--text {
      font-size: 14px;
      line-height: 22px;
    }
    img {
      width: 18px;
      height: 18px;
    }
  }
}
</style>