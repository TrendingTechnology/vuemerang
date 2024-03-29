---
API:
  - name: percent
    type: Number
    parameters: null
    description: Percentage of the progress
    default: 0
  - name: color
    type: String
    parameters: RGB, HEX, primary, success, danger, warning, dark
    description: Component color
    default: primary
  - name: indeterminate
    type: Boolean
    parameters: null
    description: determines if the progress bar its value is indeterminate and adds an animation
    default: false
  - name: height
    type: Number
    parameters: null
    description: Determine the height of the progress bar
    default: 6
contributors:
  - fergardi
---

# Progress

<box header>

  Progress bars are a great way to show task advances or waiting time indications to the user.

</box>


<box>

## Colors

Nice colors for your progress bar.

<vuecode md>
<div slot="demo">
  <vm-progress :percent="100" color="primary">primary</vm-progress>
  <vm-progress :percent="90" color="warning">warning</vm-progress>
  <vm-progress :percent="75" color="danger">danger</vm-progress>
  <vm-progress :percent="60" color="success">success</vm-progress>
  <vm-progress :percent="45" color="dark">dark</vm-progress>
  <vm-progress :percent="30" color="rgb(164, 69, 15)">RGB</vm-progress>
  <vm-progress :percent="15" color="#24c1a0">HEX</vm-progress>
</div>
<div slot="code">

```html
  <vm-progress :percent="100" color="primary">primary</vm-progress>
  <vm-progress :percent="90" color="warning">warning</vm-progress>
  <vm-progress :percent="75" color="danger">danger</vm-progress>
  <vm-progress :percent="60" color="success">success</vm-progress>
  <vm-progress :percent="45" color="dark">dark</vm-progress>
  <vm-progress :percent="30" color="rgb(164, 69, 15)">RGB</vm-progress>
  <vm-progress :percent="15" color="#24c1a0">HEX</vm-progress>
```

</div>
</vuecode>

</box>


<box>

## Indeterminate

You can have a progress bar with indeterminate value with the property `indeterminate`.

<vuecode md>
<div slot="demo">
  <vm-progress indeterminate color="primary">primary</vm-progress>
</div>
<div slot="code">

```html
  <vm-progress indeterminate color="primary">primary</vm-progress>
```

</div>
</vuecode>

</box>


<box>

## Height

You can change the height of the loading bar with the property `height`.

:::tip
By default the property `height` is **5** (`5px`)
:::

<vuecode md>
<div slot="demo">
  <vm-progress :height="2" :percent="100" color="primary">primary</vm-progress>
  <vm-progress :height="4" :percent="80" color="warning">warning</vm-progress>
  <vm-progress :height="8" :percent="60" color="danger">danger</vm-progress>
  <vm-progress :height="12" :percent="40" color="success">success</vm-progress>
</div>
<div slot="code">

```html
<vm-progress :height="2" :percent="100" color="primary">primary</vm-progress>
<vm-progress :height="4" :percent="80" color="warning">warning</vm-progress>
<vm-progress :height="8" :percent="60" color="danger">danger</vm-progress>
<vm-progress :height="12" :percent="40" color="success">success</vm-progress>
```

</div>
</vuecode>

</box>
