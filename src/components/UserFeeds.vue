<template>
    <MenuTop></MenuTop>
    <p id="subtitle">Posts</p>
    
    <div class="post">
        <p class="post-title">Título de exemplo</p>
        <p class="post-description">O Campeonato Mundial de Futebol, mais conhecido no Brasil por Copa do Mundo ou simplesmente Copa e também conhecida em Portugal como Campeonato do Mundo de Futebol, Campeonato Mundial FIFA ou apenas como Mundial,[1][2] é uma competição internacional de futebol que ocorre a cada quatro anos, com exceção de 1942 e 1946, quando não aconteceu devido à Segunda Guerra Mundial.</p>
        <p class="post-feed">Feed: Wikipedia</p>
        <button class="post-button">Link</button>
    </div>

    <div class="post">
        <p class="post-title">Título de exemplo</p>
        <p class="post-description">William Lloyd Hely foi um oficial militar da Real Força Aérea Australiana (RAAF). Formou-se no Real Colégio Militar, em 1930, antes de ser transferido para a RAAF como piloto cadete. Hely chamou a atenção do público em 1936–37, primeiro quando caiu num voo de pesquisa no Território do Norte e, mais tarde, quando empreendeu duas missões bem-sucedidas para localizar aeronaves desaparecidas nas mesmas proximidades.</p>
        <p class="post-feed">Feed: Wikipedia</p>
        <button class="post-button">Link</button>
    </div>

    <div class="post">
        <p class="post-title">Título de exemplo</p>
        <p class="post-description">A Austrália entrou na Segunda Guerra Mundial em 3 de setembro de 1939, após a aceitação do governo da declaração de guerra do Reino Unido à Alemanha Nazista. Após os ataques contra os países aliados, o governo australiano declarou mais tarde a guerra contra outros membros das potências do Eixo, incluindo o Reino da Itália em 11 de junho de 1940 e o Império do Japão em 8 de dezembro de 1941.</p>
        <p class="post-feed">Feed: Wikipedia</p>
        <button class="post-button">Link</button>
    </div>
</template>

<script>
import MenuTop from './MenuTop.vue';
export default {
    name: "UserFeeds",
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
.post {
    background-color: #D9D9D9;
    width: 95vw;
    height: 40vh;
    margin-top: 5vh;
    margin-left: 4vh;
    margin-bottom: 2vh;
}

.post p {
    padding-top: 2vh;
    padding-left: 2vh;
    font-family: "DM Sans", sans-serif;
}

.post-title {
    font-size: 20px;
}

.post-description {
    text-align: justify;
    padding-right: 2vh;
}

.post-button {
    margin-left: 2vh;
    margin-top: 4vh;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    background-color: #2B2B2B;
    color: white;
    height: 4vh;
    border: 1px solid #2B2B2B;
    border-radius: 1vw 1vw 1vw 1vw;
    width: 10vw;
}
</style>