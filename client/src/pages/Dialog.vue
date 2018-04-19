<template lang="pug">
  v-dialog(v-model="dialog" width="80%")
    v-btn(slot="activator" primary dark @click="resetAll")
      v-icon search
    v-card
      v-card-title        
        span.headline {{$t('Kanji Selection')}}
        
      v-card-text          
        v-btn(v-for="gaiji in sRes.gaijis" :key="gaiji") {{gaiji}}

        v-layout(align-center justify-center)
          div
            span(v-for="comps in components" :key="comps.stroke")
              button(type="button" class="btn-stroke" :disabled="1") {{comps.stroke}}              
              button(type="button" v-for="part in comps.part" :id="part.part" @click="addkey(part.part)" ) {{part.part}}
    
</template>

<script>
// const _ = require('lodash')

export default {
  data () {
    return {
      keyList: [],
      components: null,
      sRes: {
        gaijis: [],
        parts: [],
        selectedParts: []
      },
      dialogm1: '',
      dialog: false
    }
  },
  methods: {
    resetAll () {
      this.keyList = []
      this.sRes.gaijis = []
      this.sRes.parts = []
      this.sRes.selectedParts = []
    },
    addkey (key) {
      if (!this.keyList.includes(key)) {
        this.keyList.push(key)
        this.sentReq()
      }
    },
    changeLocale (to) {
      global.helper.ls.set('locale', to)
      this.$i18n.locale = to
    },
    sentReq () {
      const qrVal = this.listCommaSeparated()
      this.$http.get('search', {params: {
        key: qrVal
      }})
        .then(({data}) => {
          this.sRes = data
        })
    },
    listCommaSeparated () {
      return this.keyList.join(',')
    }
  },
  async mounted () {
    await this.$http.get('components')
      .then(({data}) => {
        this.components = data
      })
  }
}
</script>
<style scoped>
button {
  width: 35px;
  height: 35px;
  /* padding: 1px; */
  /* border: solid #b2b6b8 0.1px; */
  text-decoration: none;
  font-size: 25px;
}

button:hover {
  background: #a4d4f2;
  text-decoration: none;
}

.btn-stroke {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  color: #ffffff;
  text-decoration: none;
}

.btn-stroke:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}

</style>

