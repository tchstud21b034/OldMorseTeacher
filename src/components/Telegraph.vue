<template>
  <div id="telegraph">
    <div>
      <b>output: {{ output }} </b>
    </div>
    <div>
      <img class="base" src="../assets/telebase.png" alt="" />
    </div>
    <div>
      <img class="paddle-stick" src="../assets/paddleStick.png" alt="" />
    </div>
    <div>
      <img
        class="paddle-btn"
        @mouseup="paddleRelease"
        @mousedown="paddlePressed"
        @mouseleave="isClicked = false"
        @keydown.space="paddlePressed"
        @keyup.space="paddleRelease"
        tabindex="0"
        :class="{ clickedImage: isClicked, NotclickedImage: !isClicked }"
        src="../assets/paddleUnpressed.png"
      />
    </div>
  </div>
</template>

<script>
import config from "@/data/config.json";

export default {
  name: "telegraph",
  data() {
    return {
      isClicked: false,
      output: "",
      start: new Date(),
      timer: 0,
      config,
      timeRatio: null,
      frequency: null,
    };
  },
  methods: {
    paddlePressed() {
      this.isClicked = true;
      if (
        this.timer >= this.timeRatio.letterSpace * this.frequency &&
        this.timer < this.timeRatio.wordSpace * this.frequency
      ) {
        this.output += " ";
      } else if (this.timer >= this.timeRatio.wordSpace * this.frequency) {
        this.output += " | ";
      }

      this.start = new Date();
    },
    paddleRelease() {
      this.isClicked = false;
      this.output += this.calculateOutputByTime(this.timer);
    },
    calculateOutputByTime(time) {
      return time < this.timeRatio.dot * this.frequency ? "." : "-";
    },
  },

  mounted() {
    setInterval(() => {
      let current = new Date();
      this.timer = current - this.start;
    }, 5);
    this.timeRatio = this.config["timeRatio"];
    this.frequency = 10000 /  this.config["frequency"].advanced;
  },
};
</script>


<style scoped>
.clickedImage {
  width: 10%;
  height: 10%;
}
.NotclickedImage {
  width: 12%;
  height: 12%;
}
.base {
  width: 10%;
}
.paddle-stick {
  position: relative;
  z-index: 1;
  width: 5%;
  top: -200px;
}
.paddle-btn {
  position: relative;
  z-index: 1;
  top: -300px;

  outline: none;
}
</style>