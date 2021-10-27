<template>
  <div id="passengers">
    <section v-if="errored">
      <p>Sorrry, something went wrong</p>
    </section>
    <section class="md:flex flex-col" v-else>
      <div v-if="loading">Loading...</div>
      <div v-if="noPassengers">
        <p>No Passengers booked on this Airline</p>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
           href="/airlines">
          Back to List
        </a>

      </div>
      <div v-else
           v-for="passenger in passengers" v-bind:key="passenger._id">
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-2">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-6">
            <blockquote>
              <h1 class="text-2xl font-bold">
                {{ passenger.name }}
              </h1>
            </blockquote>
            <figcaption class="font-medium flex-col ">
              <div class="text-cyan-600">
                {{ passenger.trips }}
              </div>
              <div class="text-gray-500 text-sm">
                {{ passenger._id }}
              </div>
            </figcaption>
            <router-link :to="{ path: '/airlines/' + passenger.id  }"
                         class="bg-blue-500 text-center text-white p-2 rounded m-3.5">Edit
            </router-link>

          </div>
        </figure>
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
      noPassengers:false

    }
  },


  mounted() {
    let id = this.$route.params.id;
    axios
        .get('http://localhost/api/passengers/' + id)
        .then(response => {
          this.passengers = response.data
        })

        .catch(error => {
          console.log(error)
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
          if (this.passengers.length === 0)
            this.noPassengers = true
        }
        )
  }
};
</script>

<style scoped>

</style>