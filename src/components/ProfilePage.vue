<template>
    <MenuTop></MenuTop>
    <p id="subtitle">Seu Perfil</p>

    <div id="profile-section">
        <ul>Nome de Usuário: Nome Teste <button>Alterar Nome?</button> </ul> 
        <ul>Senha: ***** <button>Alterar Senha?</button></ul>
        <ul>Criado em: 00/00/0000</ul>
        <ul>Chave de API: j1ioejqw-2321-123wqj12</ul>
    </div>
</template>

<script>
import MenuTop from './MenuTop.vue';
export default {
    name: "ProfilePage",
    components: {
        MenuTop,
    }
}
</script>

<style>

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