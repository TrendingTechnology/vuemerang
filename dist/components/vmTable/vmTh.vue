<template>
  <th 
    class="col-0 col" 
    colspan="1" 
    rowspan="1">
    <div class="vm-table-text">
      <span 
        v-if="sortKey" 
        class="sort-th">
        <i 
          class="eva eva-chevron-up" 
          @click="sortValue(false)">
        </i>
        <i 
          class="eva eva-chevron-down" 
          @click="sortValue(true)">
        </i>
      </span>
      <slot></slot>
    </div>
  </th>
</template>
<script>
export default {
  name: 'VmTh',
  props:{
    sortKey:{
      default:null,
      type: String
    }
  },
  data: () => ({
    thIndex:0,
    thwidth: '100%',
    sortActive: false
  }),
  computed: {
    styleth () {
      return {
        width: this.thwidth
      }
    }
  },
  methods:{
    sortValue (direction) {
      this.$parent.sort(this.sortKey, direction)
      this.sortActive = direction
    }
  }

}
</script>
