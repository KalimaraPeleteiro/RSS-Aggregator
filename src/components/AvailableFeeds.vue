<template>
    <MenuTop></MenuTop>
    <p id="subtitle">Feeds Disponíveis</p>

    <div class="feed">
        <p class="feed-title">CNN</p>
        <p class="feed-description">Um canal de notícias.</p>
        <button class="feed-button">Seguir</button>
    </div>

    <div class="feed">
        <p class="feed-title">New York Times</p>
        <p class="feed-description">Um canal de notícias.</p>
        <button class="feed-button">Deixar de Seguir</button>
    </div>

    <div class="feed">
        <p class="feed-title">The Guardian</p>
        <p class="feed-description">Um canal de notícias.</p>
        <button class="feed-button">Seguir</button>
    </div>
</template>

<script>
import MenuTop from './MenuTop.vue';
export default {
    name: "AvailableFeeds",
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

.feed {
    background-color: #D9D9D9;
    width: 95vw;
    height: 22.5vh;
    margin-top: 5vh;
    margin-left: 4vh;
    margin-bottom: 2vh;
}

.feed p {
    padding-top: 2vh;
    padding-left: 2vh;
    font-family: "DM Sans", sans-serif;
}

.feed-title {
    font-size: 20px;
}

.feed-description {
    text-align: justify;
    padding-right: 2vh;
}

.feed-button {
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
