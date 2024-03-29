---
API:
 - name: data
   type: Array, Object
   parameters: null
   description: Data that will be represented in the table.
   default: null
 - name: header
   type: slot
   parameters: null
   description: Header of the table.
   default: null
 - name: thead
   type: slot
   parameters: null
   description: thead of the table and where the vm-th should be added.
   default: null
 - name: tbody
   type: slot
   parameters: null
   description: tbody of the table and where the vm-tr should be added.
   default: null
 - name: stripe
   type: Boolean
   parameters: null
   description: Add a stripes effect.
   default: false
 - name: hoverFlat
   type: Boolean
   parameters: null
   description: Change effect hover and flat.
   default: false
 - name: maxHeight
   type: px
   parameters: null
   description: Change the high maximum of the table, generating the scroll and a fixed thead.
   default: false
 - name: multiple
   type: Boolean
   parameters: null
   description: Determines if multiple items can be selected.
   default: false
 - name: notSpacer
   type: Boolean
   parameters: null
   description: Eliminates the space between each tr.
   default: false
 - name: search
   type: Boolean
   parameters: null
   description: Determine if the filtering functionality through an input is active.
   default: false
 - name: pagination
   type: Boolean
   parameters: null
   description: Determine if the page is active so that only a certain number of items can be displayed.
   default: false
 - name: maxItems
   type: Number
   parameters: null
   description: Change the maximum number of items that can be displayed when the page is active.
   default: 5
 - name: state (vm-tr)
   type: Boolean
   parameters: null
   description: Determine the state of the element with a color.
   default: null
 - name: data (vm-tr)
   type: Object, Number, Array, String
   parameters: null
   description: Determines the value of the element for when it is selected.
   default: null
 - name: sortKey (vm-th)
   type: String
   parameters: null
   description: Determine the value to be raffled and if this activates that functionality.
   default: null
 - name: data (vm-td)
   type: String
   parameters: null
   description: This property is required if you are going to use the edit slot.
   default: null
---

# Table

<box header>

  You can manage the data by adding a table with a nice and very functional style

</box>

<box>

## Default

To implement a **data table** we have the component `vm-table`, also sub components and slots for a better management of the structure and operation

- vm-th: Component
- vm-tr: Component
- vm-td: Component
- thead: Slot
- tbody: Slot
- header: Slot

:::tip
 In order to manipulate the data within the table, it is necessary to add the property: `data="myDataTable"` and thus be able to use the `slot-scope="{data}"`
:::

<vuecode md>
<div slot="demo">
  <Demos-Table-Default/>
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].name}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Striped

You can have a sebra effect by adding the property `stripe`

<vuecode md>
<div slot="demo">
  <Demos-Table-Striped />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table stripe :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].name}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Fixed thead

To have a **thead** in the fixed table you can do it simply by adding the `max-height` property and the required height, the functionality will be automatically added

<vuecode md>
<div slot="demo">
  <Demos-Table-Fixed />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table max-height="200px" :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
```

</div>
</vuecode>

</box>


<box>

## State

There are times when we need to add a state to our **tr** in the table so we have the property **state** inside the component `vm-tr`

<vuecode md>
<div slot="demo">
  <Demos-Table-State />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :state="indextr == 2 || indextr == 5?'success':indextr == 6?'danger':null" :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Pagination

You can add a **paginated table** with the `pagination` property

:::tip
  by default the maximum number of elements per page is **5** to change it using the `max-items` property
:::

<vuecode md>
<div slot="demo">
  <Demos-Table-Pagination />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table max-items="3" pagination :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  }),
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Single Selected

You can add the functionality of select a specific **tr** to do this add the property `data` with the value to be selected, it is usually the triterated

:::tip
  if you need to execute a certain function to select the user, we have the property `@selected`, as the first parameter the data is returned
:::

<vuecode md>
<div slot="demo">
  <Demos-Table-Single />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table
      v-model="selected"
      @selected="handleSelected"
      :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].website">
            {{data[indextr].website}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  data:()=>({
    selected:[],
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  }),
  methods:{
    handleSelected(tr) {
      this.$vm.notify({
        title:`Selected ${tr.username}`,
        text:`Email: ${tr.email}`
      })
    }
  }
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Multiple Selected

To select multiples **tr** we have the property `multiple` and each of the selected items will be added to the` v-model`

<vuecode md>
<div slot="demo">
  <Demos-Table-Multiple />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table
      multiple
      v-model="selected"
      :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].website">
            {{data[indextr].id}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  data:()=>({
    selected:[],
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Expandable Data

You can add the functionality of expanding a **tr** to visualize more data to make a structure of data or more complex functionalities

<vuecode md>
<div slot="demo">
  <Demos-Table-Expandable />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table
      :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Website
        </vm-th>
        <vm-th>
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="tr.email">
            {{tr.email}}
          </vm-td>

          <vm-td :data="tr.username">
            {{tr.name}}
          </vm-td>

          <vm-td :data="tr.website">
            {{tr.website}}
          </vm-td>

          <vm-td :data="tr.id">
            {{tr.id}}
          </vm-td>

          <template class="expand-user" slot="expand">
            <div class="con-expand-users">
              <div class="con-btns-user">
                <div class="con-userx">
                  <vm-avatar :badge="tr.id" size="45px" :src="`https://randomuser.me/api/portraits/women/${indextr}.jpg`"/>
                  <span>
                    {{ tr.name }}
                  </span>
                </div>

                <div>
                  <vm-button vm-type="border" size="small" icon="phone_in_talk"></vm-button>
                  <vm-button vm-type="gradient" size="small" color="success" icon="send"></vm-button>
                  <vm-button vm-type="flat" size="small" color="danger" icon="delete_sweep"></vm-button>
                </div>
              </div>
              <vm-list>
                <vm-list-item icon="mail" title="Email" :subtitle="tr.email"></vm-list-item>
                <vm-list-item icon="check" title="Website" :subtitle="tr.website"></vm-list-item>
              </vm-list>
            </div>
          </template>
        </vm-tr>
      </template>
    </vm-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
<style lang="stylus">
.con-expand-users
  .con-btns-user
    display flex
    padding 10px
    padding-bottom 0px
    align-items center
    justify-content space-between
    .con-userx
      display flex
      align-items center
      justify-content flex-start
  .list-icon
    i
      font-size .9rem !important
</style>
```

</div>
</vuecode>

</box>


<box>

## Edit Data Table

You can edit the data with **slot** `edit`, so you have better flexibility and mastery of what you need

<vuecode md>
<div slot="demo">
  <Demos-Table-Edit />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table :data="users">
      <template slot="thead">
        <vm-th>
          Email
        </vm-th>
        <vm-th>
          Name
        </vm-th>
        <vm-th>
          Nro1
        </vm-th>
        <vm-th>
          Nro2
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="tr.email">
            {{tr.email}}

            <template slot="edit">
              <vm-input v-model="tr.email" class="inputx" placeholder="Email"/>
            </template>
          </vm-td>

          <vm-td :data="tr.username">
            {{tr.username}}

            <template slot="edit">
              <vm-select
                label="Users"
                v-model="tr.username"
                >
                <vm-select-item :key="index" :vm-value="item.name" :vm-text="item.name" v-for="(item,index) in users" />
              </vm-select>
            </template>
          </vm-td>

          <vm-td :data="tr.id">
            {{tr.id}}

            <template slot="edit">
              <vm-input-number v-model="tr.id"/>
            </template>
          </vm-td>

          <vm-td :data="tr.id">
            {{tr.id}}

            <template slot="edit">
              <vm-slider :max="20" v-model="tr.id"/>
            </template>
          </vm-td>

        </vm-tr>
      </template>
    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({

    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  }),
}
</script>
```

</div>
</vuecode>

</box>

<box>

## Filter and Sorter

You can add the Filter functionality by adding the `search` property

if you need a property to be sorted you just have to add the `sort-key` property and the value you need to be sorted

<vuecode md>
<div slot="demo">
  <Demos-Table-Filter />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table search :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th sort-key="email">
          Email
        </vm-th>
        <vm-th sort-key="username">
          Name
        </vm-th>
        <vm-th sort-key="id">
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>


    </vm-table>
  </div>
</template>

<script>
export default {
  data:()=>({
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  })
}
</script>
```

</div>
</vuecode>

</box>


<box>

## Miscellaneous

You can add a **filtered, sorted, paginated and multi selected table** with combination of the `search`, `multiple` and `pagination` properties for example

<vuecode md>
<div slot="demo">
  <Demos-Table-Misc />
</div>
<div slot="code">

```html
<template lang="html">
  <div>
    <vm-table
      multiple
      v-model="selected"
      pagination
      max-items="3"
      search
      :data="users">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vm-th sort-key="email">
          Email
        </vm-th>
        <vm-th sort-key="username">
          Name
        </vm-th>
        <vm-th sort-key="website">
          Website
        </vm-th>
        <vm-th sort-key="id">
          Nro
        </vm-th>
      </template>

      <template slot-scope="{data}">
        <vm-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" >
          <vm-td :data="data[indextr].email">
            {{data[indextr].email}}
          </vm-td>

          <vm-td :data="data[indextr].username">
            {{data[indextr].username}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].website}}
          </vm-td>

          <vm-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vm-td>
        </vm-tr>
      </template>
    </vm-table>

    <pre>{{ selected }}</pre>
  </div>
</template>

<script>
export default {
  data:()=>({
    selected:[],
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      },
      {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "website": "kale.biz",
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "website": "demarco.info",
      },
      {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "website": "ola.org",
      },
      {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "website": "elvis.io",
      },
      {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "website": "jacynthe.com",
      },
      {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "website": "conrad.com",
      },
      {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "website": "ambrose.net",
      }
    ]
  }),
}
</script>
```

</div>
</vuecode>

</box>
