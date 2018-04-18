<template lang="pug">
  v-layout(row)
    v-flex(xs8)
      .col-xs-6.col-lg-6.col-md-6.col-sm-6
        ProductZoomer(:base-images="images" :base-zoomer-options="zoomerOptions")
      //- .col-xs-8.col-lg-8.col-md-8.col-sm-8
    v-flex(xs4)
      h3 入力項目
        v-layout(row)
          v-flex(xs8)
            v-text-field(label="項目１")
          v-flex(xs4)
            Dialog
        v-text-field(label="項目２")
        v-text-field(label="項目３")
        v-text-field(label="項目４")
</template>

<script>
import ProductZoomer from 'vue-product-zoomer'
import Dialog from './Dialog'
export default {
  components: {
    ProductZoomer,
    Dialog
  },
  data () {
    return {
      'images': {
        'thumbs': [
          {
            'id': 1,
            'url': 'https://amd.c.yimg.jp/im_sigg8OyVlbrUvy.y0fI5PAXW2g---x385-y400-q90-exp3h-pril/amd/20180208-00010001-bfj-002-3-view.jpg'
          },
          {
            'id': 2,
            'url': 'https://amd.c.yimg.jp/im_sigg8OyVlbrUvy.y0fI5PAXW2g---x385-y400-q90-exp3h-pril/amd/20180208-00010001-bfj-002-3-view.jpg'
          },
          {
            'id': 3,
            'url': 'https://amd.c.yimg.jp/im_sigg8OyVlbrUvy.y0fI5PAXW2g---x385-y400-q90-exp3h-pril/amd/20180208-00010001-bfj-002-3-view.jpg'
          },
          {
            'id': 4,
            'url': 'https://amd.c.yimg.jp/im_sigg8OyVlbrUvy.y0fI5PAXW2g---x385-y400-q90-exp3h-pril/amd/20180208-00010001-bfj-002-3-view.jpg'
          }
        ],
        'normal_size': [
          {
            'id': 1,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          },
          {
            'id': 2,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          },
          {
            'id': 3,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          },
          {
            'id': 4,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          }
        ],
        'large_size': [
          {
            'id': 1,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          },
          {
            'id': 2,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          },
          {
            'id': 3,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          },
          {
            'id': 4,
            'url': 'http://www.dousan.com/images/product/01-426.jpg'
          }
        ]
      },
      'zoomerOptions': {
        'zoomFactor': 5,
        'pane': 'pane',
        'hoverDelay': 150,
        'namespace': 'zoomer',
        'move_by_click': false
      }
    }
  }
}
</script>

