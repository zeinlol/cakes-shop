<script setup>
import {shoppingCardStore} from '@/stores/shopping-card.js'
import OrderBucketItemCard from '@/components/order/order-bucket-item-card.vue'
import {defineProps} from 'vue'
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

const store = shoppingCardStore()
const props = defineProps({
  isShowOrderDetails: Boolean,
})
</script>

<template>
  <div class="order-block">
    <div v-if="store.isItemsInOrder">
      No items
    </div>
    <div v-else class="order-items-list">
      <template v-for="orderItem in store.orderItems">
        <order-bucket-item-card :order-item="orderItem"/>
      </template>
    </div>
    <div v-if="isShowOrderDetails">
      <form>
        <div class="order-input-group">
          <div class="order-input-field">
            <label for="first-name">First Name</label>
            <InputText id="first-name" v-model="store.delivery.firstName" placeholder="John" :invalid="!store.isFirstNameValid"/>
            <small v-if="!store.isFirstNameValid">Please enter your name</small>
          </div>
          <div class="order-input-field">
            <label for="last-name">Last Name</label>
            <InputText id="last-name" v-model="store.delivery.lastName" placeholder="Parker" :invalid="!store.isLastNameValid"/>
            <small v-if="!store.isLastNameValid">Please enter your last name</small>
          </div>
        </div>
        <div class="order-input-field">
          <label for="email">Email</label>
          <InputText id="email" v-model="store.delivery.email" placeholder="example@gmail.com" type="email"
                     :invalid="!store.isEmailValid"/>
          <small v-if="!store.isEmailValid">Invalid email address</small>
        </div>
        <div class="order-input-field">
          <label for="phone">Phone</label>
          <InputText id="phone" v-model="store.delivery.phone" placeholder="0123456789" :invalid="!store.isPhoneValid"/>
          <small v-if="!store.isPhoneValid">Please enter valid phone number</small>
        </div>
        <br>
        <div class="order-input-field">
          <label for="first-line">Address line 1</label>
          <InputText id="first-line" v-model="store.delivery.firstLine" placeholder="apartments, house street name" :invalid="!store.isFirstLineValid"/>
          <small v-if="!store.isFirstLineValid">Please enter your address</small>
        </div>
        <div class="order-input-field">
          <label for="second-line">Address line 2 (Optional)</label>
          <InputText id="second-line" v-model="store.delivery.secondLine" placeholder="District, etc."/>
        </div>
        <div class="order-input-group">
          <div class="order-input-field">
            <label for="city-name">City</label>
            <InputText id="city-name" v-model="store.delivery.city" placeholder="Cork" :invalid="!store.isCityValid"/>
            <small v-if="!store.isCityValid">Please enter your city</small>
          </div>
          <div class="order-input-field">
            <label for="postal-code">Postal code</label>
            <InputText id="postal-code" v-model="store.delivery.postalCode" placeholder="T23 123" :invalid="!store.isPostalCodeValid"/>
            <small v-if="!store.isPostalCodeValid">Please enter your postal code</small>
          </div>
        </div>
        <div class="order-input-field">
          <label for="comment">Comment</label>
          <Textarea id="comment" v-model="store.delivery.comment" placeholder="Add your comment hear (optional)"/>
        </div>

      </form>
    </div>
    <div class="order-total-price">
      <span>Total: {{ store.orderItemsTotalPrice }}€</span>
    </div>
  </div>
</template>

<style scoped>

.order-block {
  min-width: 30em;
}

.order-input-group {
  display: flex;
  flex-direction: row;
  /*justify-content: space-around;*/
  justify-content: space-between;
}

.order-input-field {
  display: flex;
  flex-direction: column;
  width: 100%
}

.order-items-list {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.order-total-price {
  font-size: 2em;
}
</style>