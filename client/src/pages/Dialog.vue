<template lang="pug">
  v-dialog(v-model="dialog" width="80%")
    v-btn(slot="activator" primary dark @click="resetAll")
      v-icon search
    v-flex
      v-card()
        v-fle(xs7)
          div
            div(class="headline") KANJI
        v-flex(xs5)
          v-card-text
            v-btn(v-for="gaiji in sRes.gaijis.slice(0,20)"  :key="gaiji" @click="selectKanji(gaiji)") {{gaiji}}
            v-spacer
            v-expansion-panel(v-if="sRes.gaijis.length > 20")
              v-expansion-panel-content
                div(slot="header") show more
                v-card
                  v-card-text(class="grey lighten-3") 
                    v-btn(v-for="gaiji in sRes.gaijis.slice(Math.max(21, 1))" :key="gaiji" @click="selectKanji(gaiji)") {{gaiji}}
    v-flex
      v-card()
        v-fle(xs7)
          div
            div(class="headline") Selected Part
        v-flex(xs5)
          v-card-text
            v-btn(primary v-for="slted in sRes.selectedParts" :key="slted") {{slted}}
    v-flex
      v-card
        v-card-title
          v-layout(align-center justify-center)
            div
              span(v-for="comps in components" :key="comps.stroke")
                button(type="button" class="btn-stroke" :disabled="1") {{comps.stroke}}
                span(v-for="part in comps.part" :id="part.part")
                  button(v-if="sRqCount === 0 || sRes.parts.includes(part.part)" type="button" :id="part.part" @click="addkey(part.part)" class="btn-available") {{part.part}}
                  button(v-else type="button" :id="part.part" @click="addkey(part.part)" :disabled="1" class="btn-disabled") {{part.part}}    
</template>

<script>
export default {
  data () {
    return {
      sRqCount: 0,
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
      this.sRqCount = 0
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
    async sentReq () {
      this.sRqCount ++
      const qrVal = this.listCommaSeparated()
      await this.$http.get('search', {params: {
        key: qrVal
      }})
        .then(({data}) => {
          this.sRes = data
        })
    },
    listCommaSeparated () {
      return this.keyList.join(',')
    },
    selectKanji (gaiji) {
      alert(gaiji)
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
  text-decoration: none;
  font-size: 25px;
}

.btn-available:hover {
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

.btn-disabled {
  color: #e6e7ed;
  text-decoration: none;
}

</style>

