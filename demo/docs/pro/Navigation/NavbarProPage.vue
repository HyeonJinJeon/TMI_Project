<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Navbar</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/navigation/navbar/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />

    <section class="demo-section">
      <h4>Avatar</h4>
      <section>
        <mdb-navbar style="z-index: 0" expand="large" dark color="secondary">
          <mdb-navbar-brand href="#">Navbar</mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav>
              <mdb-nav-item href="#" active>Home</mdb-nav-item>
              <mdb-nav-item href="#">Link</mdb-nav-item>
              <mdb-nav-item class="disabled" href="#">Disabled</mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item secondary-color">
                <mdb-dropdown-toggle
                  tag="a"
                  navLink
                  color="stylish"
                  slot="toggle"
                  waves-fixed
                  >Dropdown</mdb-dropdown-toggle
                >
                <mdb-dropdown-menu color="secondary">
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
            <mdb-navbar-nav right>
              <mdb-nav-item>
                1
                <mdb-icon icon="envelope" />
              </mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item avatar" anchorClass="p-0">
                <mdb-dropdown-toggle
                  tag="a"
                  navLink
                  color="stylish"
                  slot="toggle"
                  waves-fixed
                >
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                    class="rounded-circle z-depth-0"
                    alt="avatar image"
                    height="35"
                  />
                </mdb-dropdown-toggle>
                <mdb-dropdown-menu color="secondary">
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
    </section>

    <section class="demo-section">
      <h4>Multi-level navbar</h4>
      <section>
        <mdb-navbar style="z-index: 0" color="primary" dark>
          <mdb-navbar-brand href="https://mdbootstrap.com/"
            >Navbar</mdb-navbar-brand
          >
          <mdb-navbar-toggler>
            <mdb-navbar-nav>
              <mdb-nav-item href="#" active>Home</mdb-nav-item>
              <mdb-nav-item href="#">Features</mdb-nav-item>
              <mdb-nav-item href="#">Pricing</mdb-nav-item>
              <mdb-dropdown multiLevel tag="li" class="nav-item">
                <mdb-dropdown-toggle
                  slot="toggle"
                  color="primary"
                  navLink
                  tag="a"
                  >Dropdown</mdb-dropdown-toggle
                >
                <mdb-dropdown-menu>
                  <mdb-dropdown-item class="p-0" submenu>
                    <mdb-dropdown class="w-100">
                      <mdb-dropdown-item
                        slot="toggle"
                        submenuIcon="caret-right"
                      >
                        Click me
                      </mdb-dropdown-item>
                      <mdb-dropdown-menu
                        class="ml-2 rounded-0 border-0 z-depth-1"
                      >
                        <mdb-dropdown-item href="#">Item 1</mdb-dropdown-item>
                        <mdb-dropdown-item href="#">Item 2</mdb-dropdown-item>
                        <mdb-dropdown-item href="#">Item 3</mdb-dropdown-item>
                      </mdb-dropdown-menu>
                    </mdb-dropdown>
                  </mdb-dropdown-item>
                  <mdb-dropdown-item class="p-0" submenu>
                    <mdb-dropdown class="w-100">
                      <mdb-dropdown-item
                        slot="toggle"
                        submenuIcon="caret-right"
                      >
                        Click me
                      </mdb-dropdown-item>
                      <mdb-dropdown-menu
                        class="ml-2 rounded-0 border-0 z-depth-1"
                      >
                        <mdb-dropdown-item href="#">Item 1</mdb-dropdown-item>
                        <mdb-dropdown-item href="#">Item 2</mdb-dropdown-item>
                        <mdb-dropdown-item href="#">Item 3</mdb-dropdown-item>
                      </mdb-dropdown-menu>
                    </mdb-dropdown>
                  </mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
            <form>
              <mdb-input
                type="text"
                class="text-white"
                placeholder="Search"
                aria-label="Search"
                label
                navInput
                waves
                waves-fixed
              />
            </form>
          </mdb-navbar-toggler>
        </mdb-navbar>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbContainer,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbNavbarBrand,
  mdbIcon,
  mdbRow
} from "mdbvue";

export default {
  name: "NavbarPage",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbContainer,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbInput,
    mdbNavbarBrand,
    mdbIcon,
    mdbRow,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
