<template>
<div :class="[`drop${type}`, (show ? 'show' :  '')]">
  <slot></slot>

  <div class="dropdown-menu" v-if="items.length">
    <slot name="items">
      <div v-for="item in items" class="dropdown-item"
           @click.prevent="$emit('select', item)" :is="component"
           :item="item" :key="item">{{ item[itemKey] }}
      </div>
    </slot>
  </div>
  <div class="dropdown-menu" v-else>
    <slot name="empty"></slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },

    type: {
      validator (type) {
        return ['up', 'down'].indexOf(type) > -1
      },
      default: 'down'
    },

    items: {
      type: Array,
      required: true
    },

    itemKey: {
      type: String,
      default: 'name'
    },

    component: {
      type: String,
      default: 'a'
    }
  }
}

</script>

<style lang="scss" module>
.dropdown-menu {
  a.dropdown-item {
    cursor: pointer;
  }
}
</style>
