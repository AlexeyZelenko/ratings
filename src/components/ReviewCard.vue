<template>
  <div class="review-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.review-card {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  margin: 0 10px;
  flex: 1;

  @media (max-width: 1366px) {
    padding: 16px;
  }

  @media (max-width: 1199px) {
    padding: 14px;
    margin: 0 8px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 12px;
    margin: 8px 0;
    width: 100%;
  }
}
</style>