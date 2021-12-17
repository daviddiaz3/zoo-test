<template>
  <div class="about">
    <h1>Reservatie details:</h1>
    datum: {{console.log(reservatie)}}
    tijdslot: {{reservatie.tijdslot}}
    bezoekers:
    <div class="bezoeker" v-for="bezoeker in reservatie.bezoekers" :key="bezoeker.voornaam">
         {{bezoeker.voornaam}} {{bezoeker.familienaam}}
         {{bezoeker.nummer}}
    </div>     
  </div>
  <router-link to="/"> terug</router-link>
</template>

<script>
export default {
    props: ['reservatie'],

    data() {
        return {
            res: this.$route.params.reservatie
        }
    }
}
</script>