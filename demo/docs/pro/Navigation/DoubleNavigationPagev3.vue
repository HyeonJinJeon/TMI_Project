<template>
  <mdb-side-nav-2
    v-model="show"
    :data="navigation"
    :over="over"
    @setOffset="togglerOffset = $event"
    v-mdb-resize:start="checkWidth"
  >
    <div slot="header">
      <div class="p-5">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          class="img-fluid"
        />
      </div>
      <hr />
      <ul class="list-unstyled d-flex justify-content-center">
        <li>
          <a href="#" class="px-3 icons-sm fb-ic">
            <mdb-icon color="primary" fab icon="facebook-f" />
          </a>
        </li>
        <li>
          <a href="#" class="px-3 icons-sm pin-ic">
            <mdb-icon color="primary" fab icon="pinterest-p" />
          </a>
        </li>
        <li>
          <a href="#" class="px-3 icons-sm gplus-ic">
            <mdb-icon color="primary" fab icon="google-plus-g" />
          </a>
        </li>
        <li>
          <a href="#" class="px-3 icons-sm tw-ic">
            <mdb-icon color="primary" fab icon="twitter" />
          </a>
        </li>
      </ul>
      <hr />
      <mdb-input label="Search" />
    </div>
    <mdb-navbar slot="nav" position="top" color="white" :toggler="false">
      <mdb-navbar-nav left>
        <mdb-icon
          :style="{
            paddingLeft: togglerOffset + 'px',
            transition: 'padding-left .3s linear'
          }"
          icon="bars"
          color="primary"
          size="lg"
          @click.native="show = !show"
        />
      </mdb-navbar-nav>
      <mdb-navbar-nav class="nav-flex-icons" right>
        <mdb-nav-item
          anchor-class="dark-grey-text"
          to="/navigation/pro/double-navigation-v1"
          waves-fixed
          icon="code-branch"
          ><span class="ml-1">v.1</span></mdb-nav-item
        >
        <mdb-nav-item
          anchor-class="dark-grey-text"
          to="/navigation/pro/double-navigation-v2"
          waves-fixed
          icon="eye"
          ><span class="ml-1">v.2</span></mdb-nav-item
        >
        <mdb-nav-item
          to="/navigation/pro/double-navigation-v3"
          waves-fixed
          icon="file-code"
          far
          ><span class="ml-1">v.3</span></mdb-nav-item
        >
        <mdb-nav-item
          anchor-class="dark-grey-text"
          to="/navigation/pro/double-navigation-v4"
          waves-fixed
          icon="terminal"
          ><span class="ml-1">v.4</span></mdb-nav-item
        >
        <mdb-nav-item
          anchor-class="dark-grey-text"
          to="/navigation/pro/double-navigation-v5"
          waves-fixed
          icon="smile"
          far
          ><span class="ml-1">v.5</span></mdb-nav-item
        >
        <mdb-nav-item
          anchor-class="dark-grey-text"
          to="/navigation/pro/double-navigation-v6"
          waves-fixed
          icon="user"
          far
          ><span class="ml-1">v.6</span></mdb-nav-item
        >
      </mdb-navbar-nav>
    </mdb-navbar>
    <div slot="main" style="height: 100vh">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-white-strong flex-center">
            <div class="container">
              <div class="text-primary ">
                <h2 class="font-weight-bold">
                  Double navigation v.3
                </h2>
                <hr />
                <h3><strong>Navbar:</strong> <u>Fixed</u></h3>
                <h3>
                  <strong>Sidenav:</strong> <u>Side</u> (changing to
                  <u>Over</u> below 900px breakpoint)
                </h3>
                <mdb-btn rounded color="primary" class="mt-5"
                  ><router-link to="/navigation" class="white-text"
                    >Go back to the navigation menu</router-link
                  ></mdb-btn
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </mdb-side-nav-2>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbInput,
  mdbSideNav2,
  mdbBtn,
  mdbIcon,
  waves,
  mdbResize
} from "mdbvue";

export default {
  name: "DoubleNavigationPagev1",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbInput,
    mdbSideNav2,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {
      show: true,
      over: false,
      togglerOffset: 0,
      navigation: [
        {
          name: "Double navigation",
          icon: "bars",
          children: [
            {
              name: "Version 1",
              to: "/navigation/pro/double-navigation-v1"
            },
            {
              name: "Version 2",
              to: "/navigation/pro/double-navigation-v2"
            },
            {
              name: "Version 3",
              to: "/navigation/pro/double-navigation-v3"
            },
            {
              name: "Version 4",
              to: "/navigation/pro/double-navigation-v4"
            },
            {
              name: "Version 5",
              to: "/navigation/pro/double-navigation-v5"
            },
            {
              name: "Version 6",
              to: "/navigation/pro/double-navigation-v6"
            }
          ]
        },
        {
          name: "Getting started",
          icon: "mdb",
          fab: true,
          children: [
            {
              name: "Quick start",
              href:
                "https://mdbootstrap.com/docs/vue/getting-started/quick-start/"
            },
            {
              name: "Technical Support",
              href: "https://mdbootstrap.com/support/"
            }
          ]
        },
        {
          name: "Documentation",
          icon: "graduation-cap",
          href: "https://mdbootstrap.com/docs/vue/"
        }
      ]
    };
  },
  methods: {
    checkWidth() {
      this.over = window.innerWidth < 900;
    }
  },
  mounted() {
    this.checkWidth();
    
    this.$store.commit("toggleDocs", false);
  },
  beforeDestroy() {
    this.$store.commit("toggleDocs", true);
  },
  mixins: [waves],
  directives: {
    mdbResize
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (44).jpg")
    no-repeat center center;
  background-size: cover;
  height: 100%;
}
.navbar i {
  cursor: pointer;
  color: white;
}
</style>
