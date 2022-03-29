<template>
  <div>
    <h1 class="title">Translate</h1>
    <textarea type="text" class="input" v-model="inputToTranslate" />
    <b-row style="float: center" class="justify-content-md-center">
      <b-col lg="3">
        <Button text="switch" @submitClick="switchTranslation">
          <font-awesome-icon icon="fa-solid fa-arrows-up-down"
        /></Button>
      </b-col>
      <b-col lg="3"><Button text="clear" @submitClick="clear" /></b-col>
    </b-row>
    <textarea disabled class="input" :value="translate"></textarea>
  </div>
</template>

<script>
import Button from "../components/MTBtn.vue";
import { morseLetters } from "../data/config";

export default {
  data() {
    return {
      inputToTranslate: "",
    };
  },
  methods: {
    clear() {
      this.output = "";
      this.inputToTranslate = "";
    },
    switchTranslation() {
      this.inputToTranslate = this.translate;
    },
    translateToMorse(english) {
      english = english.toLowerCase();
      let output = "";
      [...english].forEach((letter) => {
        if (letter === " ") {
          output += "   ";
        } else {
          output += morseLetters[letter.charCodeAt(0) - 97] + " ";
        }
      });
      return output.slice(0, -1);
    },
    translateFromMorse(morse) {
      const words = morse.split("   ");
      let letters = [];
      words.forEach((word) => {
        letters.push(word.split(" "));
      });

      let output = "";
      letters.forEach((word) => {
        word.forEach((letter) => {
          if (letter !== "") {
            output += String.fromCharCode(
              morseLetters.indexOf(letter.replace(/-/g, "_")) + 97
            );
          }
        });

        output += " ";
      });

      return output.slice(0, -1);
    },
  },
  computed: {
    translate() {
      if (!/[^A-Za-z ]/.test(this.inputToTranslate)) {
        return this.translateToMorse(this.inputToTranslate);
      } else if (!/[^-._ ]/.test(this.inputToTranslate)) {
        return this.translateFromMorse(this.inputToTranslate);
      } else {
        return "invalid input (must be either pure morse(.,-,_) or pure text (a-z)";
      }
    },
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.title {
  font-family: PT Sans Caption;
  font-size: 4vw;
  font-weight: 700;
  margin-left: 4vw;
  margin-top: 4vh;
}
.input {
  width: 60vw;
  height: 15vw;
  margin-top: 3vw;
  padding: 1vw;

  background: #ffffff;
  border: 1px solid #bebebe;
  box-sizing: border-box;
  border-radius: 8px;

  font-family: PT Sans Caption;
  font-size: 2vw;
}
.input:focus {
  outline: none !important;
  border: 1px solid #bebebe;
  box-shadow: 0 0 4px #719ece;
}
</style>