<template>
    <div class="container">
        <img id="logo" src="../assets/LogoRemade.svg">
    </div>

    <div class="container-input">
        <input id="first-input" placeholder="email" type="email">
        <input placeholder="senha" type="password">
    </div>

    <div class="container">
        <button id="button-left"><a href="user_created.html">Criar Usuário</a></button>
        <button id="button-right"><a href="user_feeds.html">Fazer Login</a></button>
    </div>
</template>

<script>
export default {
    name: 'LoginForm'
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
</style>