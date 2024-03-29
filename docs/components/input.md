---
API:
 - name: v-model
   type: bind
   parameters: null
   description: Link values.
   default: null
 - name: placeholder
   type: String
   parameters: null
   description: Brief suggestion describing the expected value of the input field.
   default: null
 - name: label
   type: String
   parameters: null
   description: Label for the input element.
   default: null
 - name: label-placeholder
   type: String
   parameters: null
   description: Label label with placeholder shape for the entry element.
   default: null
 - name: icon
   type: String
   parameters: icon name
   description: Element icon.
   default: null
 - name: val-icon-success
   type: String
   parameters: icon name
   description: The icon to use for success validations
   default: null
 - name: val-icon-danger
   type: String
   parameters: icon name
   description: The icon to use for danger validations
   default: null
 - name: val-icon-warning
   type: String
   parameters: icon name
   description: The icon to use for warning validations
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
 - name: icon-no-border
   type: Boolean
   parameters: boolean bind
   description: If true, remove the border-right of the icon (separator between the icon and the input)
   default: false
 - name: icon-after
   type: Boolean,String
   parameters: null
   description: If true, sets icon to appear after input.
   default: false
 - name: color
   type: String
   parameters: primary,success,danger,warning,dark,RGB,HEX
   description: Input and text color.
   default: primary
 - name: size
   type: String
   parameters: small,normal,large
   description: Size of input.
   default: normal
 - name: type
   type: String
   parameters: email, number, url, password, custom
   description: The type of element input.
   default: text
 - name: pass
   type: Boolean
   parameters: null
   description: The effect for password, type password is required.
   default: false
 - name: success
   type: Boolean
   parameters: boolean bind
   description: Activate the status of success in the input.
   default: false
 - name: danger
   type: Boolean
   parameters: boolean bind
   description: Activate the status of danger in the input.
   default: false
 - name: warning
   type: Boolean
   parameters: boolean bind
   description: Activate the status of warning in the input.
   default: false
 - name: description-text
   type: String
   parameters: null
   description: Add a description text to the input.
   default: false
 - name: danger-text
   type: String
   parameters: null
   description: Text to show when the item is invalid.
   default: null
 - name: success-text
   type: String
   parameters: null
   description: Text to show when the item is valid.
   default: null
 - name: warning-text
   type: String
   parameters: null
   description: Text that is displayed in the warning state.
   default: null
contributors:
 - cristijora
---

# Input **- update**

<box header>

  Nice inputs with many variants.

</box>


<box>

## Default

The input is a functional part in an application, For implementing it we have the `vm-input` component.

<vuecode md>
<div slot="demo">
  <Demos-Input-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx default-input">
     <vm-input class="inputx" placeholder="Placeholder" v-model="value1"/>
     <vm-input disabled class="inputx" placeholder="Disabled" v-model="value2"/>
   </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<style lang="stylus">
.default-input
  .inputx
    margin 10px
</style>
```

</div>
</vuecode>

</box>

<box>

## Label

Add a label to the input with the property `label`.

<vuecode md>
<div slot="demo">
  <Demos-Input-Label />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx labelx">
    <vm-input label="Name" placeholder="Placeholder" v-model="value1"/>
    <vm-input type="password" label="Password" placeholder="Disabled" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
    }
  }
}
</script>

<style lang="stylus">
  .labelx
    .vm-input
      margin 10px;
</style>
```

</div>
</vuecode>

</box>


<box>

## Label Placeholder

The placeholder can become a label when the input is focused. Use the property `label-placeholder` for making this.

:::warning
This property overrides the `label` and the` placeholder`
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Labelplaceholder />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-input label-placeholder="Label-placeholder" v-model="value1"/>
    <vm-input disabled="true" label-placeholder="Label-placeholder-disabled" v-model="value2"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:''
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

The input can have icons. Use the property `icon`. You can also also manipulate the icon's position with the property `icon-after`. You can change type input for password the property `pass`.

::: tip
Vuemerang uses the **Eva Icons** font library by default. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/). Other icon libraries can be used by providing the class for the respective pack in the icon-pack property. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Icons />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx icons-example">
    <vm-input icon="search" placeholder="Search" v-model="value1"/>
    <vm-input icon-after="true" label-placeholder="icon-after" icon="edit-outline" placeholder="Nombre" v-model="value2"/>
    <vm-input icon="add" label-placeholder="Label-placeholder" v-model="value3"/>
    <vm-input icon-after="true"  icon="shopping_cart" label-placeholder="Label-placeholder" v-model="value4"/>
    <vm-input disabled="true" icon="error_outline" label-placeholder="icon-disabled" v-model="value5"/>
    <vm-input icon-after="true" disabled="true" icon="email" label-placeholder="icon-disabled" v-model="value6"/>
    <vm-input icon-no-border icon="alert-circle-outline" label-placeholder="icon-no-border" v-model="value7"/>
    <vm-input icon-after pass label-placeholder="icon-password" v-model="value8" type="password"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:'',
      value8: ''
    }
  }
}
</script>

<style lang="stylus">
.icons-example
  .vm-input
    margin 15px;
</style>
```

</div>
</vuecode>

</box>

<box>

## Colors

You can change the color of the borders when the focus the input with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
There is only support for **HEX** and **RGB** colors
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Colors />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx colors-example">
    <vm-input label-placeholder="Default" v-model="value1"/>
    <vm-input color="success" label-placeholder="Success" v-model="value2"/>
    <vm-input color="danger" label-placeholder="Danger" v-model="value3"/>
    <vm-input color="warning" label-placeholder="Warning" v-model="value4"/>
    <vm-input color="dark" label-placeholder="Dark" v-model="value5"/>
    <vm-input color="rgb(213, 14, 151)" label-placeholder="RGB: rgb(213, 14, 151)" v-model="value6"/>
    <vm-input color="#11e988" label-placeholder="HEX: #11e988" v-model="value7"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
      value5:'',
      value6:'',
      value7:''
    }
  }
}
</script>

<style lang="stylus">
.colors-example
  .vm-input
    margin 5px
    margin-top 20px;
</style>
```

</div>
</vuecode>

</box>


<box>

## Validations

You can add a state for example of in affirmative response to a validation with `success` and if it is necessary to add a description or help to the user you can do it with the property `description`

:::tip
  Each of the states you can change the text, for example in the case of `danger-text` for the state of danger.
:::

<vuecode md>
<div slot="demo">
  <Demos-Input-Validation />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-input
      :success="true"
      success-text="The mail is valid"
      placeholder="Email Success"
      v-model="value1"/>
      <vm-input
      :danger="true"
      danger-text="The password does not meet the standards"
      placeholder="Password Danger"
      v-model="value2"/>
      <vm-input
      :warning="true"
      warning-text="The entered data could not be verified"
      placeholder="Date Warning"
      v-model="value3"/>
      <vm-input
      description-text="Just enter the first two numbers of your phone"
      placeholder="Phone Description"
      v-model="value4"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:'',
      value4:'',
    }
  }
}
</script>

<style lang="css" scoped>
  pre {
    width: 100%;
    color: rgba(255, 255, 255,.8);
  }
</style>
```

</div>
</vuecode>

</box>

<box>

## Size



<vuecode md>
<div slot="demo">
  <Demos-Input-Size />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="size-example">
    <vm-input size="large" placeholder="Size large" v-model="value1" />
    <vm-input size="default" placeholder="Size default" v-model="value2" />
    <vm-input size="small" placeholder="Size small" v-model="value3" />
  </div>
</template>

 <script>
export default {
  data(){
    return {
      value1:'',
      value2:'',
      value3:''
    }
  }
}
</script>


 <style lang="stylus">
.size-example
  .vm-input
    margin 6px;
</style>

```

</div>
</vuecode>

</box>
