<template>
    <div id="login-form">
        <div class="container">
            <img id="logo" src="../assets/LogoRemade.svg">
        </div>

        <div class="container-input">
            <input id="first-input" v-model="username" placeholder="Nome de Usuário" type="text">
            <input placeholder="senha" v-model="password" type="password">
        </div>

        <div class="container">
            <button id="button-left"><router-link to="/signin">Criar Usuário</router-link></button>
            <button id="button-right" @click="handleLogin">Fazer Login</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LoginForm',
    methods: {
        data() {
            return {
                username: '',
                password: ''
            };
        },

        async handleLogin() {
            try {
                const data = {
                    nome: this.username,
                    senha: this.password
                };

                console.log(data);

                const response = await axios.post("http://localhost:8000/v1/login", data);

                if (response.status === 200) {
                    this.$router.push('/userfeeds')
                }

            } catch (error) {
                if (error.response.status == 404) {
                    alert("Nome de usuário ou senha incorretos. Talvez você digitou errado?")
                } else {
                    console.error("Erro!")
                }
            }
        }
    }
}
</script>

<style scoped>
* {
    background-color: #2B2B2B;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
}

#logo {
    width: 35vw;
    height: 35vh;
    object-fit: fill;
    margin-top: 10vh;
    margin-bottom: 1vh;
}

.container-input {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#first-input {
    margin-bottom: 2vh;
}

input {
    background-color: #D2D2D2;
    text-align: center;
    width: 25vw;
    height: 7.5vh;
    border: none;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    border: 1px solid #D2D2D2;
    border-radius: 5px;
    padding-left: 10px;
    outline: none;
}
  
button {
    color: white;
    background-color: black;
    border: 1px solid black;
    height: 6vh;
    width: 13vw;
    font-family: "Average Sans", sans-serif;
    font-size: 16px;
}

#button-left {
    border-radius: 0 0 0 2vw;
}

#button-right {
    border-radius: 0 0 2vw 0;
}

a {
    color: white;
    background-color: black;
    font-family: "Average Sans", sans-serif;
    font-size: 16px;
    text-decoration: none;
}

#login-form {
    height: 100vh;
}
</style>