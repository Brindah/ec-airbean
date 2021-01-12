<template>
<div class="container">
<header>Ordernummer #{{orderNr}}</header>
<section> 
    <img class="droneIcon" alt="Drone " src="../assets/graphics/drone.svg">
</section>
<section><h1>
    Din beställning är på väg!    
</h1></section>
<section>
    <h3>
    {{etaTime}} minuter    
    </h3>
</section>
<section>
    <router-link to="/Home">
    <button class="coolBtn">
        Ok, cool!
    </button>
    </router-link>
</section>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container{
    background-color: rgb(241, 171, 171);
}

 .coolBtn {background-color:black;
            color: whitesmoke;
            font-size: 24px;
            border-radius: 30px;
            width: 50%;
            height: 15%;
            border: none;
            margin: 5px;
            padding: 5px;
 }
 .coolBtn:hover{background-color: darkgrey;}
</style>