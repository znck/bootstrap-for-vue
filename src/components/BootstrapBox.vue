<template>
  <div class="form-check" :class="{ 'has-danger': feedback, 'form-check-inline': inline }">
    <label class="custom-control" :class="[`custom-${type}`]">
      <input v-bind="{ type, required, name: nameKey }" class="custom-control-input" :checked="state" @change="onChange" hidden>
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description" v-if="title">{{ title }}</span>
    </label>
  </div>
</template>

<script lang="babel">
import checkbox from '../mixins/checkbox'

export default {
  mixins: [checkbox]
}
</script>

<style lang="scss">
span.custom-control-indicator {
  top: 0.2rem;
}
.custom-control-description {
  user-select: none;
}
</style>
