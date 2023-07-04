<script setup lang="ts">
import { ref } from 'vue'
import CCIconPicker from './components/CCIconPicker.vue';

const icon = ref<string>()
const chartName = ref('a sample graph')
</script>

<template>
  <div class="tw-container tw-w-96 tw-m-auto">
    <div class="tw-text-xl tw-mt-3 tw-font-bold">
      Custom chart icon picker
    </div>

    <div class="tw-mt-2">
      Chart name:
      <input v-model="chartName" class="tw-border tw-px-2 tw-py-1 tw-rounded" />
    </div>
    <div class="tw-mt-2">
      Icon:
      <CCIconPicker v-model="icon" :chart-name="chartName" />
    </div>
    <div class="tw-mt-2">
      Selected value: {{ icon }}
    </div>
    <div>

    </div>
  </div>
</template>
