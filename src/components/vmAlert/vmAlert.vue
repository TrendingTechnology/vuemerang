<template lang="html">
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave">
    <div
      v-if="active"
      ref="alert"
      v-bind="$attrs"
      :class="[`con-vm-alert-${color}`,{
        'con-icon':icon,
      }]"
      :style="styleAlert"
      class="con-vm-alert"
      v-on="$listeners">
      <div
        v-if="closable"
        class="con-x vm-alert--close"
        @click="$emit('update:active',false)">
        <vm-icon 
          :icon-pack="iconPack" 
          :icon="closeIcon"></vm-icon>
      </div>

      <h4
        v-if="title"
        :style="styleTitle"
        class="titlex vm-alert--title">{{ title }}</h4>

      <div class="vm-alert">
        <vm-icon
          v-if="icon"
          :icon-pack="iconPack"
          :icon="icon"
          class="icon-alert"
        ></vm-icon>
        <slot/>
      </div>
    </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'

export default {
  name:'VmAlert',
  props:{
    active:{
      type:[Boolean,String],
      default:false
    },
    title:{
      type:String,
      default:null
    },
    closable:{
      type:Boolean,
      default:false
    },
    color:{
      type:String,
      default:'primary'
    },
    margin:{
      type:[String,Boolean],
      default:'10px'
    },
    icon:{
      type:String,
      default:null
    },
    closeIcon:{
      type:String,
      default:'close'
    },
    iconPack:{
      type:String,
      default:'eva'
    }
  },
  computed:{
    styleAlert () {
      return {
        background: _color.getColor(this.color,.15),
        boxShadow: `0px 0px 25px 0px ${_color.getColor(this.color,.15)}`,
        color: _color.getColor(this.color,1)
      }
    },
    styleTitle () {
      return {
        boxShadow: `0px 6px 15px -7px ${_color.getColor(this.color,.4)}`
      }
    }
  },
  methods:{
    beforeEnter(el) {
      el.style.height = 0
      el.style.opacity = 0
    },
    enter(el, done){
      let h = this.$refs.alert.scrollHeight
      this.$refs.alert.style.height = h + 'px'
      el.style.opacity = 1
      done()
    },
    leave: function (el) {
      this.$refs.alert.style.height = 0 + 'px'
      el.style.opacity = 0
    }
  }
}
</script>
