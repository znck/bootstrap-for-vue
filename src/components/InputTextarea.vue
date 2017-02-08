<template>
  <div class="form-group" :class="{ 'has-danger': feedback }">
      <label v-if="title" :for="id" class="form-control-label">
        <slot>{{ title }}</slot>
      </label>
      <textarea :id="id" type="text" class="form-control" :class="[ resizeableClass ]"
                @input="$emit('input', $event.target.value)"
                v-bind="{ value, required, autofocus, placeholder, autocomplete, rows, cols }"></textarea>
      <div v-if="feedback" class="form-control-feedback">{{ feedback }}</div>
      <small v-if="subtitle" class="form-text text-muted">
        <slot name="subtitle">{{ subtitle }}</slot>
      </small>
  </div>
</template>

<script lang="babel">
import inputHelper from '../mixins/inputHelper'

export default {
  name: 'InputTextarea',

  props: {
    resizeable: {
      type: [String, Boolean],
      default: 'none'
    },
    rows: {
      type: Number,
      default: 5
    },
    cols: {
      type: Number,
      default: null
    }
  },

  computed: {
    resizableClass () {
      const resize = this.resizable

      if (resize === true) return 'resizable'
      if (resize === false) return 'resizable-none'
      if (!resize) return ''
      return `resizable-${resize}`
    }
  },

  mixins: [inputHelper]
}
</script>

<style lang="scss">
textarea.resizable {
  resize: both;
}
textarea.resizable-none {
  resize: none;
}
textarea.resizable-col {
  resize: horizontal;
}
textarea.resizable-row {
  resize: vertical;
}
</style>
