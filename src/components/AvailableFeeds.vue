<template>
    <MenuTop></MenuTop>
    <p id="subtitle">Feeds Disponíveis</p>

    <div class="feed" v-for="feed in apiData" :key="feed.id">
        <p class="feed-title">{{ feed.nome }}</p>
        <p class="feed-description">{{ feed.url }}</p>
        <button class="feed-button" @click="followFeed(feed.id)">Seguir</button>
    </div>

</template>

<script>
import MenuTop from './MenuTop.vue';
import axios from 'axios';

export default {
    name: "AvailableFeeds",
    components: {
        MenuTop,
    },

    data() {
        return {
            apiData:null,
        };
    },
    
    mounted() {
        axios.get("http://localhost:8000/v1/feeds/all")
            .then(response => {
                this.apiData = response.data
            })
            .catch(error => {
                console.error("Erro ao fazer a requisição: ", error)
            })
    },

    methods: {
        async followFeed(id) {
            const ApiKey = sessionStorage.getItem("ApiKey");
            axios.defaults.headers.common['Authorization'] = `ApiKey ${ApiKey}`;

            try {
                const data = {
                    feed_id: id
                };

                const response = await axios.post("http://localhost:8000/v1/users/follow", data);

                if (response.status === 201) {
                    location.reload();
                }
            } catch (error){
                console.error(error);
            }
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
    margin-top: 0;
    margin-left: 0;
    margin-bottom: 0;
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
