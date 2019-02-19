<template>
  <div id="app">

    <Topbar/>
    <Leftbar/>

    <div class="content-page">
    <!-- Start content -->
      <div class="content">
        <div class="container">

          <router-view></router-view>

        </div>
        <!-- container -->

      </div>
      <!-- content -->

      <footer class="footer">2016 - 2017 © Adminto.</footer>

    </div>
    <!-- End content-page -->

  </div>
</template>

<script>

import Topbar from '@/components/Topbar.vue'
import Leftbar from '@/components/Leftbar.vue'

export default {

  name: 'App',

  components: {

    Topbar, Leftbar

  }

}
</script>
