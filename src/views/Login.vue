<template>
    <div>
       
        <div class="wrapper">
             <h2>Login</h2>

            <div>
                <label>Email</label>
                <input class="inputfield" type="email" v-model="email" required />

                <br>
                <label>Password</label>
                <input class="inputfield" type="password" v-model="password" required />     

                <button @click="loginUser" class="btn login">Login</button>
            </div>
              <div>
                    You dont have account ?  <router-link to="/register"><span class="link">Click here to Register</span></router-link>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
import { API_URL } from '../config';
export default {
    name: 'Login',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async loginUser() {
            const response = await axios.post(`${API_URL}/user/login`, {
               email: this.email,
               password: this.password
            });

            console.log(response)
                if(response.data.success) {
                    localStorage.setItem("user", JSON.stringify(response.data.data))
                    window.location.replace(`/`)
                }
            },
    }
}
</script>


<style scoped>
    .wrapper{
        width: 500px;
        height: 500px;
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

    .login {
        background-color: #0374BB;
        color: white;
    }

    .alert{
        padding: 10px;
        margin: 10px;
        color: white;
        background-color: rgb(122, 148, 82);
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