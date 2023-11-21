<template>
    <!-- 背景图, 网站标题, 导航按钮 -->
    <div :style="{ width: '100%', height: '25%' }">
        <Header />
    </div>

    <div :style="{ width: '100%', height: '70%' }">
        <!-- 页面内容 -->
        <RouterView />
    </div>
    <div :style="{ width: '100%', height: '5%' }">
        <Footer />
    </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
html,
body,
#app {
    width: 100%;
    height: 100%;
}
</style>
