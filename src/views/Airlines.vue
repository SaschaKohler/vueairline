<!--<template>-->
<!--  <div id="airlines">-->
<!--    <section v-if="errored">-->
<!--      <p>Sorrry, something went wrong</p>-->
<!--    </section>-->
<!--    <section class="md:flex flex-col" v-else>-->
<!--      <div v-if="loading">Loading...</div>-->
<!--      <div v-else-->
<!--           v-for="airline in airlines" v-bind:key="airline.id">-->
<!--        <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-2">-->
<!--          <img class="w-32 h-32 rounded-full mx-auto" v-bind:src=airline.logo alt="No logo available"/>-->
<!--          <div class="pt-6 md:p-8 w-2/3 text-center md:text-left space-y-6">-->
<!--            <blockquote>-->
<!--              <h1 class="text-2xl font-bold">-->
<!--                {{ airline.name }}-->
<!--              </h1>-->
<!--            </blockquote>-->
<!--            <figcaption class="font-medium flex-col">-->
<!--              <div class="text-cyan-600">-->
<!--                {{ airline.headquarters }}-->
<!--              </div>-->
<!--              <div class="text-gray-500">-->
<!--                {{ airline.slogan }}-->
<!--              </div>-->
<!--            </figcaption>-->
<!--            <div class="action flex justify-around ">-->
<!--              <router-link :to="{ path: '/airlines/' + airline.id  }"-->
<!--                           class="text-center text-black bg-gray-200 hover:bg-gray-50 p-2 rounded inline-block">Edit-->
<!--              </router-link>-->
<!--              <router-link :to="{ path: '/passengers/' + airline.id  }"-->
<!--                           class="text-center text-black p-2 bg-gray-200 hover:bg-gray-50 rounded inline-block">-->
<!--                Passengers-->
<!--              </router-link>-->
<!--              <button-->
<!--                  class="bg-red-400 hover:bg-red-300  text-black font-bold p-2 rounded focus:outline-none focus:shadow-outline"-->
<!--                  type="button" @click="deleteAirline(airline.id)">-->
<!--                Delete-->
<!--              </button>-->
<!--            </div>-->

<!--          </div>-->
<!--        </figure>-->
<!--      </div>-->
<!--    </section>-->
<!--  </div>-->

<!--</template>-->

<template>
  <div id="airlines">
    <section v-if="errored">
      <p>Sorry, something went wrong</p>
    </section>
    <section class="md:flex flex-col" v-else>
      <div v-if="loading">Loading...</div>
      <div v-else>

        <div id="table" class="flex flex-col text-left">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div
                  class="
          shadow
          overflow-hidden
          border-b border-gray-200
          sm:rounded-lg
        "
              >
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                  <tr>
                    <th
                        scope="col"
                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Logo
                    </th>
                    <th
                        scope="col"
                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Name / Slogan
                    </th>
                    <th
                        scope="col"
                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Headquarters / Website
                    </th>
                    <th
                        scope="col"
                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Established
                    </th>
                    <th
                        scope="col"
                        class="
                  px-6
                  py-3
                  text-left text-xs
                  font-medium
                  text-gray-500
                  uppercase
                  tracking-wider
                "
                    >
                      Action
                    </th>
                  </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="airline in airlines" v-bind:key="airline.id">
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
                <span
                    class="
                    px-10
                    inline-flex
                    text-xs
                    leading-5
                    font-semibold
                    rounded
                    bg-green-100
                    text-green-800
                  "
                >
                  {{ airline.established }}
                </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex-row space-x-2">
                      <router-link :to="{ path: '/airlines/' + airline.id  }"
                                   class="text-center text-black bg-gray-200 hover:bg-gray-50 p-2 rounded inline-block">
                        Edit
                      </router-link>
                      <router-link :to="{ path: '/passengers/' + airline.id  }"
                                   class="text-center text-black p-2 bg-gray-200 hover:bg-gray-50 rounded inline-block">
                        Passengers
                      </router-link>
                      <button
                          class="bg-red-400 hover:bg-red-300  text-black font-bold p-2 rounded focus:outline-none focus:shadow-outline"
                          type="button" @click="deleteAirline(airline.id)">
                        Delete
                      </button>
                    </td>

                  </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="cards" class="flex-col items-center mx-auto">

          <!-- Card -->
          <div class="shadow-md rounded-md overflow-hidden w-1/2 mx-auto my-4" v-for="airline in airlines" v-bind:key="airline.id" >
            <img
                v-bind:src="airline.logo"
                class="w-full h-16"
                alt=""
            />

            <div class="p-4">
              <h5 class="text-xl font-semibold mb-2">{{airline.name}}</h5>

              <p class="mb-4">
                {{airline.slogan}}
              </p>

              <div class="flex flex-wrap p-2 space-x-2 ">

              <router-link :to="{ path: '/airlines/' + airline.id  }"
                           class="text-center text-black  bg-gray-200 text-sm hover:bg-gray-50 p-2 rounded ">
                Edit
              </router-link>
              <router-link :to="{ path: '/passengers/' + airline.id  }"
                           class="text-center text-black  p-2 text-sm bg-gray-200 hover:bg-gray-50 rounded ">
                Passengers
              </router-link>
              <button
                  class="bg-red-400 hover:bg-red-300  text-black text-sm p-2 rounded focus:outline-none focus:shadow-outline"
                  type="button" @click="deleteAirline(airline.id)">
                Delete
              </button>
              </div>
            </div>
          </div>
          <!-- Card -->


        </div>
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
            this.loading = false;
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

  mounted() {
    this.getAirlines();
  },


}
</script>

<style scoped>

#table {
  display: none;
}

@screen lg {
  #table {
    display: block;

  }

  #cards {
    display: none
  }
}


</style>