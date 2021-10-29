<template>
  <div id="airlines">
    <section v-if="errored">
      <p>Sorry, something went wrong</p>
    </section>
    <section class="md:flex flex-col" v-else>
      <div v-if="loading">Loading...</div>
      <div class="flex flex-wrap" v-else>

        <div id="table" class="flex flex-col text-left">

          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200  sm:rounded-lg        ">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                  <tr>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Logo
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name / Slogan
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Headquarters / Website
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Established
                    </th>
                    <th scope="col"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200" v-for="airline in airlines" v-bind:key="airline.id">
                  <Table :airline="airline"/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div id="cards" class="mx-auto" v-for="airline in airlines" v-bind:key="airline.id">
          <Card :airline="airline"  />
        </div>
      </div>

    </section>
  </div>
</template>


<script>
import axios from 'axios';
import Card from "../components/Card";
import Table from "../components/Table"

export default {
  components: {Card, Table},
  data() {
    return {
      airlines: [],
      loading: true,
      errored: false

    }
  },

  methods: {

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
  }


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
    display: none;
  }
}


</style>