<template>
  <div class="home">
    <h1 class="welcome">Welcome to Morse Teacher!</h1>
    <p class="intro">
      Ever wanted to learn morse? The simplistic language of dits and dahs?
      Well, this is the site for you! With fun-to-practice levels and a utility
      translater, your path to a morse code master is ready. Feel like you know
      morse? Try out our test to see how much you really know.
    </p>
    <p class="intro">Enjoy!</p>
    <img class="leftImage" :src="leftShape" />
    <img class="rightImage" :src="rightShape" />
  </div>
</template>

<script>
import rightShape from "@/assets/rightShape.png";
import leftShape from "@/assets/homeShape.png";

export default {
  name: "Home",
  data() {
    return {
      rightShape,
      leftShape,
    };
  },
};
</script>

<style scoped>
.welcome {
  font-family: PT Sans Caption;
  font-size: calc(15px + 3.5vw);
  font-style: normal;
  font-weight: 700;
  text-align: left;
  margin-left: 11vw;
  margin-top: 6vh;
}
.intro {
  font-family: PT Sans Caption;
  font-size: calc(10px + 1.3vw);
  font-style: normal;
  font-weight: 700;
  text-align: left;
  margin-left: 11vw;
  margin-top: 2vh;
  max-width: 60vw;
}
.rightImage {
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 41vh;
  width: 35vw;
}
.leftImage {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 41vh;
  width: 60vw;
}
</style>
