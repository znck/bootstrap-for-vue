<template>
  <nav class="breadcrumb">
    <div :is="component" v-for="crumb in crumbs"
      class="breadcrumb-item" :to="crumb.link"
      active-class="active">{{ crumb.title }}</div>
  </anv>
</template>

<script>
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

      if (typeof (links[0]) === 'string') {
        return links.map(link => ({ link, title: link }))
      }

      return links
    }
  }
}
</script>
