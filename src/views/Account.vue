<template>
  <div class="account">
    <AccountTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import AccountTable from '@/components/AccountTable.vue'

export default {
  name: 'account',
  components: {
    AccountTable
  }
}
</script>
