<template>
  <tr class="hover:bg-indigo-50">
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex-shrink-0 h-20 w-20">
      <img class="h-20 w-20 rounded" v-bind:src="airline.logo"/>
    </div>
  </td>
  <td>
    <div class="ml-4">
      <div class="text-sm font-medium text-gray-900">
        {{ airline.name }}
      </div>
      <div class="text-sm text-gray-500">
        {{ airline.slogan }}
      </div>
    </div>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="text-sm text-gray-900">{{ airline.headquarters }}</div>
    <div class="text-sm text-gray-500">{{ airline.website }}</div>
  </td>
  <td class="px-2 py-4 whitespace-nowrap">
                <span class="px-10 py-3 text-sm leading-5 rounded bg-gray-100 text-gray-800">{{ airline.established }}</span>
  </td>
  <td class="px-6 py-4 whitespace-nowrap">
    <div class="flex flex-col text-xs border-2 rounded">
    <router-link :to="{ path: '/airlines/' + airline.id  }"
                 class="text-center text-gray-700 bg-gray-100 hover:bg-gray-50 p-2 rounded inline-block border-b">
      Edit
    </router-link>
    <router-link :to="{ path: '/passengers/' + airline.id  }"
                 class="text-center  text-gray-700 p-2 bg-gray-100 hover:bg-gray-50 rounded inline-block border-b">
      Passengers
    </router-link>
    <button
        class="bg-gray-100 hover:bg-red-500  text-red-900  p-2 rounded focus:outline-none focus:shadow-outline"
        type="button" @click="deleteAirline(airline.id)">
      Delete
    </button>
    </div>
  </td>
  </tr>

</template>

<script>
import axios from "axios";

export default {
  name: "Table",
  props: {
    airline: Object
  },
  methods: {
    deleteAirline(id) {
      axios
          .delete('http://localhost/api/airlines/' + id)
          .then(response => {
            this.airlines = response.data
            this.loading = false;
            this.$router.go(0);
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

</style>