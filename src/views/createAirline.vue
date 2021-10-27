<template>
  <div id="create-airline">

      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4 mx-auto mt-5">
              <p v-if="updated" class="bg-green-100 text-black border p-2 rounded m-1">Airline
                successfully created</p>
              <p v-if="isUpdating" class="bg-green-50 text-black border p-2 rounded m-1">Updating...</p>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="name" v-model="airline.name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="country">
            Country
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="country" v-model="airline.country">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="logo">
            Logo
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="logo" placeholder="Please provide link to logo" v-model="airline.logo">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="slogan">
            Slogan
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="slogan" v-model="airline.slogan">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="headquarters">
            Headquarters
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="headquarters" v-model="airline.headquarters">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="website">
            Website
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="website" v-model="airline.website">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="established">
            established
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" id="established" v-model="airline.established">
        </div>
        <div class="flex items-center justify-between">
          <button
              class="bg-gray-400 hover:bg-gray-300  text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="createAirline">
            Create
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
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "createAirline",


  data() {
    return {
      airline: {
        name: null,
        country:null,
        logo: null,
        slogan: null,
        headquarters:null,
        website:null,
        established:null
      },
      errored: false,
      updated:false,
      isUpdating:false
    }

  },
  methods: {
    createAirline() {
      this.isUpdating = true;
      axios
          .post('http://localhost/api/airlines', this.airline )

          .then(response => {
            this.airline.id = response.data.id
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

    }

  },

}


</script>