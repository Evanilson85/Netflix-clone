<template>
  <div id="app">
    <!-- <transition name="fade-view" mode="out-in">
    </transition> -->
    <router-view />
  </div>
</template>

<style scoped>
.fade-view-enter,
.fade-view-leave-to {
  opacity: 0;
}
.fade-view-enter-active,
.fade-view-leave-active {
  transition: opacity 0.1s linear;
}
</style>