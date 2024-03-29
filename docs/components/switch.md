---
API:
 - name: v-model
   type: boolean || Array
   parameters: true || false || []
   description: Link values.
   default: null
 - name: vm-value
   type: String
   parameters:
   description: Value if different from a boolean.
   default: null
 - name: color
   type: String
   parameters: Default Colors | HEX | RGB
   description: Type of element or color.
   default: primary
 - name: vm-icon
   type: String
   parameters: Eva Icons
   description: Icon within the element.
   default: null
 - name: vm-icon-on
   type: String
   parameters: Eva Icons
   description: Icon that appears when the item is in active state.
   default: null
 - name: vm-icon-off
   type: String
   parameters: Eva Icons
   description: Icon that appears in the inactive state.
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
---
# Switch

<box header>

Simple and functional.

</box>

<box>

## State

To implement a switch element in the application, we add the component `vm-switch`.

<vuecode md>
<div slot="demo">
  <Demos-Switch-State/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">true / active</label>
      <vm-switch v-model="switch1"/>
    </li>
    <li>
      <label for="">false / inactive</label>
      <vm-switch v-model="switch2"/>
    </li>
    <li>
      <label for="">disabled / active</label>
      <vm-switch disabled="true" v-model="switch3"/>
    </li>
    <li>
      <label for="">disabled / inactive</label>
      <vm-switch disabled="true" v-model="switch4"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:false,
      switch3:true,
      switch4:false,
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Color

You can choose the default **Switch**. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Supported colors are **RGB** and **HEX**
:::

<vuecode md>
<div slot="demo">
  <Demos-Switch-Color/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vm-switch v-model="switch1"/>
    </li>
    <li>
      <label for="">Success</label>
      <vm-switch color="success" v-model="switch2"/>
    </li>
    <li>
      <label for="">Danger</label>
      <vm-switch color="danger" v-model="switch3"/>
    </li>
    <li>
      <label for="">Warning</label>
      <vm-switch color="warning" v-model="switch4"/>
    </li>
    <li>
      <label for="">Dark</label>
      <vm-switch color="dark" v-model="switch5"/>
    </li>
    <li class="con-input-color">
      <label for="">Color: <span>{{color}}</span></label>
      <input v-model="color" type="color">
      <vm-switch :color="color" v-model="switch6"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      color:'#5a3cc4',
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
      switch6:true,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Text

You can add a descriptive text with the slot `on` or `off`. You can also join the text with the icons.

<vuecode md>
<div slot="demo">
  <Demos-Switch-Text/>
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centex">
    <vm-switch v-model="switch1">
      <span slot="on">On</span>
      <span slot="off">Off</span>
    </vm-switch>
    <vm-switch color="success" v-model="switch2">
      <span slot="on">Accept</span>
      <span slot="off">Cancel</span>
    </vm-switch>
    <vm-switch color="danger" vm-icon-off="close" v-model="switch3">
      <span slot="on">Remove</span>
    </vm-switch>
    <vm-switch color="warning" vm-icon-on="error_outline" v-model="switch4">
      <span slot="off">Prevent</span>
    </vm-switch>
    <vm-switch color="dark" vm-icon-on="check_box" vm-icon-off="block" v-model="switch5">
      <span slot="on">YES</span>
      <span slot="off">NO</span>
    </vm-switch>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switch1:true,
      switch2:true,
      switch3:true,
      switch4:true,
      switch5:true,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


<box>

## Icons

We can add a representative icon inside our switch with the property `vm-icon`.

If you only need to add the icon in one of the states you can do it with the property `vm-icon-on` or `vm-icon-off`

::: tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <Demos-Switch-Icons/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="con-s">
    <li>
      <label for="">Primary</label>
      <vm-switch v-model="switch1" vm-icon-off="notifications_none" vm-icon-on="done"/>
    </li>
    <li>
      <label for="">Success</label>
      <vm-switch color="success" v-model="switch2" vm-icon="done"/>
    </li>
    <li>
      <label for="">Danger</label>
      <vm-switch color="danger" v-model="switch3" vm-icon="close"/>
    </li>
    <li>
      <label for="">Warning</label>
      <vm-switch color="warning" v-model="switch4" vm-icon="error_outline"/>
    </li>
    <li>
      <label for="">Dark</label>
      <vm-switch color="dark" v-model="switch5" vm-icon="volume_off"/>
    </li>
    <li>
      <label for="">rgb(color) / #color</label>
      <vm-switch color="rgb(51, 53, 83)" v-model="switch6" vm-icon="photo_camera"/>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switch1:false,
      switch2:false,
      switch3:false,
      switch4:false,
      switch5:false,
      switch6:false
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Array Value
<!-- TODO es -->
For saving the values in an array, you could simply pass it as a value.

:::warning
  <!-- TODO es -->
  For using an array as a value, we need to use the `vm-value` property inside the switch component. That is the value that will be added to the array.
:::

<vuecode md>
<div slot="demo">
  <Demos-Switch-Array/>
</div>
<div slot="code">

```html
<template lang="html">
  <ul class="ul">
    <li class="modelx">
      {{switchArray}}
    </li>
    <li>
      <vm-switch vm-type="success" v-model="switchArray" vm-value="luis">Luis</vm-switch>
    </li>
    <li>
      <vm-switch vm-type="success" v-model="switchArray" vm-value="carols">Carols</vm-switch>
    </li>
    <li>
      <vm-switch vm-type="success" v-model="switchArray" vm-value="summer">Summer</vm-switch>
    </li>
    <li>
      <vm-switch vm-type="success" v-model="switchArray" vm-value="lyon">Lyon</vm-switch>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      switchArray:['luis'],
    }
  }
}
</script>

<style lang="css">
.ul {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.modelx {
  padding: 10px;
  margin-left: 10px;
  background: rgb(235, 235, 235);
  border-radius: 5px;
}
</style>
```

</div>
</vuecode>

</box>
