<script setup>

</script>

<template>
  <div class="section">
    <div class="section-left-part contact-information-box">
      <div class="contact-information-title">
        <span>Contact Information</span>
      </div>
      <div class="contact-box">
        <p class="contact-title">Mailing Address</p>
        <p class="contact-value">123 Anywhere St. Any City, ST 12345</p>
      </div>
      <div class="contact-box">
        <p class="contact-title">Email Address</p>
        <p class="contact-value">DessertDelights@gmail.com</p>
      </div>
      <div class="contact-box">
        <p class="contact-title">Phone Number</p>
        <p class="contact-value">(123) 456-7890</p>
      </div>
    </div>
    <div class="section-right-part footer-box">
      <img class='footer-image' src="/public/images/footer.jpg" alt="Cakes photo"/>
    </div>
  </div>
</template>

<style scoped>
.footer-box {
  height: 40em;
  //width: 50%;

  .footer-image {
    max-width: 100%;
    max-height: 100%;
    display: block; /* Ensures the image behaves as a block element */
    object-fit: cover;
    //overflow: hidden;
  }
}

.contact-information-box {
  max-width: 50%;
  text-align: center;
}

.contact-box {
  margin-top: 3em;
  text-align: center;
  //font-size: 1em;

  .contact-title {
    font-weight: 100;
    font-size: 1.5em;
    color: #4b362c;
  }

  .contact-value {
    font-size: 1.5em;
    font-weight: bold;
  }
}

.contact-information-title {
  margin-top: 5em;

  span {
    font-family: brand-title, serif;
    font-size: 3em;
  }
}

</style>