<script setup lang="ts">
import { ref } from 'vue';
import { VClosePopper as vClosePopper } from 'floating-vue';
import CCIcon from './CCIcon.vue';
import { SECTIONS } from '@/constants/sections'

defineProps<{
  selectedIcon?: string
}>()

const emit = defineEmits<{
  (e: 'select', value: string): void
}>()

const activeSection = ref(SECTIONS[0].name)

function select(icon: string) {
  emit('select', icon)
}
</script>

<template>
  <div class="tw-w-60">
    <!-- header -->
    <div class="tw-flex tw-justify-between tw-border-b tw-px-1">
      <div
        v-for="section in SECTIONS"
        :key="section.name"
        class="tw-cursor-pointer tw-p-1"
        :class="{ 'tw-border-blue-600 tw-border-b-2': activeSection === section.name }"
      >
        {{ section.label }}
      </div>
    </div>

    <!-- body -->
    <div class="tw-max-h-80 tw-overflow-auto tw-p-2">
      <div v-for="section in SECTIONS" :key="section.name">
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