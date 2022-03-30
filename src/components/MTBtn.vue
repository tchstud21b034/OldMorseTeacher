<template>
    <button class="submit-btn" @click="btnClicked">
      <slot></slot> {{ text }}
    </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Submit",
    },
  },
  methods: {
    btnClicked() {
      this.$emit("submitClick");
    },
  },
};
</script>

<style scoped>
.submit-btn {
  width: 15vw;
  height: 4vw;

  width: calc(50px + 10vw);
  height: calc(13px + 2.5vw);

  filter: drop-shadow(1px 3px 10px rgba(0, 0, 0, 0.25));
  border: 0px;

  font-family: "Inder", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: calc(8px + 1.5vw);

  border-color: #ffd028;
  background: #ffd028;
  border-radius: 8px;
}

.submit-btn:active {
  opacity: 0.5;
}
</style>