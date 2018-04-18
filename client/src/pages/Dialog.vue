<template lang="pug">
  v-dialog(v-model="dialog" width="50%")
    v-btn(slot="activator" primary dark)
      v-icon search
    v-card
      v-card-title
        span.headline User Profile
      v-card-text
        v-container.grid-list-md
          v-layout.wrap
            v-flex.xs12.sm6.md4
              v-text-field(label="Legal first name" required)

            v-flex.xs12.sm6.md4
              v-text-field(label="Legal middle name" hint="example of helper text only on focus")

            v-flex.xs12.sm6.md4
              v-text-field(label="Legal last name" hint="example of persistent helper text" persistent-hint required)

            v-flex.xs12
              v-text-field(label="Email" required)

            v-flex.xs12
              v-text-field(label="Password" type="password" )

            v-flex.xs12.sm6
              v-select(
                label="Age"
                required
                :items="['0-17', '18-29', '30-54', '54+']"
              )

            v-flex.xs12.sm6
              v-select(
                label="Interests"
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                multiple
                autocomplete
                chips
              )

        small *indicates required field
      v-card-actions
        v-spacer
        v-btn(class="blue--text darken-1" flat @click.native="dialog = false") Close
        v-btn(class="blue--text darken-1" flat @click.native="dialog = false") Save
</template>

<script>
export default {
  data () {
    return {
      dialogm1: '',
      dialog: false
    }
  },
  mounted () {
  }
}
</script>

