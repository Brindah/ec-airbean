<template>
    <div    
    class="dropWindow" 
    v-bind:class="{dropIt: dropIt}"
    >
    <header>
        <h2>Din beställning</h2>
    </header>
    <section class="listInfo">
        <li v-for="(cup, id) in cart"
            v-bind:key="id">
            <div v-if="cup.amount >= 1">
            {{cup.title}}....................{{cup.price * cup.amount}}
          
            </div>
            <div v-else-if="cup.amount < 1">
                Your shopping bag is empty.
            </div>

            <div>
            <button v-on:click="cup.amount+= 1">
                <img alt="Add a Cup " src="../assets/graphics/arrow-up.svg">
            </button>
                Amount:{{cup.amount}}
            <button v-if="cup.amount >= 1" v-on:click="cup.amount -= 1">
                <img alt="Remove a Cup " src="../assets/graphics/arrow-down.svg">
            </button>
            </div>
            <br>
        </li>
    </section>

        <div class="totalInfo">
        <p>
            Total...................{{CartTotal.toFixed(0)}}
        </p>
         <p>
            inkl moms + drönarleverans
        </p>

        </div><router-link to="/Eta">
        <button class="moneyBtn" v-on:click="pay">
                Take my money
        </button>
          </router-link>
        
    </div>
</template>

<script>
export default {
    name:'OrderTotal',
    props:{
        dropIt: Boolean,
        cart:Array
        
    },
    data(){return{
        moms:1.12,
        dronedelivery:10,
        
    }},
    computed:{
      
       CartTotal(){ 
           let sum =0;
           for(let cup of this.cart){
            sum += cup.price*cup.amount
           }
           return sum
            } 
        
   },
      methods:{
            pay(){
            this.$emit('pay')
        }
        

}

}
</script>

<style scoped>


.dropWindow{
            position: fixed;
            left: 10%;
            top: 5%;
            right: 20%;
            bottom: 20%;
            background-color: whitesmoke;
            box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.68);
            display: none;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            height: 90%;
            width: 70%;
}

.dropIt{
    display: flex;
} 
 .moneyBtn {background-color:black;
            color: whitesmoke;
            font-size: 24px;
            border-radius: 30px;
            width: 50%;
            height: 15%;
            border: none;
            position: absolute;
            bottom:0px;
            left:100px; 
            margin: 5px;
            padding: 5px;
 }

 .moneyBtn:hover{background-color: darkgrey;}

 li {list-style: none;}

 .totalInfo{
            position: absolute;
            bottom:100px;
            left:100px;
 }

.listInfo{
            position: absolute;
           justify-content: center;
            align-items: center;
 }

 header {position: absolute;
        top:50px;}



</style>