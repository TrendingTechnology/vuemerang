<template lang="html">
  <div class="">
    <vm-slider step=10 v-model="value1"/>
    <vm-slider ticks step=25 v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:60,
      value2:25
    }
  }
}
</script>

<style lang="css">
</style>
