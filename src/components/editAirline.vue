<template>
  <div id="editAirline">
    <section v-if="errored">
      <p>Sorry, something went wrong</p>
    </section>
    <section class="md:flex mx-auto" v-else>
      <div v-if="loading">Loading...</div>
      <div v-else class="flex-row mx-auto">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <p v-if="updated" class="bg-green-100 text-black font-bold border p-2 rounded m-1">Airline Branding
              successfully updated</p>
            <p v-if="isUpdating" class="bg-green-50 text-black font-bold border p-2 rounded m-1">Updating...</p>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                Branding
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="airline.name" type="text" id="name">
            </div>
            <div class="flex items-center justify-between">
              <button
                  class="bg-gray-400 hover:bg-gray-300  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button" @click="updateAirlineName">
                Update
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                 href="/airlines">
                Back to List
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2021 sksoft Corp. All rights reserved.
          </p>
        <div>
          <h1 class="text-center p-3 font-bold bg-blue-200">Preview</h1>
          <figure class="md:flex flex-col bg-green-50 rounded-xl p-8 md:p-0 m-2">
            <img class="w-32 h-32 rounded-full mx-auto" v-bind:src=airline.logo alt="No logo available"/>
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <h1 class="text-2xl font-bold">
                  {{ airline.name }}
                </h1>
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-cyan-600">
                  {{ airline.headquarters }}
                </div>
                <div class="text-gray-500">
                  {{ airline.slogan }}
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "editAirline",


  mounted() {
    let id = this.$route.params.id;
    axios
        .get("http://localhost/api/airlines/" + id)
        .then(response => {
          this.airline = response.data
        })
        .catch(error => {
          this.errored = true;
          console.log(error)
        })
        .finally(() => {
          this.loading = false
        })
  },
  methods: {
    updateAirlineName() {
      let id = this.airline.id;
      this.isUpdating = true;
      axios
          .put('http://localhost/api/airlines/' + id, {
            name: this.airline.name
          })

          .then(response => {
            this.airline = response.data
          })
          .catch(error => {
            this.errored = true;
            console.log(error)
            console.log(this.airline.name)
          })
          .finally(() => {
            this.updated = true
            this.isUpdating = false
          })

    },


  },
  data() {
    return {
      loading: true,
      airline: [],
      errored: false,
      updated: false,
      isUpdating: false
    }
  }
}

</script>

<style scoped>

</style>