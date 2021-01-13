<template>
<div class="container">
  <header class="bg-header">
    <div class="navicon">
      <router-link to="/Navigation"> 
          <img class="topIcon" alt="Navigera " src="../assets/graphics/navicon.svg">
      </router-link>
    </div>

  </header>
    <section>
      <h1>Vårt kaffe</h1>
      <div> 
        <h4>
          Pumpkin spice mug, barista cup, sit
          macchiato, kopi-luwak, doppio, grounds
          dripper, crema, strong whipped, variety
          extra iced id lungo half and half mazagran.
          Pumpkin spice.
        </h4> 
      </div>

      <p>
        Que dark fair trade, spoon decaffeinated, barista
        wings whipped, as rich aftertaste, con panna milk
        black, arabica white rich beans single shot extra
        affogato. So affogato macchiato sit extraction
        instant grinder seasonal organic, turkish single shot,
        single origin, and robusta strong to go so dripper.
        Viennese froth, grounds caramelization skinny
        aromatic cup kopi-luwak, fair trade flavour,
        frappuccino medium, café au lait flavour cultivar ut
        bar instant kopi-luwak.
      </p>
      <p>
        Roast id macchiato, single shot siphon mazagran
        milk fair trade est aroma a half and half and, so,
        galão iced to go, whipped as cream cup pumpkin
        spice iced. At extra, rich grinder, brewed to go,
        steamed half and half at, that, percolator macchiato
        trifecta and body as arabica dripper. In galão black
        java milk sit trifecta, robusta, acerbic café au lait
        instant shop latte. Seasonal bar shop filter aroma id,
        crema, affogato viennese cultivar aftertaste,
        seasonal, percolator cream black, galão flavour, milk
        aromatic turkish skinny crema.
      </p>
    </section>
  <section>
    <div >
      <img class="circel" alt="Vd och Grundare " src="../assets/graphics/eva-cortado.jpg">
    </div>
    <div>
      <h2>
        Eva Cortado
      </h2>
      <h4>
        VD & Grundare
      </h4>
    </div>
  </section>
  <footer class="bg-footer">
  </footer>

</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'About',
}
</script>
<style scoped>
.container {
    position: relative;
    background-color: rgb(233, 201, 206);
    margin: 10px;
    padding: 50px;
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

.circel {
    width: 100px;
    height: 100px;
    background: transparent;
    border-radius: 50%
} 

.bg-header {
    background-image: url("../assets/graphics/graphics-header.svg"); /* The image used */
    background-color: transparent; /* Used if the image is unavailable */
    height: 200px; /* You must set a specified height */
    width: 100%;
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