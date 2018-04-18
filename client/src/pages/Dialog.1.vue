<template>
  <v-dialog v-model='dialog' width='80%'>
    <v-btn primary dark slot="activator">
      <v-icon>search</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <span headline> {{$t('Kanji Selection')}} </span>
      </v-card-title>
      <v-card-text>
        <v-layout align-center justify-center>
          <div xs8>
            <span v-for='comps in components' :key="comps.stroke"/>        
              <v-btn round primary> 
                {{comps.stroke}}
              </v-btn>
              <v-btn round v-for='part in comps.part' :key="part.part"> 
                {{part.part}}
              </v-btn>
          </div>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn class='blue--text darken-1' flat @click.native='dialog = false'>
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      components: null,
      // part: null,
      dialogm1: '',
      dialog: false
    }
  },
  methods: {
    greet: function (event) {
      alert('Hello ' + this.id + '!')
    },
    changeLocale (to) {
      global.helper.ls.set('locale', to)
      this.$i18n.locale = to
    }
  },
  mounted () {
    this.$http.get('components')
      .then(({data}) => {
        this.components = data
      })
  }
}
</script>
<style scoped>
.btn {
  width: 10 !important;
}

.btn__content {
  padding: 2px;
}
</style>
