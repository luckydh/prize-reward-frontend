<template>
  <div class="prize-card">
      <div class="card-image">
          <img :src="image_url" alt="" srcset="">
      </div>
      <div class="card-title">
          <h2>{{title}}</h2>
      </div>

      <router-link :to="{ name: 'PrizeDetail', params: {id: this.id}}">
        <button @click="viewPrize" class="btn reedem">Reedem ></button>
      </router-link>
  </div>
</template>

<script>

export default {
    name: 'PrizeCard',
    props: {
        title: String,
        image_url: String,
        id: String
    },
}

</script>


<style scoped>

    .prize-card{
        min-height: 400px;
        width: 400px;
        height: auto;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
        margin: 20px 0;
    }

    .card-image{
        width: 400px;
        height: 300px;
    }

    .card-image img {
        width: 400px;
        height: 300px;
        object-fit: cover;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .card-title{
        text-align: center;
        padding: 30px;
    }

    .reedem {
        background-color: #FECF38;
    }

    @media screen and (max-width: 600px) {
           .prize-card {
                width: 100%;
            }

            .card-image, .card-image img{
                width: 100%;
            }
        }

</style>


