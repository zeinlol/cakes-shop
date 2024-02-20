<script setup>
import {shoppingCardStore} from '@/stores/shopping-card.js'
import OrderBucket from '@/components/order/order-bucket.vue'
import {ref} from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'

const store = shoppingCardStore()
let isShowCard = ref(false)
let isShowOrderDetails = ref(false)
let isShowOrderCompleted = ref(false)

function hideOrder() {
  isShowCard.value = false
  isShowOrderCompleted.value = false
}

function placeOrder() {
  console.log('Order placed')
  isShowOrderCompleted.value = true
}
</script>

<template>
  <div class="section">
    <Dialog
        v-model:visible="isShowCard"
        header="Order Details"
        position="topleft"
        :modal="true"
        :draggable="false"
    >
      <order-bucket :is-show-order-details="isShowOrderDetails"/>
      <div class="flex gap-2">
        <Button
            type="button"
            label="Hide"
            severity="secondary"
            @click="isShowCard = false"
        />
        <Button
            v-if="!isShowOrderDetails"
            type="button"
            label="Add delivery details"
            :disabled="store.isItemsInOrder"
            @click="isShowOrderDetails = true"
        />
        <Button
            v-if="isShowOrderDetails"
            type="button"
            label="Place order"
            :disabled="!store.isOrderDetailsCompleted"
            @click="placeOrder()"
        />
      </div>
    </Dialog>
    <Dialog v-model:visible="isShowOrderCompleted"
        header="Order Proceeded!"
        position="top"
        :modal="true"
        :draggable="false">
      <h3>Thank you for placing order. You will receive confirmation email soon.</h3>
      <div class="p-dialog-footer">
        <Button label="Ok" icon="pi pi-check" @click="hideOrder()" />
      </div>
    </Dialog>
    <div class="section-left-part title-box">
      <div class="shopping-card-container" @click="isShowCard = true">
        <img class='shopping-card-image' src="/public/images/shopping-card.svg" alt="Shopping Card"/>
        <div class="order-items-count">{{ store.orderItemsCount }}</div>
      </div>
      <div class="city-name">
        <span>CORK</span>
      </div>
      <div class="brand-title">
        <span>DessertDelights</span>
      </div>
      <div class="welcome-text">
        <span>Satisfy cravings for a dessert</span>
      </div>
      <div class="link-to-shop-box">
        <div class="link-to-shop-frame">
          <a href="#shop-products" class="Shop Online">Shop Online</a>
        </div>
      </div>
      <div class="welcome-text">
        <span>Welcome to a world where every bite tells a story of sweetness and delight. Explore our divine selection and let your taste buds dance with joy!</span>
      </div>
    </div>
    <div class="section-right-part cakes-image-box">
      <img class='cakes-image' src="/public/images/header.png" alt="Cakes photo"/>
    </div>
  </div>
</template>

<style scoped>
.shopping-card-container {
  position: relative;
  display: flex; /* Change to flex to allow for flexible positioning of child elements */
  align-items: center; /* Align items vertically */
  margin-top: 1em;
  cursor: pointer;

  .shopping-card-image {
    max-width: 10%;
    max-height: 10%;
    opacity: 1;
  }

  .order-items-count {

    background-color: #663ab0;
    color: white;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
  }
}


.title-box {
  max-width: 45%;
  text-align: center;
}

.cakes-image-box {
  max-width: 50%;
}

.link-to-shop-box {
  margin: 2em 0 2em 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .link-to-shop-frame {
    border-style: solid;
    border-color: #242119;
    border-width: .15em;
    padding: 1em 3em 1em 3em;
  }

  a {
    font-family: regular-font, serif;
    color: #402620;
    font-size: 2em;
    text-decoration: underline;
  }
}

.welcome-text {
  margin-top: 1em;

  span {
    font-family: regular-font, serif;
    font-size: 1em;
  }
}

.brand-title {
  margin-top: 5em;

  span {
    font-family: brand-title, serif;
    font-size: 4em;
  }
}

.city-name {
  margin-top: 5em;

  span {
    font-family: city-name, serif;
    font-size: 2em;
  }
}
</style>