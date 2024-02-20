import {defineStore} from 'pinia'

export const notificationsStore = defineStore('notificationsStore', {
  state: () => ({
    notifications: [],
  }),
  actions: {
    showNotification({notification}) {
      this.notifications.push(notification)
      setTimeout(() => {
        this.removeNotification({ notification });
      }, 3000);
    },
    removeNotification({notification}) {
      const index = this.notifications.findIndex(item => item.title === notification.title)
      this.notifications.splice(index, 1);
    }
  },
})
