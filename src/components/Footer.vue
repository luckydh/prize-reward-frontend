<template>
  <div class="footer-wrapper">
    <h1>Terms & Conditions | Privacy Policy</h1>
  </div>
 
</template>

<script>

export default {
    name: 'Footer',
}

</script>


<style scoped>

.footer-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #0D0D0D;
    color: white;
}

   @media screen and (max-width: 1000px) {
          
   .footer-wrapper h1 {
     font-size: 20px;
   }

   }

     @media screen and (max-width: 600px) {
          
   .footer-wrapper h1 {
     font-size: 14px;
     padding: 10px;
   }

   }
</style>


