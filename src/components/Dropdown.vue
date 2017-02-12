<template>
<div :class="[`drop${type}`, (show ? 'show' :  '')]">
  <slot></slot>

  <div class="dropdown-menu" v-if="items.length">
    <slot name="items">
      <div v-for="(item, index) in items" class="dropdown-item" :class="{ active: active === index }"
           v-bind="{ active: active === index, selected: selected.indexOf(item) > -1, item}"
           @click.native.prevent="$emit('select', item)" @click.prevent="$emit('select', item)" :is="component" :key="item">{{ item[itemKey] }}
      </div>
    </slot>
  </div>
  <div class="dropdown-menu" v-else>
    <slot name="empty"></slot>
  </div>
</div>
</template>

<script lang="babel">
export default {
  props: {
    show: {
      type: Boolean,
      required: true
    },

    active: {},

    selected: {
      type: [Array]
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

<style lang="scss">
.dropdown-menu {
  a.dropdown-item {
    cursor: pointer;

    &[selected] {
      font-weight: bolder;
    }
  }
}
</style>
