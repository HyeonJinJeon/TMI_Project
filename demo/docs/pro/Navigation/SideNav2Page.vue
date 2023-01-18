<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Sidenav</strong></h4>
      <a
        href="https://mdbootstrap.com/docs/vue/navigation/sidenav/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
        ><mdb-icon icon="graduation-cap" class="mr-2" />Docs</a
      >
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>
        Basic example
        <mdb-icon :icon="show1 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2 :data="navigation" v-model="show1" over>
          <div slot="header" class="d-flex flex-column align-items-center mt-4">
            <img
              src="https://mdbootstrap.com/img/Marketing/general/logo/small/mdb-vue.png"
              class="img-fluid mb-3"
            />
            <hr class="w-100" />
          </div>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show1 = !show1"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show1 ? 'eye-slash' : 'eye'"
        >
          {{ show1 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>
        Link groups
        <mdb-icon :icon="show8 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2
          :data="groupsContent"
          v-model="show8"
          over
          groups
          fixed-header
          color="secondary"
        >
          <div slot="header" class="mt-3 grey-text">
            <mdb-avatar :width="48" class="ml-3">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                class="img-fluid rounded-circle z-depth-1"
              />
            </mdb-avatar>
            <h5 class="mt-4 ml-3"><strong>Ann Smith</strong></h5>
            <p class="ml-3">ann12345@mdbootstrap.com</p>
            <hr class="mb-0" />
          </div>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show8 = !show8"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show8 ? 'eye-slash' : 'eye'"
        >
          {{ show8 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>
        Fixed header
        <mdb-icon :icon="show2 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2
          :data="navigation"
          v-model="show2"
          fixed-header
          over
          color="unique"
        >
          <div slot="header" class="d-flex flex-column align-items-center mt-4">
            <img
              src="https://mdbootstrap.com/img/Marketing/general/logo/small/mdb-vue.png"
              class="img-fluid mb-3"
            />
            <hr class="w-100 mt-4 m-0" />
          </div>
          <div slot="content-header" class="text-center pt-3">
            <ul class="list-unstyled d-flex justify-content-center">
              <li>
                <mdb-btn
                  tabindex="0"
                  floating
                  tag="a"
                  size="sm"
                  color="white"
                  class="z-depth-0"
                  icon-class="blue-grey-text"
                  icon="facebook-f"
                  fab
                />
              </li>
              <li>
                <mdb-btn
                  tabindex="0"
                  floating
                  tag="a"
                  size="sm"
                  color="white"
                  class="z-depth-0"
                  icon-class="blue-grey-text"
                  icon="linkedin"
                  fab
                />
              </li>
              <li>
                <mdb-btn
                  tabindex="0"
                  floating
                  tag="a"
                  size="sm"
                  color="white"
                  class="z-depth-0"
                  icon-class="blue-grey-text"
                  icon="github"
                  fab
                />
              </li>
            </ul>
            <hr />
          </div>
          <div slot="content" class="text-center pb-3">
            <hr />
            <small>© 2020 Copyright: <strong>MDBootstrap.com</strong></small>
          </div>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show2 = !show2"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show2 ? 'eye-slash' : 'eye'"
        >
          {{ show2 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>
        Slim (expanding on hover)
        <mdb-icon :icon="show3 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2
          :data="navigation"
          v-model="show3"
          over
          :slim-collapsed="slimCollapsed"
          expand-on-hover
          slim
          @toggleSlim="slimCollapsed = $event"
        >
          <div slot="header">
            <div
              class="d-flex align-items-center my-4"
              :class="
                slimCollapsed
                  ? 'justify-content-center'
                  : 'justify-content-start'
              "
            >
              <mdb-avatar :width="40" style="flex: 0 0 auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
                  class="img-fluid rounded-circle z-depth-1"
                />
              </mdb-avatar>
              <p
                class="m-t mb-0 ml-4 p-0"
                style="flex: 0 2 auto"
                v-show="!slimCollapsed"
              >
                <strong
                  >Ann Smith
                  <mdb-icon color="success" icon="circle" class="ml-2" size="sm"
                /></strong>
              </p>
            </div>
            <hr class="w-100" />
          </div>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show3 = !show3"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show3 ? 'eye-slash' : 'eye'"
        >
          {{ show3 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4>
        Dark mode (right)
        <mdb-icon :icon="show5 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2
          :data="navigation"
          v-model="show5"
          color="white"
          right
          over
          expand-on-hover
          :sidenav-class="['mdb-color', 'darken-4']"
          slim
        >
          <div slot="header" class="d-flex flex-column align-items-center mt-4">
            <img
              src="https://mdbootstrap.com/img/Marketing/general/logo/small/mdb-vue.png"
              class="img-fluid mb-3"
            />
            <hr class="w-100" />
          </div>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show5 = !show5"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show5 ? 'eye-slash' : 'eye'"
        >
          {{ show5 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>
        Custom slim with tooltips
        <mdb-icon :icon="show6 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2
          v-model="show6"
          color="white"
          over
          :sidenav-class="['unique-color-dark', 'darken-4']"
          :slim-width="80"
          slim
        >
          <ul
            slot="content"
            class="custom-content list-unstyled mt-5 d-flex flex-column align-items-center"
          >
            <li
              :class="{ active: i === active }"
              v-for="(item, i) in custom"
              :key="i"
            >
              <mdb-tooltip
                v-if="show6"
                append-to-body
                trigger="hover"
                :options="{
                  placement: 'right',
                  modifiers: {
                    preventOverflow: {
                      enabled: false
                    },
                    hide: {
                      enabled: false
                    },
                    offset: {
                      offset: '0,20'
                    }
                  }
                }"
                ><mdb-btn
                  slot="reference"
                  @click="active = i"
                  :icon-class="active === i ? 'white-text fa-2x' : 'fa-2x'"
                  flat
                  :icon="item.icon"
                  class="px-3 py-4 m-0"
                />
                <span slot="tip" class="p-2 my-2">{{
                  item.text
                }}</span></mdb-tooltip
              >
            </li>
          </ul>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show6 = !show6"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show6 ? 'eye-slash' : 'eye'"
        >
          {{ show6 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>

    <section class="demo-section">
      <h4>
        Data from API
        <mdb-icon :icon="show7 ? 'eye' : 'eye-slash'" />
      </h4>
      <section class="d-flex justify-content-center">
        <mdb-side-nav-2
          v-model="show7"
          color="white"
          over
          :sidenav-class="['special-color']"
          :data="content"
          @itemClick="selectItem"
        >
          <div slot="header" class="mb-2  rgba-white-slight sidenav-content">
            <h4>Chat</h4>
          </div>
          <div slot="content" class="rgba-white-slight sidenav-content text-center">
            <div v-if="selected">
              <p>Selected user:</p>
              <p>
                <strong
                  ><u>{{ selected }}</u></strong
                >
                <mdb-icon class="ml-2" far icon="envelope" />
              </p>
              <p>({{ this.status.toLowerCase() }})</p>
            </div>
            <p v-else>User not selected</p>
          </div>
        </mdb-side-nav-2>

        <mdb-btn
          @click="show7 = !show7"
          icon-right
          color="primary"
          size="lg"
          rounded
          :icon="show7 ? 'eye-slash' : 'eye'"
        >
          {{ show7 ? "hide" : "show" }}
        </mdb-btn>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import axios from "axios";
import {
  mdbSideNav2,
  mdbContainer,
  mdbRow,
  mdbIcon,
  mdbAvatar,
  mdbBtn,
  mdbTooltip,
  mdbResize
} from "mdbvue";

export default {
  name: "SideNav2Page",
  components: {
    mdbRow,
    mdbIcon,
    mdbAvatar,
    mdbBtn,
    mdbTooltip,
    mdbSideNav2,
    mdbContainer
  },
  directives: { mdbResize },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      active: 0,
      disableBtn: false,
      slimCollapsed: true,
      navigation: [
        {
          name: "Home",
          to: "/",
          icon: "home"
        },
        {
          name: "CSS",
          to: "/css",
          icon: "css3",
          fab: true
        },
        {
          name: "Components",
          to: "/components",
          icon: "cubes"
        },
        {
          name: "Advanced",
          to: "/advanced",
          icon: "code"
        },
        {
          name: "Navigation",
          icon: "bars",
          children: [
            {
              name: "Footer",
              to: "/navigation/pro/footer"
            },
            {
              name: "Hamburger Menu",
              to: "/navigation/pro/hamburger"
            },
            {
              name: "Mega Menu",
              to: "/navigation/pro/megamenu"
            },
            {
              name: "Navbar",
              to: "/navigation/pro/navbar"
            },
            {
              name: "Sidenav",
              to: "/navigation/pro/sidenav2"
            }
          ]
        },
        {
          name: "Forms",
          to: "/forms",
          icon: "edit"
        },
        {
          name: "Tables",
          to: "/tables",
          icon: "table"
        },
        {
          name: "Modals",
          to: "/modals",
          icon: "window-restore"
        },
        {
          name: "Plugins",
          to: "/plugins",
          icon: "plus-square"
        },
        {
          name: "Sections",
          to: "/sections",
          icon: "th-large"
        },
        {
          name: "Mixins",
          to: "/mixins",
          icon: "user-cog"
        },
        {
          name: "Directives",
          to: "/directives",
          icon: "asterisk"
        }
      ],
      groupsContent: [
        {
          data: [
            {
              name: "Inbox",
              to: "/",
              icon: "envelope"
            },
            {
              name: "Outbox",
              to: "/",
              icon: "paper-plane"
            },
            {
              name: "Favorites",
              to: "/",
              icon: "heart"
            },
            {
              name: "Starred",
              icon: "star"
            }
          ]
        },
        {
          data: [
            {
              name: "Recent",
              to: "/",
              icon: "clock"
            },
            {
              name: "Uploads",
              to: "/",
              icon: "upload"
            },
            {
              name: "Backups",
              to: "/",
              icon: "cloud-upload-alt"
            },
            {
              name: "Trash",
              icon: "trash"
            }
          ]
        },
        {
          name: "Settings",
          data: [
            {
              name: "Account",
              to: "/",
              icon: "user"
            },
            {
              name: "Privacy",
              to: "/",
              icon: "lock"
            }
          ]
        },
        {
          data: [
            {
              name: "Log out",
              to: "/"
            }
          ]
        }
      ],
      custom: [
        {
          icon: "share-alt",
          text: "Share"
        },
        {
          icon: "heart",
          text: "Favourites"
        },
        {
          icon: "address-book",
          text: "Contacts"
        },
        {
          icon: "envelope",
          text: "Send a message"
        },
        {
          icon: "sliders-h",
          text: "Settings"
        }
      ],
      content: [
        {
          name: "Online",
          children: [],
          icon: 'circle'
        },
        {
          name: "Offline",
          children: [],
          icon: 'circle',
          far: true
        }
      ],
      selected: null,
      status: ''
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const [ online, offline ] = this.content;
      response.data.forEach(user => {
        const isActive = Math.random() < 0.5;

        const group = isActive ? online : offline;

        group.children.push({
          name: user.name
        })
      });
    });
  },
  methods: {
    selectItem(category, item) {
      if (!item) {
        this.status = this.content[category].name;
      }
      else {
        this.selected = this.content[category].children[item].name;
      }
    }
  }
};
</script>
<style scoped>
.custom-content {
  width: 100%;
}

.custom-content li {
  width: 100%;
}

.custom-content li button {
  transition: all 0.3s ease-in;
  width: 100%;
}

.custom-content li button:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.custom-content li button:focus {
  outline: none !important;
  background-color: rgba(255, 255, 255, 0.05);
}
.custom-content .active {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidenav-content {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
}
</style>
