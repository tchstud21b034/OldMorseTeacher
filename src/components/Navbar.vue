<template>
  <b-navbar
    toggleable="sm"
    type="light"
    style="
      background: linear-gradient(155.8deg, #fed33b 16.47%, #fec34f 82.84%);
    "
  >
    <b-navbar-brand id="router-link" to="/">
      <img alt="Vue logo" src="../assets/logo.svg" class="logo" />
    </b-navbar-brand>
    <h1 class="title">Morse Teacher</h1>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item id="router-link" to="/learn">Learn</b-nav-item>
        <b-nav-item id="router-link" to="/read">Practice</b-nav-item>
        <b-nav-item id="router-link" to="/test">Test</b-nav-item>
        <b-nav-item id="router-link" to="/translate">Translate</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>



<style scoped>
.title {
  font-family: PT Sans Narrow;
  font-size: 3.5vw;
  font-style: normal;
  font-weight: 400;
  text-align: right;
  padding-top: 0.5vw;
  margin-right: 2vw;
}
.nav-item {
  font-family: PT Sans Narrow;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: left;
  padding-top: 1vw;
}
.logo {
  width: 7vw;
}
</style>