<template lang="html">
  <div class="centerx">
    <vm-button @click="active1=!active1" type="filled">{{!active1?'Open Alert':'Close Alert'}}</vm-button>
    <vm-alert :active.sync="active1" closable closeIcon='close'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
    </vm-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active1:true,
    }
  }
}
</script>

<style lang="css">
</style>
