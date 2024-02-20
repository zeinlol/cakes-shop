<script setup>
import {shoppingItems} from './shopping-items.js'
import ShoppingItemCard from "@/components/shopping/shopping-item-card.vue";
</script>

<template>
  <div v-if="shoppingItems.length < 1">
    No items
  </div>
  <div v-else class="shopping-items-list">
    <template v-for="item in shoppingItems">
      <shopping-item-card :item="item"/>
    </template>
  </div>
</template>

<style scoped>
.shopping-items-list {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center; /* Align items horizontally */
  align-items: center; /* Align items vertically */
}

@media (max-width: 768px) {
  shopping-item-card {
    flex-basis: 33%; /* Adjust the width of each item for smaller screens */
  }
}

@media (max-width: 576px) {
  shopping-item-card {
    flex-basis: 100%; /* Full width for extra small screens */
  }
}
</style>