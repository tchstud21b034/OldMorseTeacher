<template>
  <div>
    <div class="cdc-container">
      <div
        class="cdc"
        style="
          width: 90%;
          padding-bottom: 90%;
          margin-top: 2vw;
          background-color: rgb(238, 238, 238);
        "
      >
        <div class="cdc-sections" style="transform: rotate(0deg)">
          <div
            class="cdc-section cdc-section-right"
            style="transform: rotate(0deg)"
          >
            <div class="cdc-filler" :style="rotationRight"></div>
          </div>
          <div
            class="cdc-section cdc-section-left"
            style="transform: rotate(0deg)"
          >
            <div class="cdc-filler" :style="rotationLeft"></div>
          </div>
        </div>
        <div
          class="cdc-overlay"
          style="
            height: 70%;
            width: 70%;
            top: calc(15%);
            left: calc(15%);
            background-color: rgb(227, 227, 227);
          "
        >
          <div class="cdc-text" style="font-size: 100%">
            <div>
              <h1
                style="
                  margin: 0;
                  font-size: 3vw;
                  font-family: 'Roboto', sans-serif;
                  font-weight: 700;
                "
                :style="textStyle"
              >
                {{ text }}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    precentage: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: "%",
    },
    color: {
      type: String,
      default: "rgb(255, 107, 107)",
    },
  },
  computed: {
    percentInDegrees() {
      return (360 / 100) * this.precentage;
    },
    formatDegreesLeft() {
      if (this.precentage > 50) {
        return this.percentInDegrees - 360;
      }

      return -180;
    },
    formatDegreesRight() {
      if (this.precentage <= 50) {
        return this.percentInDegrees - 180;
      }

      return 0;
    },
    rotationLeft() {
      return {
        transform: "rotate(" + this.formatDegreesLeft + "deg)",
        "background-color": this.color,
      };
    },
    rotationRight() {
      return {
        transform: "rotate(" + this.formatDegreesRight + "deg)",
        "background-color": this.color,
      };
    },
    textStyle() {
      return {
        color: this.color
      };
    },
  },
};
</script>