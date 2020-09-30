<template>
  <div>
    <v-form
      v-if="!register"
      ref="loginForm"
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
        label="Password"
        hint="At least 6 characters"
        class="input-group--focused mb-5"
        @click:append="showPassword = !showPassword"
      />

      <v-btn
        class="px-3 mr-2"
        color="primary"
        @click="login()"
      >
        Login
      </v-btn>
      &nbsp;or
      <v-btn
        class="px-3 ml-3"
        depressed
        @click="register = !register"
      >
        Signup
      </v-btn>
    </v-form>

    <v-form
      v-else
      ref="signupForm"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        label="Name"
        :rules="[rules.required]"
        required
      />

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
        @click="signup()"
      >
        Signup
      </v-btn>
      &nbsp;or
      <v-btn
        class="px-3 ml-3"
        depressed
        @click="register = !register"
      >
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      email: '',
      name: '',
      password: '',
      showPassword: false,

      register: false,

      rules: {
        required: value => !!value || 'Required',
        min: v => v.length >= 8 || 'Min 6 characters'
      }
    }
  },

  methods: {
    async signup () {
      const response = await this.$axios.post('api/users/signup', {
        user: {
          name: this.name,
          email: this.email,
          password: this.password
        }
      })

      /**
       * @todo
       * Auto login
       */
      console.log(response)
    },

    async login () {
      try {
        const response = await this.$axios.$post('api/users/login', {
          user: {
            email: this.email,
            password: this.password
          }
        })

        this.$axios.setToken(response.token)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
