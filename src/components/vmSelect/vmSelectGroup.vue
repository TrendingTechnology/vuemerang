<template>
  <div class="vm-select-group">
    <h4 v-if="!filterx">{{ title }}</h4>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'VmSelectGroup',
  props:{
    title:{
      default: 'Group',
      type: String
    }
  },
  data: () => ({
    activeTitle: true
  }),
  computed:{
    filterx() {
      return this.$parent.filterx
    },
    parent(){
      return this.$parent
    }
  },
  methods:{
    focusValue(index) {
      this.$children[0].focusValue(index)
    }
  }
}
</script>
