<template>
  <div style="height: 90.6vh">
    <percent-circle
      :precentage="(numOfDoneLetters * 100) / 26"
      :text="`${numOfDoneLetters}/26`"
      color="#FF8918"
    />
    <percent-circle
      :precentage="calculatedPrecentage"
      :text="`${Math.round(calculatedPrecentage)}%`"
      color="#FF6B6B"
    />
  </div>
</template>

<script>
import PercentCircle from "../components/PercentCircle.vue";

export default {
  props: {
    numOfDoneLetters: {
      type: Number,
      default: 26,
    },
    numOfCorrectLetters: {
      type: Number,
      default: 0,
    },
  },
  components: {
    PercentCircle,
  },
  computed: {
    calculatedPrecentage() {
      if (this.numOfDoneLetters === 0) {
        return 0;
      }
      return (this.numOfCorrectLetters * 100) / this.numOfDoneLetters;
    }
  },
};
</script>