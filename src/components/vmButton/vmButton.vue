<template lang="html">
  <button
    ref="btn"
    v-bind="$attrs"
    :class="[`vm-button-${isColor()?color:null}`,`vm-button-${type}`,{
      'isActive':isActive,
      'includeIcon':icon,
      'includeIconOnly':icon && !$slots.default,
      'vm-radius':radius
    }, size]"
    :style="[styles,{
      'width':/[px]/.test(size)?`${size}`:null,
      'height':/[px]/.test(size)?`${size}`:null
    }]"
    class="vm-component vm-button"
    name="button"
    v-on="listeners">
    <span
      v-if="!is('line')&&!is('gradient')&&!is('relief')"
      ref="backgroundx"
      :style="stylesBackGround"
      class="vm-button-backgroundx vm-button--background">
    </span>
    <span
      v-if="indicator"
      :style="stylesIndicator"
      class="vm-button--indicator">
    </span>

    <vm-icon
      v-if="icon"
      :style="{
        'order':iconAfter?2:0,
        'margin-right':$slots.default&&!iconAfter?'5px':'0px',
        'margin-left':$slots.default&&iconAfter?'5px':'0px'
      }"
      :icon-pack="iconPack"
      :icon="icon"
      class="vm-button--icon "
    ></vm-icon>

    <span
      v-if="$slots.default"
      class="vm-button-text vm-button--text">
      <slot/>
    </span>

    <span
      ref="linex"
      :style="styleLine"
      class="vm-button-linex"/>

  </button>
</template>

<script>
import _color from '../../utils/color.js'
export default {
  name:'VmButton',
  inheritAttrs:false,
  props:{
    type:{
      default:'filled',
      type:String
    },
    color:{
      default:'primary',
      type:String
    },
    textColor:{
      default:null,
      type:String
    },
    lineOrigin:{
      default:'center',
      type:String
    },
    linePosition:{
      default:'bottom',
      type:String
    },
    gradientDirection:{
      default:'30deg',
      type:String
    },
    gradientColorSecondary:{
      default:'primary',
      type:String
    },
    size:{
      type:String,
      default:null,
    },
    icon:{
      type:String,
      default:null
    },
    iconPack:{
      type:String,
      default:'eva'
    },
    iconAfter:{
      default:false,
      type:Boolean
    },
    radius:{
      default:false,
      type:Boolean
    },
    indicator:{
      default:false,
      type:Boolean
    },
    indicatorColor:{
      default:'danger',
      type:String
    },
    to:{
      default:false,
      type:String | Object
    },
    href:{
      default:'',
      type:String | Object
    },
    target:{
      default:false,
      type:[Boolean, String]
    }
  },
  data:()=>({
    isActive:false,
    hoverx:false,
    leftBackgorund:20,
    topBackgorund:20,
    radio:0,
    time:0.3,
    timeOpacity:0.3,
    opacity:1,
  }),
  computed:{
    listeners() {
      return {
        ...this.$listeners,
        click: (event) => this.clickButton(event),
        blur: (event) => this.blurButton(event),
        mouseover: (event) => this.mouseoverx(event),
        mouseout: (event) => this.mouseoutx(event)
      }
    },
    styles() {
      if(this.is('filled')){
        return {
          color: _color.getColor(this.textColor,1),
          background: _color.getColor(this.color,1),
          boxShadow: this.hoverx?`0px 2px 6px ${_color.getColor(this.color,.3)}, 0px 8px 25px -8px ${_color.getColor(this.color,1)}`:null
        }
      } else if (this.is('default')) {
        return {
          color: _color.getColor(this.color,1),
          background: _color.getColor('#fff',1),
          boxShadow: this.hoverx?`0px 2px 6px ${_color.getColor(this.color,.2)}, 0px 8px 25px -8px ${_color.getColor(this.color,.5)}`:`0px 4px 6px rgba(50,50,93,.11), 0px 1px 3px rgba(0,0,0,.08)`
        }
      } else if (this.is('border') || this.is('flat')){
        return {
          border: `${this.is('flat')?0:1}px solid ${_color.getColor(this.color,1)}`,
          background: this.hoverx?_color.getColor(this.color,.1):'transparent',
          color:_color.getColor(this.textColor,1) || _color.getColor(this.color,1)
        }
      } else if (this.is('line')) {
        return {
          color:_color.getColor(this.textColor,1) || _color.getColor(this.color,1),
          borderBottomWidth: this.linePosition=='bottom'?`2px`:null,
          borderColor: `${_color.getColor(this.color,.2)}`,
          borderTopWidth: this.linePosition=='top'?`2px`:null,
        }
      } else if (this.is('gradient')) {
        let backgroundx = `linear-gradient(${this.gradientDirection}, ${_color.getColor(this.color)} 0%, ${_color.getColor(this.gradientColorSecondary,1)} 100%)`
        return {
          background: backgroundx,
        }
      } else if (this.is('relief')) {
        let color = _color.getColor(this.color,1)
        return {
          background: _color.getColor(this.color,1),
          boxShadow: `0 3px 0 0 ${_color.darken(color,-0.4)}`
        }
      }
    },
    stylesBackGround(){
      let styles = {
        background: this.is('flat') || this.is('border')?_color.getColor(this.color,1,false):null,
        opacity:this.opacity,
        left: `${this.leftBackgorund}px`,
        top: `${this.topBackgorund}px`,
        width: `${this.radio}px`,
        height: `${this.radio}px`,
        transition: `width ${this.time}s ease, height ${this.time}s ease, opacity ${this.timeOpacity}s ease`
      }

      return styles

    },
    stylesIndicator(){
      let styles = {
        background:  `rgba(var(--${this.indicatorColor}), 1)`,
        left: '15px',
        top: '4px',
        width: '10px',
        height: '10px',
        transition: `width ${this.time}s easeOutElastic, height ${this.time}s easeOutElastic, opacity ${this.timeOpacity}s ease`,
        'z-index': 101,
        border:  this.is('filled') || this.is('gradient') || (this.isActive && !this.is('line') && !this.is('default')) ?`1.6px solid rgba(var(--${this.color}), 1)`: '1.6px solid white'
      }

      return styles

    },
    styleLine(){
      let lineOrigin = '50%'
      if(this.lineOrigin == 'left'){
        lineOrigin = '0%'
      } else if (this.lineOrigin == 'right') {
        lineOrigin = 'auto'
      }

      let styles = {
        top: this.linePosition == 'top'?'-2px':'auto',
        bottom: this.linePosition == 'bottom'?'-2px':'auto',
        background: _color.getColor(this.color,1),
        left: lineOrigin,
        right: lineOrigin == 'auto'?'0px':null,
        transform: lineOrigin=='50%'?'translate(-50%)':null
      }

      return styles
    }
  },
  methods:{
    routerPush() {
      this.$router.push(this.to)
    },
    is(which){
      let type = this.type
      return type == which
    },
    mouseoverx(event){
      this.$emit('mouseover',event)
      this.hoverx = true
    },
    mouseoutx(event){
      this.$emit('mouseout',event)
      this.hoverx = false
    },
    blurButton(event){
      this.$emit('blur',event)
      if(this.type == 'border' || this.type == 'flat'){
        this.opacity = 0
        setTimeout( () => {
          this.radio = 0
        }, 150);
        this.isActive = false
      }
    },
    clickButton(event){
      this.$emit('click',event)
      if(this.isActive){
        return
      }
      if(this.to){
        this.routerPush()
      }
      if(this.href){
        this.target ? window.open(this.href) : window.location.href = this.href
      }
      this.isActive = true
      let btn = this.$refs.btn
      let xEvent = event.offsetX
      let yEvent = event.offsetY
      let radio = btn.clientWidth * 3
      this.time  = btn.clientWidth / (btn.clientWidth + (this.is('border') || this.is('flat')?70:20))
      if(this.is('filled') || this.is('default')){
        this.timeOpacity = this.time
      }

      if(event.srcElement?event.srcElement != btn:false) {
        xEvent += event.target.offsetLeft
        yEvent += event.target.offsetTop
      }
      this.leftBackgorund = xEvent
      this.topBackgorund = yEvent
      this.radio = radio
      if(this.is('filled') || this.is('default')){
        this.opacity = 0
      } else {
        this.opacity = 1
      }

      if(this.is('filled') || this.is('default')){
        setTimeout( () => {
          this.time = this.timeOpacity = this.radio = 0
          this.opacity = 1
          this.isActive = false
        }, this.time*1100);
      } else {
        setTimeout( () => {
          this.timeOpacity = .15
        }, this.time*1100);
      }

    },
    isColor(){
      return _color.isColor(this.color)
    },
  }

}
</script>
