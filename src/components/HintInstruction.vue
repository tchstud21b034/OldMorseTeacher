<template>
  <img
    :src="questionCircle"
    v-b-tooltip.hover.right
    :title="hintContent"
    style="width: 2vw; height: 2vw; vertical-align: super;"
  />
</template>

<script>
import questionCircle from "@/assets/questionCircle.png";

export default {
  data() {
    return {
      questionCircle,
    };
  },
  props: {
    hintContent: {
      type: String,
      default: "hint",
    },
  },
};
</script>