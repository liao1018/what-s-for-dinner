<template>
  <router-view />
</template>
<script>
export default {
  setup() {
    // 解決mobile上 100vh !== 100vh 問題，配合window.scss
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },
};
</script>
