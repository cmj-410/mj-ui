<template>
    <div>
        <it-button>test</it-button>
        <it-button icon="face">face</it-button>
    </div>
</template>
<script lang="ts" setup>
const getFilesList = (files: File[]) => {
    console.log(files)
}
</script>
<style lang="less">
.upload-demo {
    width: 360px;
}
</style>
