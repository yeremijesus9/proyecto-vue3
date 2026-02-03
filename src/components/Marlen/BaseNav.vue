<template>
    <header class="contenedor-nav">
        <div>
            <img src="@/assets/logo.svg" alt="Logo Vue">
        </div>
        <nav>
            <ul>
                <li>Componentes</li>
                <li>Comunicación</li>
                <li>Slots y Teleport</li>
                <li>CSS global y scoped</li>
            </ul>
        </nav>
    </header>
</template>



<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.contenedor-nav{
    height: 200px;
    display: grid;
    grid-template-columns: 200px 1fr auto;
    background-color: #030c15;
}
ul{
    display: flex;
    gap: 2rem;
    list-style: none;
    color: white;
    font-size: 1.5rem;
    text-decoration: underline;
}

img{
    width: 160px;
    height: 200px;
    margin-left: 1.5rem;
}
</style>