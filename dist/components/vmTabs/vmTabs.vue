<template lang="html">
  <div
    :class="[`vm-tabs-${color}`,`vm-tabs-position-${vmPosition}`]"
    class="con-vm-tabs vm-tabs" >
    <div
      :style="styleTabs"
      class="con-ul-tabs">
      <ul
        ref="ul"
        :class="[`ul-tabs-${vmAlignment}`]"
        class="ul-tabs vm-tabs--ul">
        <li
          v-for="(child,index) in children"
          ref="li"
          :class="{'activeChild':childActive == index}"
          class="vm-tabs--li"
          @mouseover="hover = true"
          @mouseout="hover = false">
          <button
            v-bind="child.attrs"
            :style="styleAlignIcon(child.icon)"
            type="button"
            @click="activeChild(index)"
            v-on="child.listeners">
            <vm-icon
              v-if="child.icon"
              :icon="child.icon"
              :color="color"
              style="padding-right:9px"></vm-icon>
            <span>{{ child.label }}</span>
          </button>
        </li>
      </ul>
      <span
        :style="stylex"
        class="line-vm-tabs"/>
    </div>
    <div class="con-slot-tabs">
      <slot/>
    </div>
  </div>
</template>

<script>
import _color from '../../utils/color.js'
import vmIcon from '../vmIcon/vmIcon.vue'
export default {
  name:'VmTabs',
  components:{vmIcon},
  props:{
    value: {
      default: 0,
      type: [Number, String],
    },
    color:{
      default:'primary',
      type: String
    },
    vmAlignment:{
      default:'left',
      type:String,
    },
    vmPosition:{
      default:'top',
      type:String
    }
  },
  data:()=>({
    topx:'auto',
    heightx:2,
    hover:false,
    children:[],
    childActive:0,
    leftx:0,
    widthx:0,
    these:false,
  }),
  computed:{
    styleTabs(){
      return {
        color: _color.getColor(this.color,1),
      }
    },
    stylex(){
      return {
        top: `${this.topx}px`,
        left: `${this.leftx}px`,
        width: `${this.widthx}px`,
        height: `${this.heightx}px`,
        background: `linear-gradient(30deg, ${_color.getColor(this.color,1)} 0%, ${_color.getColor(this.color,.5)} 100%)`,
        boxShadow: `0px 0px 8px 0px ${_color.getColor(this.color,.5)}`,
        transform: `scaleX(${this.these?1.3:1})`
      }
    }
  },
  watch: {
    value(index) {
      const activeIndex = this.parseIndex(index)
      this.activeChild(activeIndex)
    },
  },
  mounted(){
    const activeIndex = this.parseIndex(this.value)
    this.childActive = activeIndex
    this.$nextTick(() => {
      this.activeChild(activeIndex, true)
    })
  },
  methods:{
    styleAlignIcon(icon){
      return icon ? 'display:flex;align-items:center' : ''
    },
    parseIndex(index) {
      let activeIndex = this.childActive
      if (index < 0) {
        activeIndex = 0
      } else if (index >= this.$children.length) {
        activeIndex = this.$children.length - 1;
      } else if (typeof this.$children[index].$attrs.disabled === 'undefined') {
        activeIndex = parseInt(index);
      }
      return activeIndex;
    },
    activeChild(index, initialAnimation){
      initialAnimation = !!initialAnimation;
      const elem = this.$refs.li[index]
      if(this.childActive == index && !initialAnimation){
        this.these = true
        elem.classList.add('isActive')
        setTimeout(()=>{
          elem.classList.remove('isActive')
          this.these = false
        }, 200);
      }

      this.$children.map((item,item_index)=>{
        if(item_index != index) {
          item.active = false
        }
      })

      if(this.childActive > index){
        this.$children[index].invert = true
        this.$children[this.childActive].invert = false
      } else {
        this.$children[this.childActive].invert = true
        this.$children[index].invert = false
      }

      this.$children[index].active = true
      this.childActive = index
      this.$emit('input', this.childActive)

      if(this.vmPosition == 'left' || this.vmPosition == 'right'){
        this.$children[index].vertical = true
      }

      this.changePositionLine(elem, initialAnimation)

    },
    changePositionLine(elem, initialAnimation){
      if(this.vmPosition == 'left' || this.vmPosition == 'right'){
        this.topx = elem.offsetTop
        this.heightx = elem.offsetHeight
        this.widthx = 2
      } else {
        const update = () => {
          this.leftx = elem.offsetLeft
          this.widthx = elem.offsetWidth
        }
        if (!initialAnimation) {
          update()
        } else {
          setTimeout(update, 100)
        }
      }
    }
  }
}
</script>
