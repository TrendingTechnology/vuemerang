<template lang="html">
  <transition name="popup-t">
    <div
      v-show="active"
      ref="con"
      :class="[`vm-popup-${color}`,{'fullscreen':fullscreen}]"
      class="vm-component con-vm-popup"
      @click="close($event,true)">
      <div
        :style="styleCon"
        class="vm-popup--background"/>
      <div
        ref="popupx"
        :style="stylePopup"
        class="vm-popup">

        <!-- //header -->
        <header
          :style="styleHeader"
          class="vm-popup--header">
          <div class="vm-popup--title">
            <h3>{{ title }}</h3>
          </div>
          <vm-icon
            v-if="!buttonCloseHidden"
            ref="btnclose"
            :icon-pack="iconPack"
            :icon="iconClose"
            :style="stylePopup"
            class="vm-popup--close vm-popup--close--icon"
            @click="close"
          />
        </header>

        <!-- // slots  -->
        <div
          :style="styleContent"
          :class="classContent"
          class="vm-popup--content">
          <slot/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmPopup',
  props:{
    color:{
      default:'primary',
      type:String
    },
    active: {
      default:false,
      type: Boolean
    },
    title:{
      default:'popup',
      type:String
    },
    buttonCloseHidden:{
      default:false,
      type:Boolean
    },
    fullscreen:{
      default:false,
      type:Boolean
    },
    backgroundColor:{
      default:null,
      type:String
    },
    backgroundColorPopup:{
      default:'rgb(255,255,255)',
      type:String
    },
    styleContent:{
      default:null,
      type: String
    },
    classContent:{
      default:null,
      type: String
    },
    iconPack:{
      default:'eva',
      type:String
    },
    iconClose:{
      default:'close',
      type:String
    },
  },
  computed:{
    styleHeader(){
      return {
        color: _color.getColor(this.color,1),
      }
    },
    styleAfter(){
      return {
        background: _color.getColor(this.color,1)
      }
    },
    styleCon(){
      return {
        background: _color.getColor(this.backgroundColor,1)
      }
    },
    stylePopup(){
      return {
        background: _color.getColor(this.backgroundColorPopup,1)
      }
    }
  },
  mounted(){
    this.insertBody()
  },
  methods:{
    giveColor(color){
      return _color.rColor(color)
    },
    close(event,con){
      if(con){
        if(event.target.className.indexOf('vm-popup--background')!=-1){
          this.$emit('update:active',false)
          this.$emit('close', false)
        } else if(event.toElement == this.$refs.btnclose.$el){
          this.$emit('update:active',false)
          this.$emit('close', false)
        }
      }
    },
    insertBody(){
      let elx = this.$refs.con
      document.body.insertBefore(elx, document.body.firstChild)
    },
  }
}
</script>
