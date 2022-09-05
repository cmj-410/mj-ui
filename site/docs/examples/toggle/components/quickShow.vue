<template>
  <show-box title="mj-toggle">
    <template #left>
      <mj-toggle
        v-model="toggleValue"
        :round="toggleRound"
        toggleWidth="300px"
        :options="['boy', 'girl', 'man', 'woman']"
      />
    </template>
    <template #right>
      <mj-checkbox v-model="toggleRound" label="Round" />
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const toggleValue = ref('1')
const toggleRound = ref(false)
</script>
