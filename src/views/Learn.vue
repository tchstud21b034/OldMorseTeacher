<template>
  <div>
    <b-row style="margin-right: 0px">
      <b-col cols="2" style="background: #e3e3e3">
        <Sidebar :levels="levels" @currLevel="updateCurrLevel" />
      </b-col>
      <b-col style="padding-right: 0;">
        <mainPanel @completed="completeLevel" :level="currLevel" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Sidebar from "@/components/levelSidebar.vue";
import mainPanel from "@/components/MainPanel.vue";

export default {
  data() {
    return {
      currLevel: 1,
      levels: [
        { range: "A-E", done: false },
        { range: "F-J", done: false },
        { range: "K-O", done: false },
        { range: "P-T", done: false },
        { range: "U-Z", done: false },
      ],
    };
  },
  methods: {
    updateCurrLevel(level) {
      this.currLevel = level;
    },
    completeLevel() {
      this.levels[this.currLevel - 1].done = true;
      sessionStorage.setItem(`star${this.currLevel}`, true);
    }
  },
  created() {
    for(let level = 1; level <= 5; level ++) {
      if (sessionStorage.getItem(`star${level}`)) {
        this.levels[level - 1].done = true;
      }
    }
  },
  components: {
    Sidebar,
    mainPanel,
  },
};
</script>
