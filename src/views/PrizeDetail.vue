<template>
<div>
    <div class="detail-wrapper" v-bind:class="{blur: isShow }">
        <img :src="image_url" alt="" srcset="">

        <div class="checkout">
            <h2>{{name}}</h2>
            <hr>
            <button @click="handleModal" class="btn reedem"> Reedem > </button>
            <hr>
            <p>{{quantity}} left in stock</p>
        </div>

    
        
    </div>

        <div class="modal" v-if="isShow">
            <div class="error" v-if="error">
                {{error}}
            </div>
            <div class="success" v-if="success">
                {{success}}
            </div>
            <h2> Are you sure ?</h2>
            <img class="round-image" :src="image_url" />
            <p>Reedem for {{name}} ?</p>

            <div class="action">
                <button @click="redeemPrize" class="btn reedem">Reedem</button>
                <button @click="handleModal" class="btn">Cancel</button>

            </div>
        </div>

    </div>
</template>


<script>
import {API_URL} from '../config'
import axios from "axios";

    export default {
        name: 'PrizeDetail',
        data() {
            return {
                name: "",
                image_url: "",
                isShow: false,
                quantity: "",
                error: "",
                success: "",
            }
        },

        async mounted() {
            const {data} = await axios.get(`${API_URL}/prize/${this.$route.params.id}`);
            this.name = data.data.name
            this.image_url= data.data.image_url
            this.quantity = data.data.quantity              
        },
        methods: {
            handleModal() {
                this.isShow = !this.isShow
                this.error = ""
                this.success = ""
            },

            async redeemPrize() {
                try {
                    const token = JSON.parse(localStorage.getItem("user"))?.token || ""
                    const {data} = await axios.put(`${API_URL}/prize/reedem/${this.$route.params.id}`,{}, {
                         headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    })
                    this.quantity = data.data.quantity
                    this.success = "Congratulations, Successfully reedemed.."
                } catch (err) {
                    this.error = err.response.data.data
                }
            }
        }
    }
</script>

<style scoped>

    .blur {
        filter: blur(100px);
        background-color: rgb(0, 0, 0) !important;
    }
    .detail-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding: 50px;
        background-color: #F3F3F3;
    }

    .detail-wrapper img {
        height: 400px;
        width: 400px;
        object-fit: cover;
    }

    .checkout {
        background-color: white;
        padding: 20px;
        width: 400px;
    }

    .checkout h2, .checkout p{
        padding: 20px;
    }

    .checkout button {
        margin: 20px 0;
    }

    .modal {
        width: 50%;
        height: 50vh;
        background-color: white;
        padding: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 50px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .round-image{
        width: 200px !important;
        height: 200px !important;
        border-radius: 50%;
    }

    .action{
        display: flex;
        justify-content: space-around;
        width: 100%;
        flex-wrap: wrap;
        gap: 10px;
    }

    .error{
        background-color: rgb(136, 54, 54);
        color: white;
        padding: 10px;
    }

    .success {
          background-color: rgb(79, 157, 53);
        color: white;
        padding: 10px;
    }

     @media screen and (max-width: 1000px) {
          
    .detail-wrapper img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

       .modal {
        width: 89%;
        height: 50vh;
    }

        
        }
</style>