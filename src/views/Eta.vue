<template>
    <div class="container">
        <header>
            <ul>
                <li v-for="(order, orderNr) in orders"
                    v-bind:key="orderNr">
                    Ordernummer {{order.orderNr}}
                </li>
            </ul>
        </header>
        <section> 
            <img class="droneIcon" alt="Drone " src="../assets/graphics/drone.svg">
        </section>
        <section>
            <h1>
                Din beställning är på väg!    
            </h1>
        </section>
        <section>
            <h3>
                10 minuter...
                <!-- {{order.etaTime}}minuter     -->
            </h3>
        </section>
        <section>
            <router-link to="/Navigation">
                <button class="coolBtn" >
                    Ok, cool!
                </button>
            </router-link>
        </section>
    </div>
</template>

<script>

export default {
    
computed:{ 
    orders(){
        return this.$root.orders}
    }   
}
</script>

<style scoped>

.container{
    background-color: rgb(241, 171, 171);
}

li  {list-style: none;
}

.coolBtn {
    background-color:black;
    color: whitesmoke;
    font-size: 24px;
    border-radius: 30px;
    width: 50%;
    height: 15%;
    border: none;
    margin: 5px;
    padding: 5px;
 }
.coolBtn:hover{
     background-color: darkgrey;
}
</style>