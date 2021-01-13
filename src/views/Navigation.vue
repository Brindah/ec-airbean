<template>
<div class="container">
  <header class="bg-header">
    
    <div class=" navicon">
      <router-link to="/Home">
        <img class="topicon " alt="goHome " src="../assets/graphics/close.svg">
      </router-link>
    </div>
  </header>

   <section>  
    <p v-if="loading"> Laddar...</p>
    <ul v-else>
        <li v-for="(nav, id) in meny"
            v-bind:key="id">
            <p v-on:click="linkMaker" >
               <router-link v-bind:to="`${nav.name}`">
                {{nav.id}}
                </router-link> 
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
import * as API from '@/api/index.js'
export default {

  data(){return{
     loading:true,
 }},   
  
  async mounted(){
    const meny = await API.fetchMeny()
    this.meny = meny
    this.loading =false
  }
  
}
</script>

<style scoped>
.container{
    position: relative;
    background-color:black;
    color: blanchedalmond;
    margin: 10px;
    padding: 50px;
}

hr {
    background-color: blanchedalmond;
    height: 1px;
    width: 5%;
}


li {
    list-style: none;
}

.topIcon {
    width: 0.5rem;
    height: 0.5rem;
}

.navicon {
    width: 2.5rem;
    height: 2.5rem;
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

.bg-header {
    background-image: url("../assets/graphics/graphics-header.svg"); /* The image used */
    background-color: black; /* Used if the image is unavailable */
    height: 200px; /* You must set a specified height */
    background-position: top; /* Center the image */
    position: top;
    background-repeat: no-repeat; /* Do not repeat the image */
  
}
.bg-footer {
    background-image: url("../assets/graphics/graphics-footer.svg"); /* The image used */
    background-color: black; /* Used if the image is unavailable */
    height: 200px; /* You must set a specified height */
    background-position: top; /* Center the image */
    position: bottom;
    background-repeat: no-repeat; /* Do not repeat the image */
  
}


</style>