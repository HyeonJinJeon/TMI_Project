<template>
  <div v-mdb-resize="checkBreakpoints">
    <!--/.Navbar-->

    <mdb-side-nav-2
      v-model="show"
      :data="navigation"
      :push="push"
      fixed-header
      color="white"
      sidenav-class="grey darken-3"
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
              <mdb-icon class="grey-text" fab icon="facebook-f" />
            </a>
          </li>
          <li>
            <a href="#" class="px-3 icons-sm pin-ic">
              <mdb-icon class="grey-text" fab icon="pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#" class="px-3 icons-sm gplus-ic">
              <mdb-icon class="grey-text" fab icon="google-plus-g" />
            </a>
          </li>
          <li>
            <a href="#" class="px-3 icons-sm tw-ic">
              <mdb-icon class="grey-text" fab icon="twitter" />
            </a>
          </li>
        </ul>
        <hr />
      </div>

      <mdb-navbar slot="nav" tag="div" class="grey" :toggler="false">
        <mdb-navbar-nav left>
          <mdb-icon
            icon="bars"
            class="dark-grey-text"
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
            anchor-class="dark-grey-text"
            to="/navigation/pro/double-navigation-v3"
            waves-fixed
            icon="file-code"
            far
            ><span class="ml-1">v.3</span></mdb-nav-item
          >
          <mdb-nav-item
            active
            anchor-class="white-text"
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
            ><span class="ml-3">v.6</span></mdb-nav-item
          >
        </mdb-navbar-nav>
      </mdb-navbar>

      <div slot="main" style="height: 100vh">
        <div class="view intro-2">
          <div class="full-bg-img">
            <div class="mask rgba-grey-strong flex-center">
              <div class="container">
                <div class="white-text text-center">
                  <h2 class="font-weight-bold">
                    Double navigation v.4
                  </h2>
                  <hr />
                  <h3>
                    <strong>Navbar:</strong> <u>Non-fixed</u>
                  </h3>
                  <h3>
                    <strong>Sidenav:</strong> <u>Side</u> (changing to
                    <u>Push</u> below 900px breakpoint)
                  </h3>
                  <mdb-btn rounded color="grey" class="mt-5"
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
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbSideNav2,
  mdbBtn,
  mdbIcon,
  mdbResize,
  waves
} from "mdbvue";

export default {
  name: "DoubleNavigationPagev1",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbSideNav2,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {
      show: true,
      push: false,
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

  mounted() {
    this.$store.commit("toggleDocs", false);
    this.checkBreakpoints();
  },
  beforeDestroy() {
    this.$store.commit("toggleDocs", true);
  },
  methods: {
    checkBreakpoints() {
      this.push = window.innerWidth < 900;
    }
  },
  mixins: [waves],
  directives: { mdbResize }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (39).jpg")
    no-repeat center center;
  background-size: cover;
  height: 100%;
}
.navbar i {
  cursor: pointer;
  color: white;
}

@media (min-width: 900px) {
  .side-toggler {
    display: none;
  }
}
</style>
