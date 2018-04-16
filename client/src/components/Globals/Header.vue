<template>
  <v-toolbar color="teal lighten-3" dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">
        Tictack
      </v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          Dashboard
        </v-btn>
        <v-btn flat>
          Report
        </v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn flat>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-menu :nudge-width="100">
        <v-btn
          flat
          slot="activator"
        >
          <v-icon>account_box</v-icon>
          <!-- <span>User</span>
          <v-icon>keyboard_arrow_down</v-icon> -->
        </v-btn>
        <v-list>
        <v-list-tile v-for="item in items" :key="item">
          <v-list-tile-title v-text="item"></v-list-tile-title>
        </v-list-tile>
      </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    items: [
      'All', 'Family', 'Friends', 'Coworkers'
    ]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
