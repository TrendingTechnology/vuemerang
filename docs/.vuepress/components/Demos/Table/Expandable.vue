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
                  <vm-button type="border" size="small" icon="phone_in_talk"></vm-button>
                  <vm-button type="gradient" size="small" color="success" icon="send"></vm-button>
                  <vm-button type="flat" size="small" color="danger" icon="delete_sweep"></vm-button>
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
  width: 100%
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
