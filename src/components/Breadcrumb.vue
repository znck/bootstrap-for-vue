<template>
<nav class="breadcrumb">
  <div :is="component" v-for="crumb in crumbs"
       class="breadcrumb-item" :to="crumb.link"
       active-class="active">{{ crumb.title }}
  </div>
</nav>
</template>

<script lang="babel">
import inherit from '../mixins/inheritComponents'

export default {
  props: {
    links: {
      type: Array,
      required: true
    },

    component: {
      type: String,
      default: 'router-link'
    }
  },

  computed: {
    crumbs () {
      const links = this.links

      return links.map(link => (typeof (link) === 'string' ? { link, title: link } : link))
    }
  },

  mixins: [inherit]
}
</script>
