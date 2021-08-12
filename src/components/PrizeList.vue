<template>
  <div class="prizes-wrapper">
      <p class="info">Here is the full list of prizes that you can win.</p>
    
    <div class="prize-list">
      <div :key="prize._id" v-for="prize in prizes">
          <PrizeCard
            :title="prize.name"
            :image_url="prize.image_url"
            :id="prize._id"
           />
      </div>
    </div>
  </div>
</template>

<script>

import PrizeCard from './PrizeCard.vue'
import {API_URL} from '../config'
import axios from "axios";


export default {
    name: 'PrizeList',
    components: {
        PrizeCard
    },

    data() {
      return {
        prizes: []
      }
    },

    // while mounting the component 
    async mounted() {
      const response = await axios.get(`${API_URL}/prize`);
      this.prizes = response.data.data;
  },
}

</script>


<style scoped>

.prizes-wrapper{
    min-height: 100px;
    height: auto;
    background-color: #F3F3F3;
    padding: 0px 50px 50px 50px;
    
}

.info{
    text-align: center;
    padding: 50px 0;
}

.prize-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
}

  @media screen and (max-width: 1000px) {
           .prizes-wrapper {
                padding: 0px 10px 50px 10px;
            }

            .prize-list{      
              justify-content: center
            }
        }

</style>


