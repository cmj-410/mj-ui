<template>
  <show-box title="mj-modal">
    <template #left>
      <mj-button @click="signinModal = true">Modal</mj-button>
      <mj-modal v-model="signinModal" :closableMask="closeMask">
        <template #image>
          <img src="/mjUI_logo.png" />
        </template>

        <template #header>
          <h3>modal Header</h3>
        </template>

        <template #body>
          <p>Modal body.</p>
        </template>
        <template #actions>
          <mj-button
            type="primary"
            @click="$Message({ text: 'ok' }), (signinModal = false)"
            >确定</mj-button
          >
        </template>
      </mj-modal>
    </template>
    <template #right>
      <mj-checkbox v-model="closeMask" label="点击遮罩关闭" />
    </template>
  </show-box>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const signinModal = ref(false)
const closeMask = ref(false)
</script>
