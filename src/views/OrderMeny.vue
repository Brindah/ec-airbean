<template>
<div class="container">
    <header class="bg-header">
        <router-link to="/Navigation">
            <div class="navicon">
            <img class="topIcon" alt="Navigera " src="../assets/graphics/navicon.svg">
            </div>
        </router-link>
        <div>
             <ul>
                <OrderTotal
                v-bind:dropIt="showOrder"
                v-on:pay="hideOrder"
                v-bind:cart="this.cart"
                />
            </ul>
        </div>
        <div class="shoppingBag"
             v-on:click="dropWindow" >
            
            <div class="counter">
                {{this.cart.length}}
            </div>
            <img class="topIcon" alt="Shopping Bag " src="../assets/graphics/bag.svg">
        </div>
    </header>

    <section>
       
<p v-if="loading"> Laddar...</p>
    <ul v-else>
        <li v-for="(cup, id) in menu"
            v-bind:key="id">
           
            <div class="add">
                <img 
                v-on:click="addToCart(cup)"
                alt="Add a Cup " src="../assets/graphics/add.svg">
            </div>
            <p>
                {{cup.title}}................ {{cup.price}}kr
            </p>
            <p>
                {{cup.desc}}
            </p>
            <br>
        </li>
    </ul>
    </section>
<footer class="bg-footer">
 </footer>
</div>
</template>

<script>
import OrderTotal from '@/components/OrderTotal.vue'
import * as API from '@/api/index.js'
export default {
    components:{OrderTotal},


   name:'OrderMeny',
   data(){return{
            loading:true,
             cart:[],
             showOrder: false,
             cup:{
                id:'',
                title:'',
                desc:'',
                price:''
             },
    
   
   }},

   methods:{
       addToCart(cup){        
                let cupExists = this.cart.find(el => el.id == cup.id)
                
                if(cupExists){
                    cupExists.amount +=1; console.log(cupExists.id);}
                else {this.cart.push({...cup, amount:1 });
                }
            },
            
       dropWindow(){
            this.showOrder = true
        },
       hideOrder(){
            this.showOrder = false
        }


   },

async mounted(){
    const menu = await API.fetchCoffe()
    this.menu = menu
    this.loading =false
  }
    
}
</script>

<style scoped>
li {list-style: none;}
.container {
    position: relative;
    background-color: rgb(233, 201, 206);
    margin: 10px;
    padding: 50px;
    }



.topIcon {width: 2rem;
         height: 2rem;
         }
.add {
      width: 2rem;
      height: 2rem;
      background:black;
      border-radius: 50%;
      justify-items: center;
      align-content: center;
      position: absolute;
      left: 235px;
      
    }

.navicon {width: 3rem;
      height: 3rem;
      background:white;
      border-radius: 50%;
      justify-items: center;
      align-content: center;
      position: absolute;
      top:0px;
      left:0px; 
      margin: 5px;
         padding: 5px;
      }

.shoppingBag{width: 3rem;
      height: 3rem;
      background:black;
      border-radius: 50%;
      justify-items: center;
      align-content: center;
      position: absolute;
      top: 0px;
      right: 0px;
      margin: 5px;
      padding: 2px;

     }
.counter{width: 1rem;
      height: 1rem;
      background:orangered;
      border-radius: 50%;
      justify-items: center;
      align-content: center;
      position: absolute;
      top: 0px;
      right: 0px;
      }

      .bg-header {
    background-image: url("../assets/graphics/graphics-header.svg"); /* The image used */
    background-color: transparent; /* Used if the image is unavailable */
    height: 200px; /* You must set a specified height */
    background-position: top; /* Center the image */
    position: top;
    background-repeat: no-repeat; /* Do not repeat the image */
  
}
.bg-footer {
    background-image: url("../assets/graphics/graphics-footer.svg"); /* The image used */
    background-color: transparent; /* Used if the image is unavailable */
    height: 200px; /* You must set a specified height */
    background-position: top; /* Center the image */
    position: bottom;
    background-repeat: no-repeat; /* Do not repeat the image */
  
}
</style>