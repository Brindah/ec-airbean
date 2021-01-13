<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">Home</router-link> 
      
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.36);
  -moz-box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.36);
  box-shadow: 0px 3px 7px 0px rgba(0,0,0,0.36);
  width: 50%;
  height: 100%;
  
  
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color:black;
    }
  }
}

</style>
