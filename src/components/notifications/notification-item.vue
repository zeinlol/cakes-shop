<script setup>
import {defineProps} from 'vue'
import Toast from 'primevue/message'
import Avatar from 'primevue/avatar'
const props = defineProps({
  notification: Object

})
</script>

<template>
  <Toast severity="success" :life="3000">
    <template v-if="notification.image" #messageicon>
        <Avatar :image="notification.image" :shape="notification.imageShape" />
    </template>
    <span class="notification-text">{{ notification.message }}</span>
  </Toast>
</template>

<style scoped>
.notification-text {
  margin-left: .5em;
}
</style>