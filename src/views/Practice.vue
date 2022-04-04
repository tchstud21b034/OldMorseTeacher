<template>
  <div>
    <TestWindow :isPractice="true"/>
  </div>
</template>

<script>
import TestWindow from "./Test.vue";

export default {
  components: {
    TestWindow,
  },
};
</script>