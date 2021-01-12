<template>
<div class="bg-image">
    
    <div class="intro-text">
        <router-link to="/Navigation">
            <div class="circel" >  
                <div class="triangle">
                <img alt="graphic-loader" src="../assets/graphics/loader.png"> 
                </div>
            </div>
        </router-link>
         <h1>{{ rubrikH1 }}</h1>
        <h6>{{rubrikH6}}</h6>
    </div>
    
    <!-- <img alt="intro-graphic-right" src="../assets/graphics/intro-graphic-right.svg"> -->
    
</div>
</template>

<script>
export default {
    name:'Intro',
    data(){return{
            rubrikH1:'AIR BEAN',
            rubrikH6:'DRONEDELIVERED COFFEE'
    }

    }

}
</script>

<style scoped>


.bg-image {
    background-image: url("../assets/graphics/intro-graphic-left.svg"), 
                      url("../assets/graphics/intro-graphic-right.svg"); /* The image used */
    background-color: #1e643b; /* Used if the image is unavailable */
    height: 500px; /* You must set a specified height */
    background-position: left, right; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
  
}

.intro-text {
    text-align: center;
    position: center ;
    top: 50%;
    left: 50%;
    transform: translate(0%, 50%);
    color: white;
}

/* .triangle {
    width: 10;
    height: 10;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
}
.circel {
      width: 100px;
      height: 100px;
      background: rgb(38, 131, 107);
      border-radius: 50%
    } */
</style>