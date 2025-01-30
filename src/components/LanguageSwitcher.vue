<template>
  <div class="language-switcher">
    <button
        class="language-button"
        @click="toggleDropdown"
        ref="trigger"
    >
      <span class="current-language">
        {{ currentLocale }}
      </span>
      <span class="arrow" :class="{ open: isOpen }">▼</span>
    </button>

    <div
        v-if="isOpen"
        class="language-dropdown"
        ref="dropdown"
    >
      <button
          v-for="(name, index) in SUPPORTED_LANGUAGES"
          :key="index"
          class="language-option"
          :class="{ active: currentLocale === name }"
          @click="changeLanguage(name)"
      >
        {{ name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORTED_LANGUAGES, saveLanguage } from '../i18n';

const i18n = useI18n();
const isOpen = ref(false);
const trigger = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);

const currentLocale = computed(() => i18n.locale.value);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const changeLanguage = (lang: string) => {
  i18n.locale.value = lang;
  saveLanguage(lang);
  isOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
  if (
      isOpen.value &&
      trigger.value &&
      dropdown.value &&
      !trigger.value.contains(event.target as Node) &&
      !dropdown.value.contains(event.target as Node)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
.language-switcher {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 1000;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: linear-gradient(90.66deg, #3CB9A0 0.57%, #1786AC 99.43%);
  border: 1px solid #967a7a;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #15ae8f;
  }

  .arrow {
    font-size: 10px;
    transition: transform 0.2s ease;

    &.open {
      transform: rotate(180deg);
    }
  }
}

.language-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 4px;
  background: linear-gradient(90deg, #74acc0 0%, #4baea8 100%);
  border: 1px solid #d4cccc;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .language-option {
    display: block;
    width: 100%;
    padding: 8px 16px;
    text-align: left;
    border: none;
    background: none;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background: linear-gradient(90deg, #AACEDB 10%, #BEE2E0 90%);
    }

    &.active {
      color: #3CB9A0;
      background: #E6F7F5;
    }
  }
}
</style>