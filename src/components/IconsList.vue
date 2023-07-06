<script setup lang="ts">
import { ref, computed } from 'vue';
import { VClosePopper as vClosePopper } from 'floating-vue';
import CCIcon from './CCIcon.vue';
import { EMOJIS } from '@/constants/emojis';
import { ICONS } from '@/constants/hicons';

defineProps<{
  selectedIcon?: string
}>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()

const scrollContainerRef = ref<HTMLDivElement>()

const emojsSections = computed(() => {
  const hIconSection = {
    name: 'Charts',
    label: 'Charts',
    icons: ICONS.map(icon => icon.icon)
  }
  const emojsSections = Object.keys(EMOJIS).map(key => {
    const icons = Object.values(EMOJIS[key])
    return {
      name: key,
      label: icons[0],
      icons
    }
  })

  return [hIconSection, ...emojsSections]
})

const activeSection = ref(emojsSections.value[0].name)

function select(icon: string) {
  emit('select', icon)
}

function scrollToSection(name: string) {
  const sectionEl = scrollContainerRef.value?.querySelector(`[data-section-name="${name}"]`)
  if (sectionEl) {
    sectionEl.scrollIntoView({
      behavior: 'smooth'
    })
    activeSection.value = name
  }
}
</script>

<template>
  <div class="tw-w-60">
    <!-- header -->
    <div class="tw-flex tw-justify-between tw-border-b tw-px-1">
      <div
        v-for="section in emojsSections"
        :key="section.name"
        class="tw-cursor-pointer tw-p-1"
        :class="{ 'tw-border-blue-600 tw-border-b-2': activeSection === section.name }"
        @click="scrollToSection(section.name)"
      >
        {{ section.label }}
      </div>
    </div>

    <!-- body -->
    <div class="tw-max-h-80 tw-overflow-auto tw-p-2" ref="scrollContainerRef">
      <div v-for="section in emojsSections" :key="section.name" :data-section-name="section.name">
        <div class="tw-font-semibold">
          {{ section.name }}
        </div>
        <div class="tw-flex tw-flex-wrap">
          <div
            v-for="icon in section.icons"
            :key="icon"
            v-close-popper
            class="tw-p-1 tw-cursor-pointer tw-rounded tw-flex tw-items-center hover:tw-bg-gray-200"
            :class="{ 'tw-bg-blue-50': icon === selectedIcon }"
            @click="select(icon)"
          >
            <CCIcon :icon="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>