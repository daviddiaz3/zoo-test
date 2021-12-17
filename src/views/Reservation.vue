<template>
  <div class="Reservation">
   <div class="container">
     <h1>Reserveer je bezoek aan de Zoo!</h1>
     <div class="datum">
       <p>Datum*</p>
       <input type="date" v-model="datum">
     </div>
     <div class="tijdslot*">
       <p>Tijdslot*</p>
       <input type="time"  v-model="tijdslot">
     </div>
     <p>Bezoekers</p>
     <div class="bezoekers-container">
       <div v-if="errormsg" class="error">{{errormsg}}</div>
       <div class=voornaam>
         <p>Voornaam*</p>
         <input v-model="voornaam" />
       </div>
      <div class=familienaam>
         <p>Familienaam*</p>
         <input v-model="familienaam" />
       </div>      
       <div class=abonnementsnummer>
         <p>Abonnementsnummer</p>
         <input v-model="nummer" />
       </div>
     </div>
     <div class="bezoekers">
       <h3>Bezoekers:</h3>
      
       <div class="bezoeker" v-for="bezoeker in bezoekers" :key="bezoeker.voornaam">
         {{bezoeker.voornaam}} {{bezoeker.familienaam}}
         <button class="delete" @click="deleteBezoeker(bezoeker)">x</button>
       </div>     
     </div>
     <button class="voegtoe" @click ="voegBezoekerToe">Voeg nog een bezoeker toe</button>
     <button class="reserveer" @click="createReservatie">Reserveer!</button>
   </div>
  </div>
  <div class="reservatie">{{ reservatie }}</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Reservation',
  components: {
   
  },

  data() {
    return {
      datum: '',
      tijdslot: '',
      voornaam: '',
      familienaam: '',
      nummer: '',
      bezoekers: [],
      reservatie: '',

      errormsg: ''
    }
  },
  
  methods: {
    createReservatie(){
      this.reservatie = {"datum" : this.datum, "tijdslot": this.tijdslot, "bezoekers": this.bezoekers}
      console.log(this.reservatie)
    },

    voegBezoekerToe(){
      this.valideerNummer(this.nummer)
      this.bezoekers.push({voornaam: this.voornaam, familienaam: this.familienaam, nummer: this.nummer})
      this.voornaam = ''
      this.familienaam = ''
      this.nummer = ''
    },

    deleteBezoeker(bezoeker){
      this.bezoekers.splice(this.bezoekers.indexOf(bezoeker), 1)
    },

    valideerNummer(nummer){
      //valideer lengte
      var cijfers = nummer.replace(/-/g, '')
      if (cijfers.length != 10){
        this.errormsg = "Abonnementsnummer moet 10 karakters lang zijn!"
        return false;
      }
      //valideer streepjes
      if (nummer.charAt(4) != '-' || nummer.charAt(9) != '-'){
        this.errormsg = "Streepje na 4de en 8e karakter!"
        return false;
      }
      var first = cijfers.substring(0,8)
      var last = cijfers.substring(8)

      //checksum
      if (parseInt(first) % 98 != parseInt(last)) { 
        this.errormsg = "Checksum klopt niet!"
        return false
      }
      
      this.errormsg = ''
      return true
    }
  }
}
</script>

<style scoped>
  .container {
    margin-left: 300px;
    max-width: 700px;
    text-align: left;
  }

  .bezoekers-container{
    max-width: 600x;
    padding: 15px;
    padding-top: 0px;
    border: 1px;
    border-style: solid;
    border-color: black;
    border-radius: 4px;
    margin: 10px 0px 40px 0px;
  }

  .reserveer{
    float: right;
  }

  .reserveer, .voegtoe{
    border:#f4f4f4;
    border-radius: 4px;
    background: rgb(209, 209, 255);
    margin-top: 10px;
    padding: 5px;
    cursor: pointer;
  }

  .bezoeker .delete{
      cursor: pointer;
      float: right
  }

  .bezoekers {
    text-align: left;
  }
  .bezoeker{
    text-align: left;
    background: #f4f4f4;
    padding: 15px;
    border-radius: 4px;
    margin: 10px ;
    max-width: 600px;
    color: #444
  }

  .reservatie {
    margin-top: 30px;
  }

  .error {
    margin-top: 15px;
    padding: 10px;
    color: #D8000C;
    background-color: #FFD2D2;
  }


</style>
