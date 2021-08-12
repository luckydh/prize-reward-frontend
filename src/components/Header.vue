<template>
<div>
    <div class="wrapper">
        <router-link to="/">
            <img src="../assets/logo.png" class="logo" />
        </router-link>
        <p class="user">{{fullname}}
            <button @click="logout" class="logout">{{ fullname ? "logout" : "login" }}</button>
        </p>
        

    </div>
    <div class="hero-banner">
        <h1 class="hero-title">Rewards</h1>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            fullname: JSON.parse(localStorage.getItem("user"))?.user?.fullname || ""
        }
    },

    methods: {
        logout() {
            localStorage.removeItem("user")
            this.fullname = ""
            this.$router.push({ name: 'Login' })
        }
    }
}

</script>


<style scoped>

.wrapper{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
}

.logo{
    width: 50px;
    height: auto;
}

.hero-banner{
    background-color: #0374BB;
    height: 200px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.hero-title{
    font-size: 40px;
}

.user{
    font-weight: bold;
}
.logout {
    color: red;
    cursor: pointer;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
}
</style>


