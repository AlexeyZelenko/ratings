<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error loading ratings</div>
  <div v-else class="review">
    <div class="review-header">
      <ReviewCard>
        <div class="review-header--block">
          <ReviewHeader />
          <ReviewStars
              :score="averageRating"
              :review-count="ratings.length"
          />
        </div>
      </ReviewCard>
    </div>

    <ReviewCard>
      <div class="review-buttons">
        <ReviewButton variant="show">Переглянути</ReviewButton>

        <ReviewButton variant="write">
          <template #default>Написати</template>
          <template #modal-content>
            Тут буде форма для відгуку
          </template>
        </ReviewButton>
      </div>
    </ReviewCard>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { fetchRatingData } from '../api/mockApi.ts';
import ReviewCard from './ReviewCard.vue';
import ReviewHeader from './ReviewHeader.vue';
import ReviewStars from './ReviewStars.vue';
import ReviewButton from './ReviewButton.vue';

const ratings = ref([]);
const isLoading = ref(true);
const error = ref(null);

const averageRating = computed(() => {
  if (!ratings.value.length) return 0;
  const sum = ratings.value.reduce((acc, curr) => acc + curr.rating, 0);
  return Number((sum / ratings.value.length).toFixed(1));
});

const loadRatings = async () => {
  try {
    isLoading.value = true;
    const data = await fetchRatingData();
    ratings.value = data;
  } catch (e) {
    error.value = e;
    console.error('Error loading ratings:', e);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  loadRatings();
});
</script>

<style scoped lang="scss">
.review {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1458px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.05);

  &-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 10px;
  }

  &-header {
    display: flex;
    justify-content: flex-start;
    margin: 0;

    &--block {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
  }

  @media (min-width: 1367px) and (max-width: 1920px) {
    max-width: 1458px;
  }

  @media (min-width: 1200px) and (max-width: 1366px) {
    max-width: 1150px;
  }

  @media (min-width: 577px) and (max-width: 1199px) {
    max-width: 900px;

    .review-header--block {
      flex-direction: column;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    padding: 0 10px;

    .review-buttons {
      flex-direction: column;
      gap: 8px;
    }

    .review-header {
      flex-direction: row;

      &--block {
        flex-direction: column;
      }
    }
  }
}
</style>