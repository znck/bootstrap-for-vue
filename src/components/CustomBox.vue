<template>
<div class="form-check checkbox" :class="{ 'has-danger': feedback, 'form-check-inline': inline }" :checked="state">
  <label class="indicator">
    <input v-bind="{ type, required, name: nameKey }" class="custom-control-input" :checked="state" @change="onChange">
    <span v-if="title">{{ title || ' ' }}</span>
  </label>
</div>
</template>

<script lang="babel">
import checkbox from '../mixins/checkbox'

export default {
  mixins: [checkbox]
}
</script>

<style lang="scss" module>
$btn-primary-bg: #0275d8 !default;
$btn-primary-border: #0275d8 !default;

$input-border-color: rgba(#000, .15) !default;
$input-padding-x: .75rem !default;
$input-padding-y: .5rem !default;

.checkbox {
  .indicator {
    cursor: pointer;
    border: 1px solid $input-border-color;
    border-radius: 1000px;
    padding: $input-padding-y $input-padding-x + 1rem;
  }

  &[checked] {
    .indicator {
      border-color: $btn-primary-border;
      color: $btn-primary-bg;
    }
  }
}
.custom-control-input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
</style>
