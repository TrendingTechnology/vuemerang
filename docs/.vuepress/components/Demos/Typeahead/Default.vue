<template lang="html">
  <div class="con-typeahead-example">
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      optional
      url="https://api.github.com/search/users?"
      :data.sync="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      >
      <template slot-scope="{data}">
        <vm-typeahead-item  is="vm-typeahead-item" v-bind:key="index" v-bind:value="item.id" v-bind:text="item.text" v-for="item,index in data">
        </vm-typeahead-item>
      </template>
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users?"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="point"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users?"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="radius"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users?"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="sound"
      >
    </vm-typeahead>
    <vm-typeahead
      class="typeaheadExample"
      label="Github Users"
      placeholder="Select a User"
      url="https://api.github.com/search/users?"
      :data="users"
      :serializer="item => item.login"
      :filter="query => `q=${query}`"
      @input-change="query"
      v-model="selectedUser"
      loadingType="material"
      >
    </vm-typeahead>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      selectedUser: {},
      users: []
    }
  },
  methods: {
    query (newQuery, url) {
      axios.get(`${url}${newQuery}`)
        .then((res) => {
          this.users = res.data.items
        })
        .catch(error => {
          this.users = []
        })
    }
  }
}
</script>

<style lang="css">
.box {
  overflow: inherit !important;
}
.typeaheadExample {
  margin-bottom: 10px;
}
</style>
