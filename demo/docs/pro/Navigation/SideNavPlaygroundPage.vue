<template>
  <div ref="layout">
    <!--/.Navbar-->

    <mdb-side-nav-2
      :key="key"
      v-model="show"
      :data="navigation"
      :push="push"
      groups
      :over="over"
      :slim="true"
      :right="right"
      :slim-collapsed="collapsed"
      @toggleSlim="collapsed = $event"
      :sidenav-class="sidenavClass"
      :color="color"
      :expand-on-hover="hover"
      :fixed-header="header"
      :backdrop="backdrop"
      :backdrop-class="backdropClass"
      @setOffset="handleOffset"
    >
      <div slot="header" class="mt-3 grey-text">
        <mdb-avatar :width="46">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
            class="img-fluid rounded-circle z-depth-1"
          />
        </mdb-avatar>
        <h5 class="mt-4 ml-1">
          <strong>{{ collapsed ? "Ann" : "Ann Smith" }}</strong>
        </h5>
        <p class="ml-1">{{ collapsed ? "as123" : "as123@mdbootstrap.com" }}</p>
        <hr class="mb-0" />
      </div>
      <mdb-container
        fluid
        ref="main"
        slot="main"
        class="view d-flex flex-column flex-center grey-text"
      >
        <mdb-row class="my-4">
          <mdb-col>
            <mdb-card>
              <mdb-card-body class="p-5">
                <p class="py-4 font-weight-bold">Position:</p>

                <div>
                  <mdb-input
                    class="pl-0"
                    type="radio"
                    id="option4-1"
                    name="positioning"
                    radioValue="side"
                    v-model="radio"
                    label="Side"
                  />
                  <mdb-input
                    class="pl-0"
                    type="radio"
                    id="option4-2"
                    name="positioning"
                    radioValue="push"
                    v-model="radio"
                    label="Push"
                  />
                  <mdb-input
                    class="pl-0"
                    type="radio"
                    id="option4-3"
                    name="positioning"
                    radioValue="over"
                    v-model="radio"
                    label="Over"
                  />
                </div>
                <p class="py-4 font-weight-bold">Switch to right side:</p>
                <mdb-switch on-label="Right" off-label="Left" v-model="right" />
                <p class="py-4 font-weight-bold">Toggle slim:</p>
                <mdb-switch
                  on-label="Slim"
                  off-label="Expanded"
                  v-model="collapsed"
                />
                <p class="py-4 font-weight-bold">
                  Toggle slim on mouseover / mouseout:
                </p>
                <mdb-switch v-model="hover" />
                <p class="py-4 font-weight-bold">Header:</p>
                <mdb-switch
                  on-label="Fixed"
                  off-label="Scrollable"
                  v-model="header"
                />
                <p class="py-4 font-weight-bold">Backdrop:</p>
                <mdb-switch v-model="backdrop" />
                <p class="py-4 font-weight-bold">Set background color:</p>
                <div class="d-flex">
                  <div
                    class="color mx-2 z-depth-1"
                    v-for="(colorClass, i) in backgrounds"
                    :key="i"
                    :class="
                      `${colorClass} ${colorClass === sidenavClass &&
                        'z-depth-2'}`
                    "
                    @click="setBackground(colorClass)"
                  ></div>
                </div>
                <p class="py-4 font-weight-bold">Set color:</p>
                <div class="d-flex">
                  <div
                    class="color mx-2 z-depth-1"
                    v-for="(colorProp, i) in colors"
                    :key="i"
                    :class="
                      `${
                        colorProp === 'white' ? colorProp : colorProp + '-color'
                      } ${colorProp === color && 'z-depth-2'}`
                    "
                    @click="setColor(colorProp)"
                  ></div>
                </div>

                <p class="py-4 font-weight-bold">Set backdrop's color:</p>
                <div class="d-flex">
                  <div
                    class="color mx-2 z-depth-1"
                    v-for="(backdropColor, i) in backdropColors"
                    :key="i"
                    :class="
                      `${backdropColor} ${backdropColor === backdropClass &&
                        'z-depth-2'}`
                    "
                    @click="backdropClass = backdropColor"
                  ></div>
                </div>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col>
            <div>
              <mdb-tooltip :options="{ placement: 'right' }">
                <mdb-btn
                  color="secondary"
                  slot="reference"
                  tag="a"
                  floating
                  icon="bars"
                  @click="show = !show"
                />
                <span slot="tip">Toggle sidenav</span>
              </mdb-tooltip>
            </div>
            <div>
              <mdb-tooltip :options="{ placement: 'right' }">
                <mdb-btn
                  color="secondary"
                  slot="reference"
                  tag="a"
                  class="flex-center d-flex"
                  floating
                  @click="show = !show"
                >
                  <router-link to="/navigation"
                    ><mdb-icon icon="graduation-cap"
                  /></router-link>
                </mdb-btn>
                <span slot="tip">Go back to docs</span>
              </mdb-tooltip>
            </div>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </mdb-side-nav-2>
  </div>
</template>

<script>
import {
  mdbSideNav2,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbSwitch,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbTooltip,
  mdbAvatar,
  mdbIcon,
  mdbBtn,
  waves
} from "mdbvue";

export default {
  name: "SideNavPlaygroundPage",
  components: {
    mdbSideNav2,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbSwitch,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbTooltip,
    mdbAvatar,
    mdbIcon,
    mdbBtn
  },
  data() {
    return {
      key: 0,
      radio: "side",
      show: true,
      width: null,
      collapsed: false,
      push: false,
      over: false,
      slim: false,
      header: false,
      backdrop: true,
      color: "secondary",
      sidenavClass: "white",
      backdropClass: "rgba-black-light",
      right: false,
      hover: false,
      navigation: [
        {
          data: [
            {
              name: "Inbox",
              icon: "envelope"
            },
            {
              name: "Outbox",
              icon: "paper-plane"
            },
            {
              name: "Favorites",
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
              name: "Family",
              icon: "users",
              children: [
                {
                  name: "Thomas Smith"
                },
                {
                  name: "Maria Dent"
                },
                {
                  name: "Caroline Smith"
                }
              ]
            },
            {
              name: "Friends",
              icon: "cocktail",
              children: [
                {
                  name: "Joanna Lorren"
                },
                {
                  name: "Patric Connor"
                },
                {
                  name: "Lucian Smith"
                }
              ]
            },
            {
              name: "Work",
              icon: "briefcase",
              children: [
                {
                  name: "Nicolas Derren"
                },
                {
                  name: "Elisabeth Riley"
                },
                {
                  name: "John Gerrick"
                }
              ]
            }
          ]
        },
        {
          data: [
            {
              name: "Recent",
              icon: "clock"
            },
            {
              name: "Uploads",
              icon: "upload"
            },
            {
              name: "Backups",
              icon: "cloud-upload-alt"
            },
            {
              name: "Trash",
              icon: "trash"
            }
          ]
        },
        {
          data: [
            {
              name: "Account",
              icon: "user"
            },
            {
              name: "Privacy",
              icon: "lock"
            }
          ]
        },
        {
          data: [
            {
              name: "Log out",
            }
          ]
        }
      ],
      colors: [
        "primary",
        "danger",
        "warning",
        "success",
        "info",
        "default",
        "secondary",
        "elegant",
        "stylish",
        "unique",
        "special",
        "white"
      ],
      backgrounds: [
        "white",
        "grey lighten-5",
        "grey lighten-4",
        "grey lighten-3",
        "grey lighten-2",
        "grey lighten-1",
        "grey",
        "grey darken-1",
        "grey darken-2",
        "grey darken-3",
        "grey darken-4"
      ],
      backdropColors: [
        "rgba-blue-light",
        "rgba-red-light",
        "rgba-pink-light",
        "rgba-purple-light",
        "rgba-indigo-light",
        "rgba-cyan-light",
        "rgba-teal-light",
        "rgba-green-light",
        "rgba-lime-light",
        "rgba-yellow-light",
        "rgba-orange-light",
        "rgba-brown-light",
        "rgba-grey-light",
        "rgba-bluegrey-light",
        "rgba-black-light",
        "rgba-stylish-light"
      ]
    };
  },

  mounted() {
    this.$store.commit("toggleDocs", false);
    this.width = this.$refs.layout.getBoundingClientRect().width;
  },
  beforeDestroy() {
    this.$store.commit("toggleDocs", true);
  },
  methods: {
    setColor(color) {
      this.show = false;
      this.color = color;
      this.key = Math.floor(Math.random() * 100);
      this.$nextTick(() => (this.show = true));
    },
    setBackground(color) {
      this.sidenavClass = color;
    },
    handleOffset(value) {
      if (!this.$refs.layout || this.width === null) return;

      if (this.push && this.right) {
        this.$refs.layout.style.width = this.width + value + 'px';
        this.$refs.layout.style.paddingLeft = value + 'px';
      }
      else {
        this.$refs.layout.style.paddingLeft = '0px';
        this.$refs.layout.style.width = this.width + 'px';
      }
    }
  },
  watch: {
    radio(value) {
      switch (value) {
        case "over":
          this.over = true;
          this.push = false;
          break;
        case "push":
          this.push = true;
          this.over = false;
          break;
        default:
          this.push = false;
          this.over = false;
      }
    }
  },
  mixins: [waves]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  min-height: 100vh;
  background-color: #eee;
}

.color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
