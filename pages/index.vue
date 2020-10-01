<template>
  <v-row v-if="!user" justify="center" align="center">
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
  <v-row v-else>
    <v-col cols="4" sm="1" md="4">
      <v-card>
        <v-card-title class="headline">
          Create a new project
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="projectName"
            label="Project name"
            required
          />
        </v-card-text>
        <v-card-actions>
          <v-btn block>
            Create project
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card
        v-for="project in projects"
        :key="project._id"
      >
        <v-card-title class="headline">
          {{ project.name }}
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="projectName"
            label="Project name"
            required
          />
        </v-card-text>
        <v-card-actions>
          <v-btn block>
            Create project
          </v-btn>
        </v-card-actions>
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
      register: false,
      projects: [],
      projectName: ''
    }
  },

  computed: {
    user () { return this.$store.state.user }
  }

  // async mounted () {
  //   const response = await this.$axios.get('api/projects', {
  //     headers: {
  //       Authorization: this.$store.state.token
  //     }
  //   })
  //   console.log(response)
  // }
}
</script>
