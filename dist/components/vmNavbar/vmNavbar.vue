<template lang="html">
  <header
    :style="[styleNavbar]"
    :class="[`vm-navbar-${type}`]"
    class="vm-navbar">
    <slot>
    </slot>
  </header>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmNavbar',
  props:{
    value:{},
    type:{
      default: null,
      type: String
    },
    color:{
      type:String,
      default:'transparent',
    },
    activeTextColor: {
      type:String,
      default:'primary',
    },
    textColor: {
      type:String,
      default:'rgb(40,40,40)',
    }
  },
  computed:{
    styleNavbar () {
      if(_color.isColor(this.color)) {
        return {
          background: `rgb(${_color.changeColor(this.color)})`
        }
      }
      return {
        background: _color.getColor(this.color)
      }
    }
  },
  methods: {
    changeIndex (index) {
      this.$emit('input', index)
    }
  }
}
</script>
