<template lang="html">
  <div class="con-select-example">
    <vm-select
        class="selectExample"
        label="Defautl"
        v-model="select1"
        >
        <div :key="index" v-for="item,index in options1">
          <vm-select-group :title="item.title" v-if="item.group">
            <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vm-select-group>
        </div>
    </vm-select>
    <vm-select
        multiple
        class="selectExample"
        label="Multiple"
        v-model="select2"
        >
        <div :key="index" v-for="item,index in options2">
          <vm-select-group :title="item.title" v-if="item.group">
            <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vm-select-group>
        </div>
    </vm-select>
    <vm-select
        autocomplete
        class="selectExample"
        label="Autocomplete"
        v-model="select3"
        >
        <div :key="index" v-for="item,index in options3">
          <vm-select-group :title="item.title" v-if="item.group">
            <vm-select-item :key="index" :value="item.value" :text="item.text" v-for="item,index in item.group"/>
          </vm-select-group>
        </div>
    </vm-select>
  </div>
</template>

<script>
export default {
  data(){
    return {
      select1:6,
      select2:[6],
      select3:['red'],
      options1:[
        {
          title:'Figures',
          group:[
            {text: 'Romboid', value: 4},
            {text: 'Trapeze', value: 5},
            {text: 'Triangle', value: 6},
            {text: 'Polygon', value: 7},
          ]
        },
        {
          title:'Colors',
          group:[
            {text: 'Red', value: 'red'},
            {text: 'Green', value: 'green'},
            {text: 'Blue', value: 'blue'},
            {text: 'Purple', value: 'purple'},
          ]
        }
      ],
      options2:[
        {
          title:'Figures',
          group:[
            {text: 'Romboid', value: 4},
            {text: 'Trapeze', value: 5},
            {text: 'Triangle', value: 6},
            {text: 'Polygon', value: 7},
          ]
        },
        {
          title:'Colors',
          group:[
            {text: 'Red', value: 'red'},
            {text: 'Green', value: 'green'},
            {text: 'Blue', value: 'blue'},
            {text: 'Purple', value: 'purple'},
          ]
        }
      ],
      options3:[
        {
          title:'Figures',
          group:[
            {text: 'Romboid', value: 4},
            {text: 'Trapeze', value: 5},
            {text: 'Triangle', value: 6},
            {text: 'Polygon', value: 7},
          ]
        },
        {
          title:'Colors',
          group:[
            {text: 'Red', value: 'red'},
            {text: 'Green', value: 'green'},
            {text: 'Blue', value: 'blue'},
            {text: 'Purple', value: 'purple'},
          ]
        }
      ],
    }
  },
  methods:{
    prueba(){
      console.log("prueba de focsu");
    }
  }
}
</script>

<style lang="css">
.selectExample {
  margin: 10px;
}
.con-select-example {
  display: flex;
  align-items: center;
  justify-content: center;
}
.con-select .vm-select {
  width: 100%
}
@media (max-width: 550px) {
  .con-select {
    flex-direction: column;
  }
  .con-select .vm-select {
    width: 100%
  }
}
</style>
