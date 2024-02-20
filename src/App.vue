<script setup>
import FooterBlock from '@/components/footer-block.vue'
import WelcomeBlock from '@/components/welcome-block.vue'
import ShoppingMain from '@/components/shopping-main.vue'
import NotificationsProvider from '@/components/notifications/notifications-provider.vue'
</script>

<template>
  <div class="root">
    <welcome-block />
    <shopping-main />
    <footer-block />
    <notifications-provider />
  </div>
</template>

<style scoped>

</style>
