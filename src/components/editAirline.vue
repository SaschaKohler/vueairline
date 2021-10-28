<template>
  <div id="editAirline">
    <section v-if="errored">
      <p>Sorry, something went wrong</p>
    </section>
    <section class="mx-auto" v-else>
      <div v-if="loading">Loading...</div>
      <div v-else class="md:flex justify-evenly mx-auto">
        <div class="md:w-1/2">
          <div class="py-3 px-5 text-center bg-gray-100">Editing</div>

          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div v-if="updated" class="pb-2">
              <div
                  class="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-center w-12 bg-green-500">
                  <svg
                      class="w-6 h-6 text-white fill-current"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                    />
                  </svg>
                </div>
                <div class="mx-3">
                  <span class="font-semibold text-green-500 dark:text-green-400">Success</span>
                  <p class="text-sm text-gray-600 dark:text-gray-200">Airline Name updated!</p>
                </div>
              </div>
              </div>
            <div v-if="isUpdating" class="pb-2">

              <div
                  class="my-5 flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div class="flex items-center justify-center w-12 bg-blue-500">
                  <svg
                      class="w-6 h-6 text-white fill-current"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                    />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                     <span class="font-semibold text-blue-500 dark:text-blue-400">Info</span>
                    <p class="text-sm text-gray-600 dark:text-gray-200">
                      This channel archived by the owner!
                    </p>
                  </div>
                </div>
              </div>

            </div>

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
        </div>
        <div class="md:w-1/2">
          <div class="shadow-md flex-col rounded-md overflow-hidden">
            <div class="py-3 px-5 text-center bg-gray-100">Preview</div>
            <div class="pt-5 flex">
              <img
                  v-bind:src=airline.logo
                  class="w-1/4 p-3"
                  alt="No logo available"
              />

              <div class="p-4">
                <h5 class="text-xl font-semibold mb-2">{{ airline.name }}</h5>

                <p class="mb-4">
                  {{ airline.slogan }}
                </p>
                <p class="mb-4">
                  {{ airline.headquarters }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-gray-500 pt-10 text-xs">
        &copy;2021 sksoft Corp. All rights reserved.
      </p>
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