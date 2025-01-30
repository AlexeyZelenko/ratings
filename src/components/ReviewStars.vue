<template>
  <div class="review-stars">
    <div class="review-stars--container">
      <div class="review-stars--score">{{ formattedScore }}</div>
      <div class="review-stars--stars">
        <span v-for="index in 5" :key="index" class="star">
          <span class="star-full" :style="getStarStyle(index - 1)">★</span>
          <span class="star-empty">☆</span>
        </span>
      </div>
    </div>
    <div class="review-stars--reviews">{{ formattedReviewCount }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  score: number;
  reviewCount: number;
}>();

const formattedScore = computed(() => {
  return Number(props.score).toFixed(1);
});

const formattedReviewCount = computed(() => {
  const count = props.reviewCount;
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${count} ${t('reviews.plural')}`;
  }

  switch (lastDigit) {
    case 1:
      return `${count} ${t('reviews.singular')}`;
    case 2:
    case 3:
    case 4:
      return `${count} ${t('reviews.few')}`;
    default:
      return `${count} ${t('reviews.plural')}`;
  }
});

const getStarStyle = (index: number) => {
  const score = props.score;
  if (index + 1 <= Math.floor(score)) {
    return { clipPath: 'inset(0 0 0 0)' };
  } else if (index < score) {
    const decimal = score - Math.floor(score);
    const percentage = Math.round(decimal * 100);
    return { clipPath: `inset(0 ${100 - percentage}% 0 0)` };
  }
  return { clipPath: 'inset(0 100% 0 0)' };
};
</script>

<style scoped lang="scss">
.review-stars {
  display: flex;
  align-items: center;
  margin-left: 30px;

  &--container {
    display: flex;
    align-items: center;
  }

  &--score {
    font-size: 1.5rem;
    font-weight: 600;
    margin-right: 12px;
    color: #394155;
  }

  &--stars {
    display: flex;
    gap: 2px;
    margin-right: 12px;
    margin-bottom: 3px;
    .star {
      position: relative;
      display: inline-block;
      font-size: 20px;

      .star-full {
        position: absolute;
        left: 0;
        color: #FFD700;
        overflow: hidden;
      }

      .star-empty {
        color: #FFD700;
        opacity: 0.3;
      }
    }
  }

  &--reviews {
    font-size: 1rem;
    color: #798595;
    line-height: 22px;
    font-weight: 400;
    font-family: Formular, sans-serif;
  }

  @media (max-width: 1366px) {
    &--score {
      font-size: 1.3rem;
    }
    &--stars {
      font-size: 1.2rem;
    }
    &--reviews {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 1199px) {
    margin-left: 0;

    &--score {
      font-size: 1.2rem;
    }
    &--stars {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;

    &--container {
      flex-direction: row;
      align-items: flex-start;
    }

    &--score {
      margin-bottom: 5px;
    }
    &--stars {
      margin-bottom: 5px;
    }
  }
}
</style>