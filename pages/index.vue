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
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              label="Email"
              required
            />

            <v-text-field
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="At least 6 characters"
              class="input-group--focused mb-5"
              @click:append="showPassword = !showPassword"
            />

            <v-btn
              class="px-3 mr-2"
              color="primary"
              nuxt
              to="/"
            >
              Login
            </v-btn>
            &nbsp;or
            <v-btn
              class="px-3 ml-3"
              depressed
              nuxt
              to="/"
            >
              Register
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      showPassword: false
    }
  }
}
</script>
