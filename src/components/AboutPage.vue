<template>
    <MenuTop></MenuTop>
    <p id="subtitle">O que é a Plataforma?</p>

    <p class="content-text">
        Para os que não conhecem, feeds RSS, ou Really Simple Sindication são uma forma de disponibilizar 
        seu conteúdo em um formato de fácil acesso e interatividade para outras aplicações, como essa aqui. 
        O conteúdo é disponibilizado em um formato padronizado, para facilitar a interação. Assim, ao se 
        registrar em qualquer um dos feeds RSS providos aqui, você poderá agregar os conteúdos dos seus 
        sites favoritos.
    </p>

    <p class="content-text">O código fonte do projeto está disponível no <a href="https://github.com/KalimaraPeleteiro">Github</a>.</p>
</template>

<script>
import MenuTop from './MenuTop.vue';
export default {
    name: "AboutPage",
    components: {
        MenuTop,
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
.content-text {
    font-family: "DM Sans", sans-serif;
    margin-top: 2vh;
    margin-left: 4vh;
    margin-right: 4vh;
    text-align: justify;
}

.content-text a {
    color: #2B2B2B;
    text-decoration: underline;
}
</style>