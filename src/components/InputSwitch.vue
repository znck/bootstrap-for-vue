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

<script lang="babel" module>
import checkbox from '../mixins/checkbox'

export default {
  name: 'InputSwitch',

  mixins: [checkbox]
}
</script>

<style lang="scss">
$btn-primary-bg: #0275d8 !default;
$btn-secondary-bg: #eee !default;

$input-padding-x: .75rem !default;
$input-padding-y: .5rem !default;

$input-switch-button: white !default;
$input-switch-bg-active: $btn-primary-bg !default;
$input-switch-bg: $btn-secondary-bg !default;

$input-switch-height: 1rem !default;
$input-switch-width: 2.5 * $input-switch-height;
$circle: $input-switch-height * 1.25;

.switch {
  .slider {
    cursor: pointer;
    position: relative;

    outline: none;
    user-select: none;
    padding: 2px;
    margin-bottom: -2px;

    height: $input-switch-height;
    width: $input-switch-width;

    background: $input-switch-bg;
    transition: backgound 0.4s;

    display: inline-block;

    &:after {
      display: block;
      position: absolute;
      content: '';

      height: $circle;
      width: $circle;

      background: $input-switch-button;

      top: 0;
      left: 0;
      bottom: 0;
      margin: auto 0;

      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      transition: background 0.4s, left 0.4s, height 0.2s, width 0.2s;
    }
  }

  &[checked] {
    .slider {
      box-shadow: inset 0 0 0 $input-switch-height lighten($input-switch-bg-active, 25%);
      // background: lighten($input-switch-bg-active, 50%);

      &:after {
        left: calc(100% - #{$circle});
        background: $input-switch-bg-active;
      }
    }
  }

  &:active {
    .slider:after {
      height: $circle / 1.1;
      width: $circle * 1.2;
    }
  }

  &.round {
    .slider {
      border-radius: $input-switch-height / 2;

      &:after {
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