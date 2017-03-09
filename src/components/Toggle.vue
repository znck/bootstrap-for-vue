<template>
    <label class="toggle">
            <input type="checkbox" v-model="currentValue">
            <div class="slider round"></div>
    </label>
</template>

<script>

export default {
  name: 'Toggle',
  props: {
    value: Boolean
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
  }
 }
};
</script>

<style lang="scss" module>

    .toggle {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 20px;
    }

    .toggle input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 0;
        background-color: white;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        transform: translateX(36px);
    }

    .slider.round {
        border-radius: 20px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>