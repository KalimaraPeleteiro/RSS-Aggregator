<template>
    <MenuTop></MenuTop>
    <p id="subtitle">Posts</p>

    <div class="post" v-for="post in apiData" :key="post.id">
        <p class="post-title"> {{ post.Title }}</p>
        <p class="post-feed">Feed: {{ post.Feed }}</p>
        <button class="post-button"><a :href="post.Url">Link</a></button>
    </div>
</template>

<script>
import MenuTop from './MenuTop.vue';
import axios from 'axios';

export default {
    name: "UserFeeds",
    components: {
        MenuTop,
    },

    data() {
        return {
            apiData:null,
        };
    },
    
    mounted() {
        const ApiKey = sessionStorage.getItem("ApiKey");
        axios.defaults.headers.common['Authorization'] = `ApiKey ${ApiKey}`;

        axios.get("http://localhost:8000/v1/users/my_feeds/posts")
            .then(response => {
                this.apiData = response.data
            })
            .catch(error => {
                console.error("Erro ao fazer a requisição: ", error)
            })
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
    height: 25vh;
    margin-top: 5vh;
    margin-left: 4vh;
    margin-bottom: 2vh;
}

.post p {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
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

a {
    text-decoration: none;
    color: white;
}
</style>