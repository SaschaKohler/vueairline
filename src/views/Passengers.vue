<template>
  <div id="passengers">
    <section v-if="errored">
      <p>Sorrry, something went wrong</p>
    </section>
    <section class="flex flex-row justify-center" v-else>
      <div v-if="loading">Loading...</div>
      <div v-if="noPassengers">
        <p>No Passengers booked on this Airline</p>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
           href="/airlines">
          Back to List
        </a>

      </div>
      <div id="fun" class="flex flex-col sm:flex-row" v-else>

        <div v-for="passenger in passengers" :key="passenger._id"
             class="shadow-md flex flex-col flex-shrink-0 m-4">
          <h2 class="py-2 px-5 text-center bg-gray-200 text-gray-600 mb-3">Passenger</h2>
          <div class="p-4 flex flex-col items-end justify-center">
            <h4 class="text-xs font-thin uppercase mb-2">Name of Passenger</h4>
            <h5 class="text-xl font-semibold mb-2 text-blue-700">{{ passenger.name }}</h5>
            <p class="text-cyan-600 text-xs text-gray-400">{{ passenger.trips }} Trips</p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Passengers",

  data() {
    return {
      airlines: [],
      passengers: [],
      loading: true,
      errored: false,
      noPassengers: false,
      id: null
    }
  },


  mounted() {
    this.id = this.$route.params.id;
    this.getPassengers()
  },
  methods:{
    async getPassengers(){
      try{
        let response = await axios.get('http://localhost/api/passengers/' + this.id)
        this.passengers = response.data

      } catch(error)   {
        console.log(error)
        this.errored = true;
      }  finally {
        this.loading = false;
        if (this.passengers.length === 0)
          this.noPassengers = true

      }
    }
  }
};
</script>

<style scoped>

</style>