<template>
<div>
    <img alt="intro-graphic-left" src="./assets/graphics/intro-graphic-left.svg">
    <img alt="graphic-loader" src="./assets/graphics/loader.png">
    <h1>{{ rubrikH1 }}</h1>
    <h6>{{rubrikH6}}</h6>
    <img alt="intro-graphic-right" src="./assets/graphics/intro-graphic-right.svg">
    
</div>
</template>

<script>
export default {
    name:Intro,
    data(){return{
            rubrikH1:'AIR BEAN',
            rubrikH6:'DRONEDELIVERED COFFEE'
    }

    }

}
</script>

<style scoped>
</style>