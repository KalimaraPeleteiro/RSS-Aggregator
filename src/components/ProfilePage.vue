<template>
    <MenuTop></MenuTop>
    <p id="subtitle">Seu Perfil</p>

    <div id="profile-section">
        <ul>Nome de Usuário: {{ username }} </ul> 
        <ul>Senha: {{ maskedPassword }}</ul>
        <ul>Chave de API: {{ apiKey }}</ul>
    </div>
</template>

<script>
import MenuTop from './MenuTop.vue';
export default {
    name: "ProfilePage",
    components: {
        MenuTop,
    },

    computed: {
        username() {
            return sessionStorage.getItem("Username");
        },
        maskedPassword() {
            return "*" + Array(sessionStorage.getItem("Password").length).join('*');
        },
        apiKey() {
            return sessionStorage.getItem("ApiKey");
        }
    }
}
</script>

<style scoped>

#subtitle {
    font-family: "McLaren", sans-serif;
    font-size: 20px;
    margin-top: 4vh;
    margin-left: 4vh;   
}

#profile-section {
    font-family: "DM Sans", sans-serif;
    font-size: 18px;
    margin-top: 2vh;
    margin-left: 4vh;
}

#profile-section ul {
    margin-top: 2vh;
    padding-left: 0;
}

#profile-section button {
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    margin-left: 3vh;
    background-color: #2B2B2B;
    color: white;
    border: 1px solid #2B2B2B;
    border-radius: 1vw 1vw 1vw 1vw;
    width: 10vw;
}
</style>