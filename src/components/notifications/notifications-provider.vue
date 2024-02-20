<script setup>
import {notificationsStore} from '@/stores/notifications.js'
import NotificationItem from '@/components/notifications/notification-item.vue'
const store = notificationsStore()

</script>

<template>
  <div class="notification-container">
    <template v-for="notification in store.notifications">
      <notification-item :notification="notification"/>
    </template>
  </div>
</template>

<style scoped>
.notification-container {
  position: fixed;
  top: 1em;
  right: 1em;
  z-index: 9999;
}
</style>