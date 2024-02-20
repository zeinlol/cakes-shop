<script setup>
import {computed, defineProps, toRefs} from "vue";
import {shoppingCardStore} from "@/stores/shopping-card.js";
import {notificationsStore} from "@/stores/notifications.js";

const props = defineProps({
  item: Object,
})
const {item} = toRefs(props);
const borderClasses = {
  'circle': 'shopping-item-circle-border',
  'square': 'shopping-item-square-border',
  'arch': 'shopping-item-arch-border',
}
const imgClassName = computed(() => borderClasses[item.value.frameStyle])
const store = shoppingCardStore()
const notifStore = notificationsStore()

function addItemToOrderList() {
  store.addItemToOrder({item: item})
  notifStore.showNotification({
        notification: {
          message: `${item.value.title} added to order`,
          image: item.value.image,
        }
      }
  )
}
</script>

<template>
  <div class="shopping-item">
    <div class="image-box">
      <img :class="['shopping-item-image', imgClassName]" :src="item.image" :alt="item.title"/>
    </div>
    <div class="shopping-item-title">
      {{ item.title }}
    </div>
    <div class="shopping-item-description">
      {{ item.description }}
    </div>
    <div class="shopping-item-price">
      {{ item.price }}€
    </div>
    <button class="add-to-card-button" @click="addItemToOrderList()">Add to card</button>
  </div>
</template>

<style scoped>
.shopping-item {
  max-width: 30em;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* For newer browsers */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .add-to-card-button {
    background-color: white;
    border: 0 solid #000;
    border-radius: 50%;
    width: 15em;
    height: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    text-transform: uppercase;
  }
  .add-to-card-button:hover {
    background-color: #f0f0f0; /* Change background color on hover */
  }

  .shopping-item-image {
    max-width: 100%;
    max-height: 25em;
    border: .4em double #685353;
    object-fit: cover; /* Ensure the image fills the container while preserving aspect ratio */
  }

  .shopping-item-circle-border {
    border-radius: 50%;
  }

  .shopping-item-square-border {

  }

  .shopping-item-arch-border {
    border-top-left-radius: 50%; /* Adjust as needed */
    border-top-right-radius: 50%; /* Adjust as needed */
  }

  .shopping-item-title {
    text-transform: capitalize;
    font-family: regular-font, serif;
    font-size: 2em;
  }

  .shopping-item-description {
    font-family: regular-font, serif;
    font-size: 1.5em;
  }

  .shopping-item-price {
    font-family: regular-font, serif;
    font-size: 2em;
    font-style: italic;
  }
}
</style>