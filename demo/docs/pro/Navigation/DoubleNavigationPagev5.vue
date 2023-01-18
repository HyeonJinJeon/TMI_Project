<template>
  <div class="layout">
    <!--/.Navbar-->

    <mdb-side-nav-2
      :value="true"
      :data="navigation"
      push
      slim
      :slim-collapsed="collapsed"
      @toggleSlim="collapsed = $event"
      sidenav-class="unique-color-dark"
      color="white"
    >
      <div slot="header">
        <div
          class="d-flex align-items-center my-4"
          :class="
            collapsed ? 'justify-content-center' : 'justify-content-start'
          "
        >
          <mdb-avatar :width="40" style="flex: 0 0 auto">
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg"
              class="img-fluid rounded-circle z-depth-1"
            />
          </mdb-avatar>
          <p
            class="m-t mb-0 ml-4 p-0"
            style="flex: 0 2 auto"
            v-show="!collapsed"
          >
            <strong
              >John Smith
              <mdb-icon color="success" icon="circle" class="ml-2" size="sm"
            /></strong>
          </p>
        </div>
        <hr class="w-100" />
      </div>
      <div slot="content" class="mt-5 d-flex justify-content-center">
      <mdb-btn tag="a" class="mx-0" size="sm" transparent floating :icon="collapsed ? 'chevron-right' : 'chevron-left'" icon-class="white-text" @click="collapsed = !collapsed"></mdb-btn>
      </div>
      <mdb-navbar
        slot="nav"
        tag="div"
        :toggler="false"
        position="top"
        dark
        color="unique-color-dark"
      >
        <mdb-navbar-nav class="nav-flex-icons" right>
          <mdb-nav-item
            to="/navigation/pro/double-navigation-v1"
            waves-fixed
            icon="code-branch"
            ><span class="ml-1">v.1</span></mdb-nav-item
          >
          <mdb-nav-item
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
            to="/navigation/pro/double-navigation-v4"
            waves-fixed
            icon="terminal"
            ><span class="ml-1">v.4</span></mdb-nav-item
          >
          <mdb-nav-item
            active
            to="/navigation/pro/double-navigation-v5"
            waves-fixed
            icon="smile"
            far
            ><span class="ml-1">v.5</span></mdb-nav-item
          >
          <mdb-nav-item
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
            <div class="mask rgba-blue-grey-strong flex-center">
              <div class="container">
                <div class="white-text text-center">
                  <h2 class="font-weight-bold">
                    Double navigation v.5
                  </h2>
                  <hr />
                  <h3><strong>Navbar:</strong> <u>Fixed</u></h3>
                  <h3>
                    <strong>Sidenav:</strong> <u>Push</u> 
                  </h3>
                  <mdb-btn rounded color="white" class="mt-5"
                    ><router-link to="/navigation" class="dark-grey-text"
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
  mdbAvatar,
  mdbBtn,
  mdbIcon,
  waves
} from "mdbvue";

export default {
  name: "DoubleNavigationPagev1",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbSideNav2,
    mdbAvatar,
    mdbBtn,
    mdbIcon
  },
  data() {
    return {
      show: true,
      collapsed: false,
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
  },
  beforeDestroy() {
    this.$store.commit("toggleDocs", true);
  },
  mixins: [waves]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("https://mdbootstrap.com/img/Photos/Others/img (55).jpg")
    no-repeat center center;
  background-size: cover;
  height: 100%;
}

.navbar i {
  cursor: pointer;
  color: white;
}
</style>
