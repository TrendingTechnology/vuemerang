---
API:
 - name: active
   type: Boolean
   parameters: true, false
   description: Determines if the component is visible.
   default: false
 - name: title
   type: String
   parameters: null
   description: Title of the alert
   default: null
 - name: closable
   type: Boolean
   parameters: null
   description: Determines if the alert can be closed by the user
   default: false
 - name: color
   type: String
   parameters: primary, success, danger, warning, dark, RGB, HEX
   description: Color of the alert
   default: false
 - name: icon
   type: String
   parameters: null
   description: Determines the alert icon
   default: null
 - name: close-icon
   type: String
   parameters: null
   description: Determines the close icon
   default: close
 - name: icon-pack
   type: String
   parameters: null
   description: Determines the icon pack. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
---

# Alert

<box header>

  Notifications to the user at execution time with good animation and functionality

</box>


<box>

## Default

To add a notification use the `vm-alert` component. For the main parameter, pass the `active` property that determines if the alert is visible or not.

<vuecode md>
<div slot="demo">
<vm-alert active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
</div>
<div slot="code">

```html
<vm-alert active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
```

</div>
</vuecode>
</box>

<box>

## Title

Add a title to the alert with the property `title`.

<vuecode md>
<div slot="demo">
<vm-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
</div>
<div slot="code">

```html
<vm-alert title="Lorem ipsum dolor sit amet" color="rgb(231, 154, 23)" active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the alert with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
<vm-alert  title="Primary" active="true" color="primary">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
</vm-alert>
<vm-alert style="margin-top: 10px" title="Success" active="true" color="success">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
<vm-alert style="margin-top: 10px" title="Danger" active="true" color="danger">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</vm-alert>
<vm-alert style="margin-top: 10px" title="Danger" active="true" color="warning">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</vm-alert>
<vm-alert style="margin-top: 10px" title="Dark" active="true" color="dark">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
<vm-alert style="margin-top: 10px" title="RGB" active="true" color="rgb(41, 147, 138)">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
<vm-alert style="margin-top: 10px" title="HEX" active="true" color="#842993">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
</div>
<div slot="code">

```html
<vm-alert
  color="primary"
  title="Primary" active="true">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
</vm-alert>
<vm-alert title="Success" active="true" color="success">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
<vm-alert title="Danger" active="true" color="danger">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</vm-alert>
<vm-alert title="Danger" active="true" color="warning">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</vm-alert>
<vm-alert title="Dark" active="true" color="dark">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
<vm-alert title="RGB" active="true" color="rgb(41, 147, 138)">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
<vm-alert title="HEX" active="true" color="#842993">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
</vm-alert>
```

</div>
</vuecode>
</box>

<box>

## Closable

You can show and hide the alert by means of `active.sync` and a Boolean bind as value.

The property to determine if the alert can be closed is `closable`.

<vuecode md>
<div slot="demo">
  <Demos-Alert-Closable />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="active1=!active1" color="primary" type="filled">{{!active1?'Open Alert':'Close Alert'}}</vm-button>
    <vm-alert
    :active.sync="active1"
    closable
    close-icon="close">
      Lorem ip
      sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
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
```


</div>
</vuecode>

<br/>

You can also change the icon used for the close buton on the alerts.

:::tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <Demos-Alert-Closeicon />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-button @click="active1=!active1" color="primary" type="filled">{{!active1?'Open Alert':'Close Alert'}}</vm-button>
    <vm-alert
    :active.sync="active1"
    closable
    close-icon="cancel">
      Lorem ip
      sum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
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
```


</div>
</vuecode>
</box>

<box>

## Icons

You can add to the alert a descriptive icon with the property `icon` and as a value the icon name of the icon in the currently selected icon pack. (The default is [Eva Icons](https://akveo.github.io/eva-icons/))

:::tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <Demos-Alert-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <selected-icons :icon.sync="icon1"/>
   <vm-alert active="true" color="rgb(111, 38, 224)" :icon="icon1" >
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
   </vm-alert>
  </div>
</template>

<script>
import selectedIcons from '../../selectedIcons.vue'
export default {
  components:{
    selectedIcons
  },
  data(){
    return {
      icon1: 'sms',
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Example of use

An example would be to have an input and when a condition is met show the **vm-alert**.

<vuecode md>
<div slot="demo">
  <Demos-Alert-Exampleofuse />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <input vm-label="Enter only numbers" vm-placeholder="0123456789" v-model="value1"/>
    <vm-alert :active="inputValid" color="danger" icon="alert-circle-outline" >
      <span>the value is <b>invalid</b> you can only enter numbers</span>
    </vm-alert>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
    }
  },
  computed:{
    inputValid(){
      if(/^\d+$/.test(this.value1)){
        return false
      } else {
        return true
      }
    }
  }
}
</script>
```

</div>
</vuecode>
</box>
