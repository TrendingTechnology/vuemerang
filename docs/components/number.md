---
API:
 - name: color
   type: String
   parameters: RGB, HEX, primary, success, danger, warning, dark
   description: Component color.
   default: null
 - name: max
   type: Number
   parameters: null
   description: Maximum number admitted.
   default: null
 - name: min
   type: Number
   parameters: null
   description: Minimum number admitted.
   default: null
 - name: size
   type: String
   parameters: medium, small, mini
   description: Component size.
   default: null
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
 - name: icon-dec
   type: String
   parameters: icon name
   description: Icon used to indicate decrement.
   default: remove
 - name: icon-inc
   type: String
   parameters: icon name
   description: Icon used to indicate increment.
   default: add
 - name: label
   type: String
   parameters: null
   description: Add a descriptive text in the input number.
---


# Number Input

<box header>

  Input of single numbers pleasant to the user and practical.

</box>

<box>

## Default

If you need to add a component that handles a single number, use the component `vm-input-number`. You can also change the increment and decrement button icons using the properties `icon-inc` and `icon-dec` respectively.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Default />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-input-number v-model="number"/>
    <vm-input-number :disabled="true" v-model="number1"/>
    <vm-input-number v-model="number2" icon-inc="expand_less" icon-dec="expand_more"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number:34,
      number1:48,
      number2:50
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

You can change the color of the **Input-Number** with the property `color`. You are able to use the [Main Colors](/theme/) or **RGB** and **HEX** colors.

:::warning
  Only **RGB** and **HEX** colors are supported.
:::

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Color />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-input-number color="danger" v-model="number1"/>
    <vm-input-number color="success" v-model="number2"/>
    <vm-input-number color="warning" v-model="number3"/>
    <vm-input-number color="dark" v-model="number4"/>
    <vm-input-number color="rgb(218, 24, 94)" v-model="number5"/>
    <vm-input-number color="#ad3af9" v-model="number6"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:196,
      number2:88,
      number3:25,
      number4:12,
      number5:590,
      number6:32,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Min - Max

You can restrict the maximum number or the minimum with the properties `vm-min`, `vm-max`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Minmax />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-input-number min="13" max="21" v-model="number1"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number1:21,
    }
  }
}
</script>
```

</div>
</vuecode>
</box>

<box>

## Size

To change the size of the component, you can use the property `vm-size`. The allowed values are: `medium`, `small`, and `mini`.

<vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Size />
</div>
<div slot="code">

```html
<template lang="html">
  <div class="centerx">
    <vm-input-number v-model="number0"/>
    <vm-input-number size="medium" v-model="number1"/>
    <vm-input-number size="small" v-model="number2"/>
    <vm-input-number size="mini" v-model="number3"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      number0:95,
      number1:21,
      number2:67,
      number3:2
    }
  }
}
</script>
```

</div>
</vuecode>
</box>


 <box>

 ## Label

 Number Input supports adding labels for number inputs.

 <vuecode md>
<div slot="demo">
  <Demos-Inputnumber-Label />
</div>
<div slot="code">

 ```html
<template lang="html">
  <div class="centerx">
    <vs-input-number v-model="number0" :label="passengers"/>
  </div>
</template>

 <script>
export default {
  data(){
    return {
      number0:1
    }
  }
}
</script>
```

 </div>
</vuecode>
</box>
