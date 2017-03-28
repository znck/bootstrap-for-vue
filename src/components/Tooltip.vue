<script lang="babel">
export default {
  name: 'Tooltip',

  render () {
    throw new Error('Use v-tooltip')
  }
}
</script>

<style lang="scss">
$white: #fff !default;
$black: #000 !default;

$border-radius: .25rem !default;

$zindex-tooltip: 1070 !default;

$tooltip-max-width: 200px !default;
$tooltip-color: $white !default;
$tooltip-bg: $black !default;
$tooltip-opacity: .9 !default;
$tooltip-padding-y: 3px !default;
$tooltip-padding-x: 8px !default;
$tooltip-margin: 3px !default;

$tooltip-arrow-width: 5px !default;
$tooltip-arrow-color: $tooltip-bg !default;

$enable-rounded: true !default;

@mixin border-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-radius: $radius;
  }
}

$tooltip-side-offset: 3;
/* Content */
[data-tooltip] {
  position: relative;
}

/* Arrow */
[data-tooltip]:before {
  pointer-events: none;
  position: absolute;
  content: '';
  font-size: 1rem;
  width: $tooltip-arrow-width;
  height: $tooltip-arrow-width;

  background: $tooltip-bg;
  transform: rotate(45deg);

  z-index: $zindex-tooltip;

}

/* Popup */
[data-tooltip]:after {
  pointer-events: none;
  content: attr(data-tooltip);
  position: absolute;
  text-transform: none;
  text-align: left;
  white-space: nowrap;

  font-size: 1rem;

  border: none;
  line-height: 1.5;
  max-width: $tooltip-max-width;
  background: $tooltip-bg;

  padding: $tooltip-padding-y $tooltip-padding-x;
  color: $tooltip-color;

  @include border-radius($border-radius);
  z-index: $zindex-tooltip;
}

/* Animation */
[data-tooltip] {
  &:before, &:after {
    pointer-events: none;
    visibility: hidden;

    opacity: 1;
    transition: all 0.1s ease;
  }

  &:hover {
    &:before, &:after {
      visibility: visible;
      pointer-events: auto;
    }
  }
}

/* Animation Position */
[data-tooltip][data-position="top center"] {
  &:before {
    transform: rotate(45deg) translateX(-50%) scale(0) !important;
  }
  &:after {
    transform: translateX(-50%) scale(0) !important;
  }

  &:hover {
    &:before {
      transform: rotate(45deg) translateX(-50%) scale(1) !important;
    }
    &:after {
      transform: translateX(-50%) scale(1) !important;
    }
  }
}

[data-tooltip][data-position="bottom center"] {
  &:before {
    transform: rotate(-45deg) translateX(-50%) scale(0) !important;
  }
  &:after {
    transform: translateX(-50%) scale(0) !important;
  }

  &:hover {
    &:before {
      transform: rotate(-45deg) translateX(-50%) scale(1) !important;
    }
    &:after {
      transform: translateX(-50%) scale(1) !important;
    }
  }
}

[data-tooltip][data-position="left center"] {
  &:before {
    transform: rotate(-45deg) translateY(-50%) scale(0) !important;
  }
  &:after {
    transform: translateY(-50%) scale(0) !important;
  }

  &:hover {
    &:before {
      transform: rotate(-45deg) translateY(-50%) scale(1) !important;
    }
    &:after {
      transform: translateY(-50%) scale(1) !important;
    }
  }
}

[data-tooltip][data-position="right center"] {
  &:before {
    transform: rotate(45deg) translateY(-50%) scale(0) !important;
  }
  &:after {
    transform: translateY(-50%) scale(0) !important;
  }

  &:hover {
    &:before {
      transform: rotate(45deg) translateY(-50%) scale(1) !important;
    }
    &:after {
      transform: translateY(-50%) scale(1) !important;
    }
  }
}

[data-tooltip][data-position="top left"],
[data-tooltip][data-position="bottom right"],
[data-tooltip][data-position="left bottom"],
[data-tooltip][data-position="right top"] {
  &:before {
    transform: rotate(-45deg) scale(0) !important;
  }
  &:after {
    transform: scale(0) !important;
  }

  &:hover {
    &:before {
      transform: rotate(-45deg) scale(1) !important;
    }
    &:after {
      transform: scale(1) !important;
    }
  }
}

[data-tooltip][data-position="top right"],
[data-tooltip][data-position="bottom left"],
[data-tooltip][data-position="left top"],
[data-tooltip][data-position="right bottom"] {
  &:before {
    transform: rotate(45deg) scale(0) !important;
  }
  &:after {
    transform: scale(0) !important;
  }

  &:hover {
    &:before {
      transform: rotate(45deg) scale(1) !important;
    }
    &:after {
      transform: scale(1) !important;
    }
  }
}

/*-------
Transform
---------*/

[data-position="top center"][data-tooltip] {
  &:before, &:after {
    transform-origin: bottom center;
  }
}

[data-position="top left"][data-tooltip] {
  &:before, &:after {
    transform-origin: bottom left;
  }
}

[data-position="top right"][data-tooltip] {
  &:before, &:after {
    transform-origin: bottom right;
  }
}

[data-position="bottom center"][data-tooltip] {
  &:before, &:after {
    transform-origin: center top;
  }
}

[data-position="bottom left"][data-tooltip] {
  &:before, &:after {
    transform-origin: left top;
  }
}

[data-position="bottom right"][data-tooltip] {
  &:before, &:after {
    transform-origin: right top;
  }
}

[data-position="left center"][data-tooltip] {
  &:after, &:before {
    transform-origin: right center;
  }
}

[data-position="left top"][data-tooltip] {
  &:after, &:before {
    transform-origin: right top;
  }
}

[data-position="left bottom"][data-tooltip] {
  &:after, &:before {
    transform-origin: right bottom;
  }
}

[data-position="right center"][data-tooltip] {
  &:before, &:after {
    transform-origin: left center;
  }
}

[data-position="right top"][data-tooltip] {
  &:before, &:after {
    transform-origin: left top;
  }
}

[data-position="right bottom"][data-tooltip] {
  &:before, &:after {
    transform-origin: left bottom;
  }
}

/*--------------
    Position
---------------*/

/* Top */
[data-position="top center"][data-tooltip] {
  &:after {
    top: auto;
    right: auto;
    left: 50%;
    bottom: 100%;
    margin-bottom: $tooltip-margin;
  }

  &:before {
    top: auto;
    right: auto;
    bottom: 100%;
    left: 50%;
  }
}

[data-position="top left"][data-tooltip] {
  &:after {
    top: auto;
    right: auto;
    left: 0;
    bottom: 100%;
    margin-bottom: $tooltip-margin;
  }

  &:before {
    top: auto;
    right: auto;
    bottom: 100%;
    left: $tooltip-margin * $tooltip-side-offset;
  }
}

[data-position="top right"][data-tooltip] {
  &:after {
    top: auto;
    left: auto;
    right: 0;
    bottom: 100%;
    margin-bottom: $tooltip-margin;
  }

  &:before {
    top: auto;
    left: auto;
    bottom: 100%;
    right: $tooltip-margin * $tooltip-side-offset;
  }
}

/* Bottom */
[data-position="bottom center"][data-tooltip] {
  &:after {
    bottom: auto;
    right: auto;
    left: 50%;
    top: 100%;
    margin-top: $tooltip-margin;
  }

  &:before {
    bottom: auto;
    right: auto;
    top: 100%;
    left: 50%;
  }
}

/* Bottom Left */
[data-position="bottom left"][data-tooltip] {
  &:after {
    left: 0;
    top: 100%;
    margin-top: $tooltip-margin;
  }

  &:before {
    bottom: auto;
    right: auto;
    top: 100%;
    left: $tooltip-margin * $tooltip-side-offset;
  }
}

/* Bottom Right */
[data-position="bottom right"][data-tooltip] {
  &:after {
    right: 0;
    top: 100%;
    margin-top: $tooltip-margin;
  }

  &:before {
    bottom: auto;
    left: auto;
    top: 100%;
    right: $tooltip-margin * $tooltip-side-offset;
  }
}

/* Left Center */
[data-position="left center"][data-tooltip] {
  &:after {
    right: 100%;
    top: 50%;
    margin-right: $tooltip-margin;
  }

  &:before {
    right: 100%;
    top: 50%;
    margin-top: -$tooltip-arrow-width/2;
  }
}

/* Left Top */
[data-position="left top"][data-tooltip]:after {
  top: 0;
  right: 100%;
  left: auto;
  bottom: auto;
  margin-right: $tooltip-margin;
}

[data-position="left top"][data-tooltip]:before {
  right: 100%;
  top: 0;
  margin-top: $tooltip-margin * $tooltip-side-offset;
}

/* Left Bottom */
[data-position="left bottom"][data-tooltip]:after {
  top: auto;
  right: 100%;
  left: auto;
  bottom: 0;
  margin-right: $tooltip-margin;
}

[data-position="left bottom"][data-tooltip]:before {
  right: 100%;
  bottom: 0;
  margin-bottom: $tooltip-margin * $tooltip-side-offset;
}

/* Right Center */
[data-position="right center"][data-tooltip]:after {
  left: 100%;
  top: 50%;
  margin-left: $tooltip-margin;
}

[data-position="right center"][data-tooltip]:before {
  left: 100%;
  top: 50%;
  margin-top: -$tooltip-arrow-width/2;
}

[data-position="right top"][data-tooltip]:after {
  top: 0;
  right: auto;
  left: 100%;
  bottom: auto;
  margin-left: $tooltip-margin;
}

[data-position="right top"][data-tooltip]:before {
  left: 100%;
  top: 0;
  margin-top: $tooltip-margin * $tooltip-side-offset;
}

[data-position="right bottom"][data-tooltip]:after {
  top: auto;
  right: auto;
  left: 100%;
  bottom: 0;
  margin-left: $tooltip-margin;
}

[data-position="right bottom"][data-tooltip]:before {
  left: 100%;
  bottom: 0;
  margin-bottom: $tooltip-margin * $tooltip-side-offset;
}
</style>
