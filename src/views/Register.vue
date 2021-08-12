<template>
    <div>
       
        <div class="wrapper">
             <h2>Register</h2>

             <div class="alert" v-if="message">
                 {{message}}
             </div>
            <div>
                <label>Full Name</label>
                <input class="inputfield" type="text" v-model="fullname" required />
                <br>
                <label>Email</label>
                <input class="inputfield" type="email" v-model="email" required />

                <br>
                <label>Password</label>
                <input class="inputfield" type="password" v-model="password" required />     

                <button @click="registerUser" class="btn register">Register</button>
               
            </div>
             <div>
                    Already have an account  <router-link to="/login"><span class="link">Click here to Login</span></router-link>
            </div>
           
        </div>
    </div>
</template>


<script>
import axios from "axios";
import {API_URL} from '../config'

export default {
    name: 'Regitser',
    data() {
        return {
            message: "",
            fullname: "",
            email: "",
            password: ""      
        }
    },
    methods: {
        async registerUser() {
            const response = await axios.post(`${API_URL}/user/register`, {
               fullname: this.fullname,
               email: this.email,
               password: this.password
            });
                this.message = response.data.message
            },
        }
}
</script>


<style scoped>
    .wrapper{
        width: 500px;
        height: 600px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 50px;
        margin: 50px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .inputfield {
        padding: 10px;
        border-radius: 5px;
        outline: none;
        margin-bottom: 40px;
        width: 100%;
    }

    label{
        width: 300px;
        display: inline-block;
    }

    .register {
        background-color: #0374BB;
        color: white;
    }

    .alert{
        margin: 10px;
        color: white;
        background-color: rgb(122, 148, 82);
        padding: 10px;
    }

    .link {
        color: blue;
    }

    @media screen and (max-width: 600px) {
        .wrapper{
            width: 100%;
        }

        .wrapper div {
            padding: 10px;
            width: 100%;
        }

    }
</style>