<template>
  <div>
    <b-row style="margin-right: 0px">
      <b-col cols="2" style="background: #e3e3e3; padding-right: 0px">
        <SidePanel
          :numOfCorrectLetters="numOfCorrect"
          :numOfDoneLetters="numOfDone"
        />
      </b-col>
      <b-col cols="10" style="padding-right: 0px">
        <TestPanel
          :isPractice="isPractice"
          :isTest="true"
          @numOfCorrect="updateData"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SidePanel from "@/components/PercentSidePanel.vue";
import TestPanel from "@/components/MainPanel.vue";

export default {
  data() {
    return {
      numOfCorrect: 0,
      numOfDone: 0,
    };
  },
  components: {
    SidePanel,
    TestPanel,
  },
  methods: {
    updateData(correct, done) {
      this.numOfCorrect = correct;
      this.numOfDone = done;
    },
  },
  props: {
    isPractice: {
      type: Boolean,
      default: false,
    },
  },
};
</script>