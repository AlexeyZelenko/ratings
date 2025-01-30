<template>
  <button
      :class="['review-button', `review-button--${variant}`]"
      @click="handleClick"
  >
    <span><slot></slot></span>
  </button>

  <Teleport to="body">
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h3>Написати відгук</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>
        <div class="modal-content">
          <slot name="modal-content">
            <p>Вміст модального вікна</p>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

const props = defineProps<{
  variant: 'show' | 'write';
}>();

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};

const redirectToGoogle = () => {
  window.open('https://www.google.com', '_blank');
};

const handleClick = () => {
  if (props.variant === 'write') {
    openModal();
  } else if (props.variant === 'show') {
    redirectToGoogle();
  }
};
</script>

<style scoped lang="scss">
.review-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  width: auto;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  span {
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
  }

  &--show {
    position: relative;
    background: linear-gradient(90deg, #E6F7F5 0%, #F8FCFC 100%);
    border: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 8px;
      padding: 1px;
      background: linear-gradient(90deg, #AACEDB 0%, #BEE2E0 100%);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    span {
      color: rgba(57, 65, 85, 1);
      position: relative;
      z-index: 1;
    }
  }

  &--write {
    background: linear-gradient(90.66deg, #3CB9A0 0.57%, #1786AC 99.43%);
    border: none;

    span {
      color: white;
    }
  }

  @media (max-width: 1366px) {
    padding: 8px 16px;

    span {
      font-size: 13px;
    }
  }

  @media (max-width: 1199px) {
    padding: 8px 14px;

    span {
      font-size: 12px;
    }
  }

  @media (max-width: 576px) {
    width: 100%;
    margin: 5px 0;

    span {
      font-size: 12px;
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modal-appear 0.3s ease;

  @keyframes modal-appear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #eee;

    h3 {
      margin: 0;
      font-size: 1.25rem;
      color: #394155;
    }
  }

  &-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: #666;
    padding: 5px;
    line-height: 1;
    transition: color 0.2s ease;

    &:hover {
      color: #394155;
    }
  }

  &-content {
    padding: 20px;
  }

  @media (max-width: 576px) {
    max-width: 100%;
    margin: 10px;

    &-header {
      padding: 15px;
    }

    &-content {
      padding: 15px;
    }
  }
}
</style>