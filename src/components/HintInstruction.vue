<template>
  <div>
    <img :src="questionCircle" v-b-tooltip.hover.right :title="hintContent" />
  </div>
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