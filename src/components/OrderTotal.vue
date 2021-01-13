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
            <div>
                <button v-on:click="cup.amount+= 1">
                    <img alt="Add a Cup " src="../assets/graphics/arrow-up.svg">
                </button>
                Cups:{{cup.amount}}
                <button v-if="cup.amount >= 1" v-on:click="cup.amount -= 1">
                    <img alt="Remove a Cup " src="../assets/graphics/arrow-down.svg">
                </button>
                <div v-else-if="cup.amount < 1">
                    No coffe for you!.
                </div>
            </div>
            <br>
        </li>
        <div class="totalInfo">
            <strong>  
                <p>  
                    Total...................{{CartTotal.toFixed(0)}}
                </p>
                <p>
                    inkl moms + drönarleverans
                </p>
            </strong>
        </div>
        <router-link to="/Eta">
            <button class="moneyBtn" v-on:click="pay">
                Take my money
            </button>
        </router-link>
    </section>    
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
        tidMin : 5,
        tidMax : 15  
    }},
    computed:{
       orders(){
           return this.$root.orders
           },
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
            let randomString = Math.random().toString(36).substr(2,5 );
            let oNr = `#AB112${randomString}`;
            // let orderTime = Math.trunc(Math.random() * (this.tidMax - this.tidMin) + this.tidMin); 
            this.$root.orders.push({orderNr:oNr,
                                    orderSum:this.CartTotal,
                                    datum:this.datum(), 
                                //   etaTime:orderTime
                                });
            }, 
        datum(){
            var d = new Date();
            var orderday = d.toLocaleDateString();
            return  `${orderday}`;
            }
           

}

}
</script>

<style scoped>


.dropWindow{
            position: fixed;
            z-index: 1;
            left: 10%;
            top: 5%;
            right: 20%;
            bottom: 20%;
            background-color: whitesmoke;
            box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.68);
            display: none;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            height: 70%;
            width: 50%;
}

.dropIt{
    display: flex;
} 
 .moneyBtn {background-color:black;
            color: whitesmoke;
            font-size: 24px;
            border-radius: 30px;
            width: 60%;
            height: 10%;
            border: none;
            position: absolute;
            bottom:10px;
            left:100px; 
            margin: 5px;
            padding: 5px;
 }

 .moneyBtn:hover{background-color: darkgrey;}

 li {list-style: none;}

 .totalInfo{
            position: absolute;
            bottom:100px;
           
 }



 header {position: absolute;
        top:50px;}



</style>