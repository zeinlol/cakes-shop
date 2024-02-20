import {defineStore} from 'pinia'

export const shoppingCardStore = defineStore('shoppingCard', {
  state: () => ({
    orderItems: [],
    delivery: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      firstLine: '',
      secondLine: '',
      city: '',
      postalCode: '',
      comment: '',
    },
  }),
  getters: {
    orderItemsCount: (state) => state.orderItems.length,
    isItemsInOrder: (state) => state.orderItems.length < 1,
    orderItemsTotalPrice: (state => {
      let price = 0
      state.orderItems.forEach(order => price += order.item.price * order.quantity)
      return price
    }),
    isEmailValid: (state => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(state.delivery.email)
    }),
    isFirstNameValid: (state => state.delivery.firstName.length > 2),
    isLastNameValid: (state => state.delivery.lastName.length > 2),
    isPhoneValid: (state => {
      const phoneRegex = /^(\+\d{1,2}\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/
      return phoneRegex.test(state.delivery.phone)
    }),
    isFirstLineValid: (state => state.delivery.firstLine.length > 2),
    isCityValid: (state => state.delivery.city.length > 2),
    isPostalCodeValid: (state => state.delivery.postalCode.length > 2),
    
    isOrderDetailsCompleted: (state => {
      return state.isEmailValid && state.isFirstNameValid && state.isLastNameValid &&
        state.isPhoneValid && state.isFirstLineValid && state.isCityValid && state.isPostalCodeValid
    })
    
  },
  actions: {
    addItemToOrder({item}) {
      const existingOrderItem = this.orderItems.find(orderItem => orderItem.item.title === item.title)
      
      if (existingOrderItem) {
        existingOrderItem.quantity += 1
      } else {
        let orderItem = {
          item: item,
          quantity: 1,
        };
        this.orderItems.push(orderItem)
      }
    },
    removeItemFormOrder({item}) {
      const index = this.orderItems.findIndex(orderItem => orderItem.item.title === item.title)
      this.orderItems.splice(index, 1);
    },
  },
})