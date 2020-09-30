<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mb-2">
        <v-card-title class="headline">
          Welcome to the EDirect Insure TODO List
        </v-card-title>
      </v-card>
      <v-card>
        <v-card-text>
          <p>Please login or register, if you don't already have an account.</p>
          <login-form />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  components: {
    LoginForm
  },
  data () {
    return {
      register: false
    }
  }
}
</script>
