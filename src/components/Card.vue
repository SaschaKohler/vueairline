<template>
   <div id="card" class="shadow-md rounded-md p-2 m-4 bg-indigo-50" >
      <img
          v-bind:src="airline.logo"
          class="w-3/4 mx-auto h-16"
          alt=""
      />

      <div class="p-4">
        <h5 class="text-xl font-semibold mb-2">{{airline.name}}</h5>

        <p class="mb-4">
          {{airline.slogan}}
        </p>

        <div class="flex flex-col md:flex-row justify-between rounded flex-wrap border-2">

          <router-link :to="{ path: '/airlines/' + airline.id  }"
                       class="text-center w-full text-gray-500 p-2 bg-gray-100 text-sm hover:bg-gray-50 rounded border-b">
            Edit
          </router-link>
          <router-link :to="{ path: '/passengers/' + airline.id  }"
                       class="text-center w-full text-gray-500  p-2 text-sm bg-gray-100 hover:bg-gray-50 rounded border-b ">
            Passengers
          </router-link>
          <button
              class="bg-gray-100 w-full hover:bg-red-500  text-red-900 text-sm p-2 rounded focus:outline-none focus:shadow-outline"
              type="button" @click="deleteAirline(airline.id)">
            Delete
          </button>
        </div>
      </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Card",
  props: {
    airline : Array
  },
  created() {
  },
  methods: {
    deleteAirline(id) {
      axios
          .delete('http://localhost/api/airlines/' + id)
          .then(response => {
            this.airlines = response.data
            this.loading = false;
            this.$router.go(0)
          })

          .catch(error => {
            console.log(error)
            this.errored = true;
          })

    }
  }
}
</script>

<style scoped>
#card{
  max-width:250px;
}
</style>