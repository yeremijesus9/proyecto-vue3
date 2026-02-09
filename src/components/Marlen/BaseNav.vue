<template>
    <header class="contenedor-nav">
        <div>
            <img src="@/assets/logo.svg" alt="Logo Vue">
        </div>
        <nav>
            <ul>
                <li>Componentes</li>
                <li>Comunicación</li>
                <li>Slots | Teleport</li>
            </ul>
        </nav>
    </header>
</template>



<style scoped>
.contenedor-nav{
    display: grid;
    grid-template-columns: 200px 1fr auto;
    background-color: #030c15;
}
ul{
    display: flex;
    gap: 2rem;
    list-style: none;
    color: white;
    font-size: 1rem;
    align-items: center;
    padding-right: 1.5rem;
}

img{
    width: 160px;
    height: auto;
    margin-left: 1.5rem;
}
</style>