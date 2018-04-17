<template lang="pug">
  v-dialog(v-model="dialog" width="60%")
    v-btn(slot="activator" primary dark)
      v-icon search
    v-card
      v-card-title
        span.headline {{$t("Kanji Selection")}}
      v-card-text
        v-layout(column)
          v-text-field(label="Email" required)
          v-text-field(label="Password" type="password" )

      v-card-actions
        v-spacer
        v-btn(class="blue--text darken-1" flat @click.native="dialog = false") Close
</template>

<script>
export default {
  data () {
    return {
      dialogm1: '',
      dialog: false
    }
  },
  methods: {
    changeLocale (to) {
      global.helper.ls.set('locale', to)
      this.$i18n.locale = to
    }
  }
}
</script>

