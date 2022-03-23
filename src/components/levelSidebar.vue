<template>
  <div style="height: 88.5vh">
    <b-row 
      class="text-center level"
      :class="{ selected: index + 1 === currentLevel }"
      v-for="(level, index) in levels"
      :key="index"
      @click="changeCurrLevel(index + 1)"
    >
      <b-col cols="2"
        ><img :src="star" :class="{ 'deactivate-star': !level.done }"
      /></b-col>
      <b-col style="padding-top: 0.4vh">{{ level.range }}</b-col>
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
  padding-left: 2vw;
  cursor: pointer;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
}
.selected {
  background: rgb(134, 134, 134);
}
.deactivate-star {
  filter: brightness(8);
}
</style>