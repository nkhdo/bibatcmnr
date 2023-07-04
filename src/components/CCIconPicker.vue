<script setup lang="ts">
import { Dropdown, VClosePopper as vClosePopper } from 'floating-vue'
import CCIcon from './CCIcon.vue';
import IconsListVue from './IconsList.vue';

withDefaults(defineProps<{
  modelValue?: string
  chartName?: string
}>(), {
  modelValue: '',
  chartName: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function select(icon: string) {
  emit('update:modelValue', icon)
}
</script>

<template>
  <Dropdown
    class="tw-inline-block"
    placement="bottom-start"
  >
    <div
      class="tw-cursor-pointer tw-p-1 tw-border tw-rounded tw-bg-gray-100 hover:tw-bg-gray-200"
    >
      <CCIcon :icon="modelValue" :chart-name="chartName" />
    </div>
    <template #popper>
      <div>
        <IconsListVue
          :selected-icon="modelValue"
          @select="select"
        />
        <div class="tw-flex tw-p-2 tw-border-t">
          <button v-close-popper>
            Randomize
          </button>
          <button
            v-if="!!modelValue"
            v-close-popper
            class="tw-ml-auto"
            @click="select('')"
          >
            Clear
          </button>
        </div>
      </div>
    </template>
  </Dropdown>
</template>