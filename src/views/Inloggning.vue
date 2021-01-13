<template>
    <div class="backdrop">
        <div class="boxen">
            <header>
                <router-link to="/Navigation">
                    <div class="navicon">
                        <img class="topIcon" alt="Navigera " src="../assets/graphics/navicon.svg">
                    </div>
                </router-link>
                    
                <div class="intro-text">
                        <img alt="graphic-loader" src="../assets/graphics/loader.png">     
                    <h1>
                        Välkommen till AirBean-familjen!   
                    </h1>
                    <h3>
                        Genom att skapa ett konto nedan kan
                        du spara och se din orderhistorik.  
                    </h3>   
                </div> 
            </header>
            <form action="">
            <div>
            <span>
                <label for="namn">Namn</label>
             </span>
             <span>
                <input type="text" v-modal="namn">
            </span>
            </div>
            <div>
            <span>
             <label for="epost">Epost</label>
             </span>
             <span>
             <input type="text" v-modal="epost">
             </span>
             </div>
             <div>
             <span>
             <input type="radio" v-model="gdpr">
             <label>GDPR Ok!</label>
            </span>
            </div>
            <button class="inloggBtn">
                Brew me a cup!
            </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){return{
        namn:'',
        epost:'',
        gdpr:false,
        list:[]
    }},
    methods:{
        submit(){
            this.list.push({name:this.namn,
                            epost:this.epost})
        }
    }

}
</script>

<style scoped>
.backdrop{
    position: relative;
    background-color: rgb(233, 201, 206);
    margin: 10px;
    padding: 50px;
    align-items: center;
    justify-content: center;
}
.boxen{
    background-color: rgb(233, 201, 206);
   padding: 16px;
   margin: 4rem;
   width: 50%;
   height: 100%;
 
}

.topIcon {
    width: 2rem;
    height: 2rem;
}

.navicon {
    width: 3rem;
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
.intro-text {
    text-align: center;
    position: center ;
    top: 50%;
    left: 50%;
    transform: translate(0%, 0%);
    color: black;
}
.inloggBtn {
    background-color:black;
    color: whitesmoke;
    font-size: 24px;
    border-radius: 30px;
    width: 50%;
    height: 10%;
    border: none;
    position: absolute;
    bottom:10px;
    left:100px; 
    margin: 5px;
    padding: 5px;
}

.inloggBtn:hover{
    background-color: darkgrey;
}

input[type=text]
 {
  width: 50%;
  padding: 12px 20px;
  margin: 0.5rem;
  display: inline-block;
  border-radius: 5%;
  box-sizing: border-box;
  position: left;
}


</style>