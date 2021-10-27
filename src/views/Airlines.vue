<template>
  <div id="airlines">
    <section v-if="errored">
      <p>Sorrry, something went wrong</p>
    </section>
    <section class="md:flex flex-col" v-else>
      <div v-if="loading">Loading...</div>
      <div v-else
           v-for="airline in airlines" v-bind:key="airline.id">
        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-2">
          <img class="w-32 h-32 rounded-full mx-auto" v-bind:src=airline.logo alt="No logo available"/>
          <div class="pt-6 md:p-8 text-center md:text-left space-y-6">
            <blockquote>
              <h1 class="text-2xl font-bold">
                {{ airline.name }}
              </h1>
            </blockquote>
            <figcaption class="font-medium flex-col">
              <div class="text-cyan-600">
                {{ airline.headquarters }}
              </div>
              <div class="text-gray-500">
                {{ airline.slogan }}
              </div>
            </figcaption>
            <router-link :to="{ path: '/airlines/' + airline.id  }"
                         class="bg-blue-500 text-center text-white p-2 rounded m-3.5">Edit
            </router-link>
            <router-link :to="{ path: '/passengers/' + airline.id  }"
                         class="bg-blue-500 text-center text-white p-2 rounded m-3.5">Passengers
            </router-link>
            <button
                class="bg-red-400 hover:bg-red-300  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button" @click="deleteAirline(airline.id)">
              Delete
            </button>

          </div>
        </figure>
      </div>
    </section>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      airlines: [],
      loading: true,
      errored: false

    }
  },

  methods: {

    deleteAirline(id) {
      console.log(id)
      axios
          .delete('http://localhost/api/airlines/' + id)
          .then(response => {
            this.airlines = response.data
            this.loading=false;
            this.getAirlines();

          })

          .catch(error => {
            console.log(error)
            this.errored = true;
          })

    },

    getAirlines() {
      axios
          .get('http://localhost/api/airlines')
          .then(response => {
            this.airlines = response.data
          })

          .catch(error => {
            console.log(error)
            this.errored = true;
          })
          .finally(() => this.loading = false)
    }
  },

mounted()
{
  this.getAirlines();
}
,


}
;
</script>