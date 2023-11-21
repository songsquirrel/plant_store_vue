<template>
    <div :style="footerStyle">footer</div>
</template>


<script lang="ts" setup>
import type { CSSProperties } from 'vue';

const footerStyle: CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
};
</script>