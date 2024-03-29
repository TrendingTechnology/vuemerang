---
API:
 - name: v-model
   type: Boolean
   parameters: null
   description: Determines if the sidebar is active (visible), if it is a vm-sidebar-item, determine if the link is active.
   default: false
 - name: icon
   type: String
   parameters: null
   description: Add the icon to the item or group label.
   default: none
 - name: icon-pack
   type: String
   parameters: Icon Pack Class Name
   description: Icon Pack to be used. If not set, icon will default to Eva Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.
   default: eva
 - name: parent
   type: Element (#idx | .classx)
   parameters: #parent | .parent
   description: Determine the parent of the sidebar .
   default: body
 - name: staticPosition
   type: String
   parameters: #parent | .parent
   description: Determines if the component is static and has a relative position.
   default: false
 - name: title (vm-sidebar-group)
   type: String
   parameters: null
   description: Label of the group of links.
   default: null
 - name: open (vm-sidebar-group)
   type: Boolean
   parameters: null
   description: Determines if the group of links is open.
   default: false
 - name: openHover (vm-sidebar-group)
   type: Boolean
   parameters: null
   description: Determine if the group expands when doing hover defaul click.
   default: click
 - name: position-right
   type: String
   parameters: null
   description: Determines where the sidebar should be opened from right.
   default: left
 - name: reduce
   type: Boolean
   parameters: null
   description: Determines if the sidebar is of only icons.
   default: false
 - name: hidden-background
   type: Boolean
   parameters: null
   description: Determines if the background is hidden.
   default: false
 - name: reduce-not-hover-expand
   type: Boolean
   parameters: null
   description: Determines if the component does not expand when in reduced mode.
   default: false
 - name: reduce-not-rebound
   type: Boolean
   parameters: null
   description: Eliminates the bounce animation in the reduce mode when opening.
   default: false
 - name: click-not-close
   type: Boolean
   parameters: null
   description: when clicking, the sidebar is no longer closed.
   default: false
 - name: default-index
   type: Number, String
   parameters: null
   description: Determines the initial index of the options (the initial option selected).
   default: 1
 - name: index (vm-sidebar-item)
   type: Number, String
   parameters: null
   description: determines the item's index.
   default: 1
 - name: href
   type: url
   parameters: null
   description: add the href to the link.
   default: null
 - name: to
   type: url
   parameters: null
   description: add the href to the vue-router link.
   default: null
---

# SideBar

<box header>

  SideBar is important for a website, it helps users jump from one site section to another quickly

</box>

<box>

## Default

One of the most common features is to have the hidden sidebar to show it when the user presses a button or makes an action, to add a sidebar we have the component `vm-sidebar`

:::tip Links
  To add an internal link using [vue-router](https://router.vuejs.org/) you can do them simply by adding the property [to](https://router.vuejs.org/api/#to) as if it were a [vue-router](https://router.vuejs.org/) link

  In case you need an external link or normal html, simply do it with the href property
:::

:::tip Active Link
  To make the link is in an active state we have the property `v-model`
:::

<vuecode md center>
<div slot="demo">
  <Demos-SideBar-Default />
</div>
<div slot="code">

```html
<template lang="html">

  <div id="parentx">

    <vm-button @click="active=!active" color="primary" type="filled">Open Sidebar</vm-button>
    <vm-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vm-button color="primary" icon="more_horiz" type="flat"></vm-button>
        </h4>

      </div>

      <vm-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vm-sidebar-item>

      <vm-sidebar-item index="2" icon="gavel">
        History
      </vm-sidebar-item>

      <vm-divider icon="person" position="left">
        User
      </vm-divider>

      <vm-sidebar-item index="3" icon="verified_user">
        Configurations
      </vm-sidebar-item>
      <vm-sidebar-item index="4" icon="account_box">
        Profile
      </vm-sidebar-item>
      <vm-sidebar-item index="5" >
        Card
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="reply" color="danger" type="flat">log out</vm-button>
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
  })
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
```

</div>
</vuecode>
</box>



<box>

## Parent

You can change the parent of the sidebar with the property `parent` that as a value requires an element of the DOM (**#idx**, **.classx**) or a reference of Vuejs as `$refs.myrefContent`

:::tip
  By default the father of the sidebar is the body
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Parent />
</div>
<div slot="code">

```html
<template lang="html">

  <div ref="parentSidebar" id="parentx">

    <vm-button @click="active=!active" color="primary" type="filled">Open Sidebar</vm-button>
    <vm-sidebar :parent="$refs.parentSidebar" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vm-button color="primary" icon="more_horiz" type="flat"></vm-button>
        </h4>

      </div>

      <vm-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vm-sidebar-item>

      <vm-sidebar-item index="2" icon="gavel">
        History
      </vm-sidebar-item>

      <vm-divider icon="person" position="left">
        User
      </vm-divider>

      <vm-sidebar-item index="3" icon="verified_user">
        Configurations
      </vm-sidebar-item>
      <vm-sidebar-item index="4" icon="account_box">
        Profile
      </vm-sidebar-item>
      <vm-sidebar-item index="5" >
        Card
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="reply" color="danger" type="flat">log out</vm-button>
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
  })
}
</script>

<style lang="stylus">
#parentx
  overflow hidden
  height 500px
  position relative

.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
```

</div>
</vuecode>
</box>


<box>

## Static

You can also use the sidebar in static mode with the property `static`

:::tip
  when putting the sidebar in static mode its position becomes relative for better manipulation
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Static />
</div>
<div slot="code">

```html
<template lang="html">

  <div class="parentx-static">

    <vm-sidebar static-position default-index="1" color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vm-button color="primary" icon="more_horiz" type="flat"></vm-button>
        </h4>

      </div>

      <vm-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vm-sidebar-item>

      <vm-sidebar-item index="2" icon="gavel">
        History
      </vm-sidebar-item>

      <vm-divider icon="person" position="left">
        User
      </vm-divider>

      <vm-sidebar-item index="3" icon="verified_user">
        Configurations
      </vm-sidebar-item>
      <vm-sidebar-item index="4" icon="account_box">
        Profile
      </vm-sidebar-item>
      <vm-sidebar-item index="5" >
        Card
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="reply" color="danger" type="flat">log out</vm-button>
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
  })
}
</script>

<style lang="stylus">
.parentx-static
  overflow hidden
  height 500px
  position relative

.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
```

</div>
</vuecode>
</box>

<box>


## Group Collapsed

You can have groups of sub menus with the component `vm-slider-group` that as a required parameter we have the `title`, you can add as many groups as you need, including internally from the same component.

:::tip
  By default the component is closed but if you need to initialize open you can use the property `open`
:::

<vuecode md center>
<div slot="demo">
  <Demos-SideBar-Submenu />
</div>
<div slot="code">

```html
<template lang="html">

  <div id="parentx">

    <vm-button @click="active=!active" color="primary" type="filled">Open Sidebar</vm-button>
    <vm-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vm-button color="primary" icon="more_horiz" type="flat"></vm-button>
        </h4>

      </div>
      <vm-sidebar-group title="Aplication">
        <vm-sidebar-item index="1" icon="question_answer">
          Dashboard
        </vm-sidebar-item>
        <vm-sidebar-group title="Store">
          <vm-sidebar-item index="2.1" icon="store">
            Store
          </vm-sidebar-item>
          <vm-sidebar-item index="2.2" icon="nature_people">
            Nature
          </vm-sidebar-item>
          <vm-sidebar-item index="2.3" icon="style">
            Style
          </vm-sidebar-item>
        </vm-sidebar-group>
        <vm-sidebar-item index="2" icon="gavel">
          History
        </vm-sidebar-item>
        <vm-sidebar-item index="3" icon="https">
          security
        </vm-sidebar-item>
        <vm-sidebar-item index="4" icon="help">
          Help
        </vm-sidebar-item>
      </vm-sidebar-group>


      <vm-divider icon="person" position="left">
        User
      </vm-divider>

      <vm-sidebar-item index="5" icon="verified_user">
        Configurations
      </vm-sidebar-item>
      <vm-sidebar-item index="6" icon="account_box">
        Profile
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="reply" color="danger" type="flat">log out</vm-button>
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
  })
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
```

</div>
</vuecode>
</box>

<box>

## Open on the right

You can also choose where you'd like the sidebar to appear, right or left? By default, a sidebar will be located on
the left of the screen but sometimes, a right-screened sidebar is really useful!

:::warning
A `static` sidebar will not appear on the right.
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Right />
</div>
<div slot="code">

```html
<template lang="html">

  <div id="parentx">

    <vm-button @click="active=!active" color="primary" type="filled">Open Sidebar</vm-button>
    <vm-sidebar position-right  parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>

        <h4>
          My Name
          <vm-button color="primary" icon="more_horiz" type="flat"></vm-button>
        </h4>

      </div>

      <vm-sidebar-item index="1" icon="question_answer">
        Dashboard
      </vm-sidebar-item>

      <vm-sidebar-item index="2" icon="gavel">
        History
      </vm-sidebar-item>

      <vm-divider icon="person" position="left">
        User
      </vm-divider>

      <vm-sidebar-item index="3" icon="verified_user">
        Configurations
      </vm-sidebar-item>
      <vm-sidebar-item index="4" icon="account_box">
        Profile
      </vm-sidebar-item>
      <vm-sidebar-item index="5" >
        Card
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="reply" color="danger" type="flat">log out</vm-button>
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
  })
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
```

</div>
</vuecode>
</box>


<box>

## Reduce and Expand

You can have a reduced sidebar with the `reduce` property which by default makes the sidebar look reduced and when hover expands, if you do not want the functionality to expand when hovering you can remove it with the `reduce-not-hover-expand` property

:::tip
  You can remove the bounce animation by opening the sidebar with the prop `reduce-not-rebound`
:::

<vuecode md>
<div slot="demo">
  <Demos-SideBar-Reduceexpand />
</div>
<div slot="code">

```html
<template lang="html">

  <div id="parentx">

    <vm-button @click="active=!active, notExpand = false" color="success" type="filled">Open Sidebar Reduce-expand</vm-button>
    <vm-button @click="active=!active, notExpand = true" color="success" type="filled">Open Sidebar Reduce-only</vm-button>
    <vm-sidebar :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="body" default-index="1"  color="success" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <vm-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>
      </div>
      <vm-sidebar-group open title="Application">
        <vm-sidebar-item index="1" icon="menu" @click="reduce=!reduce">
         Toggle Sidebar
        </vm-sidebar-item>
        <vm-sidebar-item index="5" icon="verified_user">
          Configurations
        </vm-sidebar-item>
        <vm-sidebar-group title="Store">
          <vm-sidebar-item index="2.1" icon="store">
            Store
          </vm-sidebar-item>
          <vm-sidebar-item index="2.2" icon="nature_people">
            Nature
          </vm-sidebar-item>
          <vm-sidebar-item index="2.3" icon="style">
            Style
          </vm-sidebar-item>
        </vm-sidebar-group>
        <vm-sidebar-item index="2" icon="gavel">
          History
        </vm-sidebar-item>
        <vm-sidebar-item index="3" icon="https">
          Security
        </vm-sidebar-item>
        <vm-sidebar-item index="4" icon="help">
          Help
        </vm-sidebar-item>
      </vm-sidebar-group>


      <vm-divider icon="person" position="left">
        User
      </vm-divider>


      <vm-sidebar-item index="6" icon="account_box">
        Profile
      </vm-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vm-button icon="settings" color="primary" type="border"></vm-button>
      </div>

    </vm-sidebar>
  </div>

</template>

<script>
export default {
  data:()=>({
    active:false,
    notExpand: false,
    reduce: true
  })
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important
</style>
```

</div>
</vuecode>
</box>
