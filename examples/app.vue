<template>
    <div class="thisWidth">
        <mj-button :loading="true">test</mj-button>
        <mj-button icon="home">home</mj-button>
        <mj-button type="primary">primary</mj-button>
    </div>
    <mj-alert type="primary" title="alertTitle" body="alertBody" />
    <mj-button-group>
        <mj-button :loading="true">test</mj-button>
        <mj-button icon="home">home</mj-button>
    </mj-button-group>
    <mj-checkbox label="haha" :modelValue="value1">{{ value1 }}</mj-checkbox>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value1 = ref(false)
</script>
<style lang="less">
.thisWidth {
    width: 100px;
}

.thisWidth2 {
    width: 300px;
}
</style>
