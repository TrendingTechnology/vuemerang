<template lang="html">
  <div
    :class="[`vm-progress-${color}`,{
      'indeterminate':indeterminate,
    }]"
    :style="styleConProgress"
    class="vm-progress--background">
    <div
      :style="styleProgress"
      class="vm-progress--foreground"/>
    <div
      v-if="indeterminate"
      :style="styleProgress"
      class="vm-progress--indeterminate"/>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmProgress',
  props:{
    height:{
      type:[Number,String],
      default:5
    },
    indeterminate:{
      type:Boolean,
      default:false,
    },
    percent:{
      type:Number,
      default:0
    },
    color:{
      type:String,
      default:'primary'
    }
  },
  data () {
    return {
      percentx: 0
    }
  },
  computed: {
    styleConProgress () {
      return {
        background: _color.getColor(this.color,.1),
        height: `${this.height}px`
      }
    },
    styleProgress () {
      return {
        background: _color.getColor(this.color),
        width: `${this.percentx}%`
      }
    }
  },
  watch:{
    percent(){
      this.percentx = this.percent
    }
  },
  created () {
    this.percentx = 0
  },
  mounted () {
    setTimeout(() => {
      this.percentx = this.percent // to force animation
    }, 600)
  },
}
</script>
