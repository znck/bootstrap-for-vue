<template lang="html">
<label class="form-check switch round"
       :class="{ 'has-danger': feedback, 'form-check-inline': inline }"
       :checked="state">
  <input v-bind="{ type, required, name: name || id, autofocus, autocomplete }"
         class="custom-control-input"
         :checked="state" @change="onChange">
  <span class="slider"></span> {{ title }}
</label>
</template>

<script lang="babel">
import checkbox from '../mixins/checkbox'

export default {
  name: 'InputSwitch',

  mixins: [checkbox]
}
</script>

<style lang="scss" module>
$btn-primary-bg: #0275d8 !default;
$btn-primary-border: #0275d8 !default;
$btn-secondary-bg: #ccc !default;

$input-border-color: rgba(#000, .15) !default;
$input-padding-x: .75rem !default;
$input-padding-y: .5rem !default;

$input-switch-height: 1rem + $input-padding-y;
$input-switch-width: 2.5 * $input-switch-height;
.switch {
  padding: $input-padding-y $input-padding-x;

  .slider {
    cursor: pointer;
    position: relative;
    background-color: $btn-secondary-bg;
    transition: .4s;
    height: $input-switch-height;
    width: $input-switch-width;

    display: inline-block;

    margin-right: $input-padding-x;
    margin-bottom: - $input-padding-y / 1.95;

    &:before {
      position: absolute;
      content: '';
      height: $input-switch-height * .9;
      width: $input-switch-height * .9;
      background-color: white;
      left: $input-switch-height * .05;
      top: $input-switch-height * .05;
      margin: 0 1px;

      transition: .4s;
    }
  }

  &[checked] {
    .slider {
      background-color: $btn-primary-bg;
      &:before {
        transform: translateX($input-switch-width - $input-switch-height -  $input-switch-height * .05);
      }
    }
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $btn-primary-border;
  }

  &.round {
    .slider {
      border-radius: $input-switch-height / 2;

      &:before {
        border-radius: 50%;
      }
    }
  }
}

.custom-control-input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
</style>