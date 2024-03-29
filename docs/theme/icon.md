---
API:
 - name: icon
   type: String
   parameters: null
   description: Determines the icon
   default: null
 - name: icon-pack
   type: String
   parameters: null
   description: Determines the icon pack. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
 - name: color
   type: String
   parameters: Vuemerang color presets, RGB, HEX, html color presets
   description: Determines the icon pack. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: black
 - name: bg
   type: String
   parameters: Vuemerang color presets, RGB, HEX, html color presets
   description: Sets the background color
   default: null
 - name: size
   type: String
   parameters: small, medium, large, custom measure(75px, 3rem, 2em)
   description: Sets the size of the icon
   default: 1rem
 - name: round
   type: Boolean
   parameters: null
   description: Makes the background round.
   default: false
 - name: click
   type: Function
   parameters: null
   description: a function to be executed on click of the icon
---

# Icon **- new**

<box header>

  Renders a font icon in the desired font library

</box>


<box>

## Default

To use the icon, use the `vm-icon` component. For the main parameter, pass the `icon` property that determines which icon to show. By default, the icon uses the **Eva Icons** font library. Another library can be selected by passing the css class/classes for the library to `icon-pack`.  Only the Eva Icons library is bundled with the framework.  Other libraries will have to be included implicitly.

::: tip
Vuemerang uses the **Eva Icons** font library. For a list of all available icons, visit the official [Eva Icons page](https://akveo.github.io/eva-icons/).

FontAwesome and other fonts libraries are supported. Simply use the `icon-pack` with `fa` or `fas`. You still need to include the Font Awesome icons in your project.
:::

<vuecode md>
<div slot="demo">
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care"></vm-icon>
</span>
<span>
  <vm-icon icon="pets"></vm-icon>
</span>
<span>
  <vm-icon icon="android"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer"></vm-icon>
</span>
</div>
<div slot="code">

```html
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care"></vm-icon>
</span>
<span>
  <vm-icon icon="pets"></vm-icon>
</span>
<span>
  <vm-icon icon="android"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer"></vm-icon>
</span>
```

</div>
</vuecode>
</box>

<box>

## Color

You can change the color of the icons as well, using color names, RGB, HEX, or Vuemerang variables.

<vuecode md>
<div slot="demo">
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" color="red"></vm-icon>
</span>
<span>
  <vm-icon icon="pets" color="primary"></vm-icon>
</span>
<span>
  <vm-icon icon="android" color="rgb(70, 150, 0)"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" color="#BC1254"></vm-icon>
</span>
</div>
<div slot="code">

```html
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" color="red"></vm-icon>
</span>
<span>
  <vm-icon icon="pets" color="primary"></vm-icon>
</span>
<span>
  <vm-icon icon="android" color="rgb(70, 150, 0)"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" color="#BC1254"></vm-icon>
</span>
```

</div>
</vuecode>
</box>

<box>

## Size

You can change the size of the Avatar with the property `size` the allowed values ​​are:

- large
- small
- Custom measure

:::tip
  In the example the last icon has the custom size of `75px` the added value will be the icon's **height** and **width** and **text-size**
:::

<vuecode md>
<div slot="demo">
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" size="small" color="red"></vm-icon>
</span>
<span>
  <vm-icon icon="pets" size="medium" color="primary"></vm-icon>
</span>
<span>
  <vm-icon icon="android" size="large" color="rgb(70, 150, 0)"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" size="75px" color="#BC1254"></vm-icon>
</span>
</div>
<div slot="code">

```html
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" size="small" color="red"></vm-icon>
</span>
<span>
  <vm-icon icon="pets" size="medium" color="primary"></vm-icon>
</span>
<span>
  <vm-icon icon="android" size="large" color="rgb(70, 150, 0)"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" size="75px" color="#BC1254"></vm-icon>
</span>
```

</div>
</vuecode>
</box>

<box>

## Background Color

You can change the background color with the property `bg`.

<vuecode md>
<div slot="demo">
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" size="small" bg="red" color="white"></vm-icon>
</span>
<span>
  <vm-icon icon="pets" size="medium" bg="primary"></vm-icon>
</span>
<span>
  <vm-icon icon="android" size="large" bg="rgb(70, 150, 0)"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" size="75px" bg="#BC1254"></vm-icon>
</span>
</div>
<div slot="code">

```html
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" size="small" bg="red"></vm-icon>
</span>
<span>
  <vm-icon icon="pets" size="medium" bg="primary"></vm-icon>
</span>
<span>
  <vm-icon icon="android" size="large" bg="rgb(70, 150, 0)"></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" size="75px" bg="#BC1254"></vm-icon>
</span>
```

</div>
</vuecode>
</box>

<box>

## Rounded

To make the icon round, pass the property `round`.

:::tip
  You can also pass this as `round=true`. The two are equivalent.
:::

<vuecode md>
<div slot="demo">
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" size="small" bg="red" color="white" round></vm-icon>
</span>
<span>
  <vm-icon icon="pets" size="medium" bg="primary" round></vm-icon>
</span>
<span>
  <vm-icon icon="android" size="large" bg="rgb(70, 150, 0)" round></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" size="75px" bg="#BC1254" round></vm-icon>
</span>
</div>
<div slot="code">

```html
<span>
  <vm-icon icon="mood"></vm-icon>
</span>
<span>
  <vm-icon icon="child_care" size="small" bg="red" round></vm-icon>
</span>
<span>
  <vm-icon icon="pets" size="medium" bg="primary" round></vm-icon>
</span>
<span>
  <vm-icon icon="android" size="large" bg="rgb(70, 150, 0)" round></vm-icon>
</span>
<span>
  <vm-icon icon="polymer" size="75px" bg="#BC1254" round></vm-icon>
</span>
```

</div>
</vuecode>
</box>
