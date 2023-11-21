<template>
    <div :style="headerStyle">header</div>
    <a-button type="text" v-for="item in routerBtns" :class="{ 'active': curBtnId === item.id }" @click="handleClick(item)"
        class="[&.active]:bg-blue-500">
        {{ item.name }}
    </a-button>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import type { CSSProperties } from 'vue';
import { useRouter } from 'vue-router'

const curBtnId = ref('');

const routerBtns = ref([
    { id: "home", name: "首页", path: "/", },
    { id: "indoorPlant", name: "室内植物", path: "/indoorPlant", },
    { id: "tools", name: "园艺工具", path: "/tools", },
    { id: "hints", name: "护理指南", path: "/hints", },
    { id: "course", name: "园艺课程", path: "/course", },
]);

const router = useRouter();

const handleClick = (item) => {
    console.log(item);
    curBtnId.value = item.id;
    router.push(item.path);
}

const headerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    // height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
};

</script>