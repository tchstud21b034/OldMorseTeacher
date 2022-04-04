<template>
  <div style="height: 88.5vh">
    <b-row 
      class="text-center level"
      :class="{ selected: index + 1 === currentLevel }"
      v-for="(level, index) in levels"
      :key="index"
      @click="changeCurrLevel(index + 1)"
    >
      <b-col cols="md-2 sm-12"
        ><img :src="star" :class="{ 'deactivate-star': !level.done }"
      /></b-col>
      <b-col style="padding-top: 0.4vh; padding-right: 0px; padding-left: 3vw">{{ level.range }}</b-col>
    </b-row>
  </div>
</template>

<script>
import star from "@/assets/Star.svg";

export default {
  data() {
    return {
      star,
      currentLevel: 1,
    };
  },
  props: {
    levels: {
      type: Array,
      required: true,
    },
  },
  methods: {
    changeCurrLevel(level) {
      this.currentLevel = level;
      this.$emit("currLevel", this.currentLevel);
    },
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "ArrowDown") {
        e.preventDefault();
        this.changeCurrLevel((this.currentLevel % 5) + 1);
      } else if (e.key == "ArrowUp") {
        this.changeCurrLevel(((this.currentLevel + 3) % 5) + 1);
      }
    });
  },
};
</script>

<style scoped>
.level {
  padding: 1vw;
  margin-top: 2vh;
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: calc(7px + 1.4vw);
}
.selected {
  background: rgb(134, 134, 134);
}
.deactivate-star {
  filter: brightness(8);
}
</style>