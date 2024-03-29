---
API:
 - name: label
   type: String
   parameters: null
   description: label of textarea.
   default: null
 - name: counter
   type: Number
   parameters: null
   description: Determines the maximum number of characters.
   default: null
 - name: counter-danger.sync
   type: Boolean
   parameters: null
   description: Determine if the value exceeds the counter.
   default: false
 - name: width
   type: String
   parameters: null
   description: Set the width of the textarea
   default: null
 - name: height
   type: String
   parameters: null
   description: Set the height of the textarea
   default: null
---

# Textarea

<box header>

  Simple and pleasant, very easy to implement

</box>

<box>

## Default

To add a **Textarea** we have the component `vm-textarea`

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-textarea v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Label

If you need to add a label you can use the `label` property

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Label />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-textarea label="Label in Textarea" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
  })
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Counter

There are times when we need the user to only enter a certain number of characters for it, we have the property `counter`, the value is a number and determines the maximum

:::tip
  To get when the number of characters is exceeded use the property `counter-danger.sync`
:::

<vuecode md>
<div slot="demo">
  <Demos-Textarea-Counter />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />
  </div>
</template>

<script>
export default {
  data:()=>({
    textarea: '',
    counterDanger: false
  })
}
</script>

<style lang="stylus">
</style>
```

</div>
</vuecode>
</box>

 <box>

 ## Width

 You can set the width of the textarea width the `width` property.

 <vuecode md>
<div slot="demo">
  <Demos-Textarea-Width />
</div>
<div slot="code">

 ```html
<template lang="html">
  <div>
    <vm-textarea label="Width set to 300px" width="300px" />
  </div>
</template>
```

 </div>
</vuecode>
</box>

 <box>

 ## Height

 You can set the height of the textarea with the `height` property.

 <vuecode md>
<div slot="demo">
  <Demos-Textarea-Height />
</div>
<div slot="code">

 ```html
<template lang="html">
  <div>
    <vm-textarea label="Height set to 200px" height="200px" />
  </div>
</template>
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
  <Demos-Textarea-Validation />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-textarea
    :success="true"
    success-text="The email is valid"
    placeholder="Email Success"
    val-icon-success="checkmark-circle-outline"
    v-model="value1"/>
    <vm-textarea
    :danger="true"
    danger-text="The password does not meet the standards"
    placeholder="Password Danger"
    val-icon-danger="close"
    v-model="value2"/>
    <vm-textarea
    :warning="true"
    warning-text="The entered data could not be verified"
    placeholder="Date Warning"
    val-icon-warning="alert-triangle-outline"
    v-model="value3"/>
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
