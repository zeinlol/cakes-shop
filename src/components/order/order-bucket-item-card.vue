<script setup>
import {computed, defineProps} from "vue";
import {shoppingCardStore} from "@/stores/shopping-card.js";
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
const props = defineProps({
  orderItem: Object,
})
const store = shoppingCardStore()
const item = computed(() => props.orderItem.item)
const orderItemsPrice = computed(() => props.orderItem.item.price * props.orderItem.quantity)
</script>

<template>
  <div class="order-item-block">
    <div class="order-image-box">
      <img class="shopping-item-image" :src="item.image" :alt="item.title"/>
    </div>
    <div>
      <div class="shopping-item-title">
        {{ item.title }}
      </div>
      <div class="shopping-item-description">
        {{ item.description }}
      </div>
      <div class="order-control-box">
        <Button type="button" label="X" severity="danger" @click="store.removeItemFormOrder({item: item})"/>
        <input-number
            v-model="orderItem.quantity"
            mode="decimal"
            showButtons
            :min="0"
            :max="20"
            :step="1"
        />
      </div>
    </div>
    <div class="order-item-price">
      {{ orderItemsPrice }}€
    </div>
  </div>
</template>

<style scoped>
.order-item-block {
  max-width: 100%;
  word-wrap: break-word; /* For older browsers */
  overflow-wrap: break-word; /* For newer browsers */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1em 0 1em 0;

  .order-image-box {
    width: 6em;
  }

  .shopping-item-image {
    max-width: 100%;
    max-height: 5em;
    border: .4em double #685353;
    object-fit: cover; /* Ensure the image fills the container while preserving aspect ratio */
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

  .order-item-price {
    margin-left: .5em;
    font-family: regular-font, serif;
    font-size: 2em;
    font-style: italic;
  }
}
</style>