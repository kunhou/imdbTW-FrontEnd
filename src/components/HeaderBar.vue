<template>
    <b-navbar toggleable type="inverse" variant="success" class="headerbar">
    
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="#">MORANK</b-link>

      <b-collapse is-nav id="nav_collapse">
          <b-nav is-nav-bar>
            <b-nav-item>
              <router-link to="/" class="nav-link">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="movie" class="nav-link">Movie</router-link>
            </b-nav-item>
          </b-nav>

          <!-- Navbar dropdowns -->
          <b-nav is-nav-bar class="ml-auto">  
            <b-nav-item-dropdown text="Drop Down" right>
              <b-dropdown-item to="#">EN</b-dropdown-item>
              <b-dropdown-item to="#">ES</b-dropdown-item>
              <b-dropdown-item to="#">RU</b-dropdown-item>
              <b-dropdown-item to="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <!-- Using text slot -->
            <template slot="text">
              <span style="font-weight: bold;">User</span>
            </template>
            <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item to="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>

    </b-navbar>
</template>

<style lang="scss">
nav.headerbar{
  background:#2980B9 !important;
}
</style>