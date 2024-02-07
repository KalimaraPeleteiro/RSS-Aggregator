<template>
    <div class = "page">
        <p id = "message">Usuário criado com sucesso!</p>
        
        <button><router-link to="/">Voltar para Login</router-link></button>
    </div>
</template>

<script>
export default {
    name:'SignIn'
}
</script>

<style scoped>
* {
    background-color: #2B2B2B;
}

.page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

#message {
    color: white;
    font-family: "DM Sans", sans-serif;
    font-size: 20px;
}

button {
    color: white;
    background-color: black;
    border: 1px solid black;
    height: 6vh;
    width: 13vw;
    font-family: "Average Sans", sans-serif;
    font-size: 16px;
    border-radius: 1vw 1vw 1vw 1vw;
}

a {
    color: white;
    background-color: black;
    font-family: "Average Sans", sans-serif;
    font-size: 16px;
    text-decoration: none;
}

</style>