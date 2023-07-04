<script setup lang="ts">
import { computed } from 'vue';
import { Icon, type IconName } from '@holistics/icon'
import { isHIcon } from '../utils/icons'

const props = withDefaults(defineProps<{
  icon?: string
  chartName?: string
}>(), {
  icon: '',
  chartName: ''
})

const iconText = computed(() => {
  if (props.icon) {
    // emoji
    return props.icon;
  }
  // if there's no emoji, display the 2 first word's first letter
  return (props.chartName || '')
    .trim()
    .split(/\s+/g)
    .slice(0, 2)
    .map(w => (w[0] || '').toUpperCase())
    .join('');
});
</script>

<template>
  <span class="cc-icon tw-flex tw-items-center tw-center tw-w-6 tw-h-6 tw-overflow-visible">
    <Icon v-if="isHIcon(icon)" :name="(icon as IconName)" size="lg" />
    <span v-else>
      {{ iconText }}
    </span>
  </span>
</template>