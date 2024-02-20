<script setup>
import ShoppingItemsList from '@/components/shopping/shopping-items-list.vue'
</script>

<template>
  <div class="section">
    <div id="shop-products">
      <div class="shopping-title">
        <span>Take a bite!</span>
      </div>
      <shopping-items-list />
    </div>
  </div>
</template>

<style scoped>
#shop-products {
  margin-top: 4em;
  margin-bottom: 4em;
  width: 100%;
}
.shopping-title {
  margin-top: 1em;
  width: 100%;
  text-align: center;

  span {
    text-align: center;
    font-family: brand-title, serif;
    font-size: 3em;
  }
}
</style>