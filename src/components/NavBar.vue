<template>
  <header class="border-b">
    <div
      class="container flex flex-col flex-wrap p-5  md:items-center md:flex-row "
    >
      <nav>
        <ul class="flex flex-wrap items-center justify-center text-base ">
          <li class="mr-5 text-sm font-semibold hover:text-gray-800">
            <router-link to="/">Airline Api Frontend</router-link>
          </li>
          <li class="mr-5 text-sm font-semibold hover:text-gray-800">
            <router-link to="/airlines">Get Airlines</router-link>
          </li>
          <li class="mr-5 text-sm font-semibold hover:text-gray-800">
            <router-link to="/create-airline">Create new Airlines</router-link>
          </li>

        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
