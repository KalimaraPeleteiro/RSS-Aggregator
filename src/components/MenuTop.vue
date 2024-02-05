<template>
    <div id="menu-topbar">
        <img src="../assets/RSS-Icon.svg" id="logo">
        <ul class="menu-list-item"><RouterLink to="/userfeeds">Seus Feeds</RouterLink></ul>
        <ul class="menu-list-item"><RouterLink to="/feeds">Feeds Disponíveis</RouterLink></ul>
        <ul class="menu-list-item"><RouterLink to="/profile">Perfil</RouterLink></ul>
        <ul class="menu-list-item"><RouterLink to="about">Sobre a Plataforma</RouterLink></ul>
    </div>
</template>

<script>
export default {
    name: "MenuTop"
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

#menu-topbar {
    height: 15vh;
    background-color: #2B2B2B;
    display: flex;
    position: left;
}

#logo {
    margin-top: 3vh;
    width: 8vw;
    height: 8vh;
}

.menu-list-item {
    margin-top: 5vh;
    margin-left: 13vw;
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    color: white;
}

.menu-list-item a{
    color: white;
}

a {
    text-decoration: none;
}
</style>