<template>
    <div class="thisWidth">
        <mj-button :loading="true">test</mj-button>
        <mj-button icon="home">home</mj-button>
        <mj-button type="primary">primary</mj-button>
    </div>
    <div class="thisWidth2">
        <mj-alert :showIcon="true" :closable="true">aa</mj-alert>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="less">
.thisWidth {
    width: 100px;
}

.thisWidth2 {
    width: 300px;
}
</style>
