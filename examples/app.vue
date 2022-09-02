<template>
    <h1>1.按钮测试</h1>
    <h3>1.1按钮的type属性和按钮组</h3>
    <mj-button-group>
        <mj-button :type="typeColor" v-for="typeColor in colorList" :key="typeColor">
            {{ typeColor }}
        </mj-button>
    </mj-button-group>
    <h3>1.2按钮的size属性</h3>
    <div class="showBtn">
        <mj-button type="primary" :size="theSize" v-for="theSize in sizeList" :key="theSize">{{ theSize }}</mj-button>
    </div>
    <h3>1.3按钮的icon设置</h3>
    <div class="showBtn">
        <mj-button icon="home">home</mj-button>
        <mj-button icon="boy" :iconAfter="true">boy</mj-button>
    </div>
    <h3>1.4按钮的其他属性</h3>
    <div class="showBtn">
        <mj-button :loading="true">loading</mj-button>
        <mj-button type="primary">primary</mj-button>
        <mj-button :outlined="true" type="primary">outlined</mj-button>
        <mj-button :pulse="true">pulse</mj-button>
        <mj-button :disabled="true">disabled</mj-button>
    </div>
    <h1>2.警示测试</h1>
    <h3>2.1警示的type属性</h3>
    <div>
        <mj-alert :type="typeColor" :title="'title--' + typeColor" :closable="true" v-for="typeColor in smallColorList"
            :key="typeColor">{{
                    typeColor
            }}
        </mj-alert>
    </div>
    <h1>3.checkBox测试</h1>
    <h3>2.1警示的type属性</h3>
    <mj-checkbox :modelValue="value1" @click="value1 = !value1">{{ value1 }}</mj-checkbox>
    <h1>4.divider测试</h1>
    <h3>4.1竖向分割线：</h3>
    <span>
        A
        <mj-divider :vertical="true" />
        B
    </span>
    <h3>4.2横向分割线：</h3>
    <div>1212</div>
    <mj-divider></mj-divider>
    <div>3434</div>
    <h1>5.dropDown测试</h1>
    <mj-dropdown>
        <mj-button>Hover me</mj-button>
        <mj-dropdown-menu slot="menu">
            <mj-dropdown-item>Hello</mj-dropdown-item>
            <mj-dropdown-item disabled>Disabled</mj-dropdown-item>
            <mj-dropdown-item icon="cloud">Cloud</mj-dropdown-item>
            <mj-dropdown-item divided>Divided</mj-dropdown-item>
        </mj-dropdown-menu>
    </mj-dropdown>
</template>
<script lang="ts" setup>
import { Colors, Sizes } from './enums'
import { ref } from 'vue';

const colorList = Object.values(Colors)
const smallColorList = colorList.filter(val => val != 'neutral' && val != 'black')

const sizeList = Object.values(Sizes)

const value1 = ref(true)
</script>
<style lang="less" scoped>
.showBtn {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    button {
        margin-right: 10px;
    }
}
</style>
