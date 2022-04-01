<template>
  <div>
    <h1
      class="translate-instruction"
      :class="isCorrectAnswer ? 'correct' : 'inCorrect'"
    >
      {{ instructionTitle }}
    </h1>
    <div class="morse-input-area">
      <input type="text" class="morse-input-field" v-model="morseInput" />
      <h1 :style="scoreStyle" class="score">
        {{ `remaining: ${score}` }}
      </h1>
      <div style="float: left">
        <SubmitBtn @submitClick="submitAnswer" style="margin-right: 1vw" />   <Hint :hintContent="instructions" />
      </div>
    </div>
    <img class="rightImage" :src="Shape" />
  </div>
</template>

<script>
import mData from "@/data/config.json";
import SubmitBtn from "@/components/MTBtn.vue";
import Shape from "@/assets/LearnTabShape.png";
import Hint from "@/components/HintInstruction.vue";

export default {
  data() {
    return {
      morseInput: "",
      currentLetter: " ",
      letters: [""],
      isCorrectAnswer: true,
      morseArr: mData.morseLetters,
      numOfCorrect: 0,
      Shape,
    };
  },
  props: {
    level: {
      type: Number,
    },
    isLearn: {
      type: Boolean,
      default: true,
    },
    isTest: {
      type: Boolean,
      default: false,
    },
    isPractice: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    instructions() {
      let instructions;
      if (this.isPractice) {
        instructions = `get morse code then enter its corresponding letter and hit the submit button or press 
the "Enter" key to confirm.
In the left sidebar you will see your success precentage and progress.`;
      } else if (this.isTest) {
        instructions = `get a character, enter its code (_ or .) and hit the submit button or press the "Enter" key to confirm.
In the left sidebar you will see your success precentage and progress.`;
      } else {
        instructions = `get a character, enter its code (_ or .) and hit the submit button or press the "Enter" key to confirm.
        under the input field you will see a score counter - your objective in every level is to bring 
        it down to 0.
        but first, choose one of the 5 learning level in the left sidebar (these simply limits the practice to a certain range
        of Letters).`;
      }

      return instructions;
    },
    score() {
      if (this.currentLetter === undefined) {
        this.$emit("completed");
        return 0;
      }

      return this.letters.length + 1;
    },
    scoreStyle() {
      return this.isTest || this.isPractice ? { visibility: "hidden" } : {};
    },
    currLetterInMorse() {
      return this.translateToMorse(this.currentLetter);
    },
    instructionTitle() {
      let title = "";
      if (this.currentLetter) {
        if (!this.isPractice) {
          title += `Translate the letter: ${this.currentLetter}`;
          if (!this.isCorrectAnswer && !this.isTest) {
            title += `(${this.currLetterInMorse})`;
          }
        } else {
          title += `Translate: ${this.translateToMorse(this.currentLetter)}`;
          if (!this.isCorrectAnswer && !this.isTest) {
            title += `(${this.currentLetter})`;
          }
        }
      } else {
        if (this.isPractice) {
          title += `Practice Complete! you scored ${this.numOfCorrect} out of 26`;
        } else if (this.isTest) {
          title += `Test Complete! you scored ${this.numOfCorrect} out of 26`;
        } else {
          title += "Level Completed!";
        }
      }

      return title;
    },
  },
  methods: {
    translateToMorse(letter) {
      return letter ? this.morseArr[letter.charCodeAt("0") - 97] : undefined;
    },
    submitLearnAnswer() {
      if (this.isCorrectMorse()) {
        this.currentLetter = this.nextLetter();
        this.isCorrectAnswer = true;
      } else {
        this.letters.push(this.currentLetter);
        if (this.isCorrectAnswer) {
          this.letters.push(this.currentLetter);
        }
        this.isCorrectAnswer = false;
      }
    },
    submitTestAnswer() {
      this.isCorrectAnswer = this.isCorrectMorse();
      if (this.isCorrectAnswer) {
        this.numOfCorrect++;
      }
      this.$emit(
        "numOfCorrect",
        this.numOfCorrect,
        this.currentLetter.charCodeAt(0) - 96
      );
      if (this.currentLetter != "z") {
        this.currentLetter = String.fromCharCode(
          this.currentLetter.charCodeAt(0) + 1
        );
      } else {
        this.currentLetter = undefined;
      }
    },
    submitPracticeAnswer() {
      this.isCorrectAnswer = this.isCorrectMorse();
      if (this.isCorrectAnswer) {
        this.numOfCorrect++;
      }
      this.currentLetter = this.nextLetter();
      this.$emit(
        "numOfCorrect",
        this.numOfCorrect,
        this.currentLetter ? 25 - this.letters.length : 26
      );
    },
    submitAnswer() {
      if (this.isPractice) {
        this.submitPracticeAnswer();
      } else if (this.isTest) {
        this.submitTestAnswer();
      } else {
        this.submitLearnAnswer();
      }

      this.morseInput = "";
    },
    isCorrectMorse() {
      if (this.isPractice) {
        return this.morseInput === this.currentLetter;
      }
      return (
        this.morseInput.replace(/ /g, "").replace(/-/g, "_") ===
        this.currLetterInMorse
      );
    },
    nextLetter() {
      return this.letters.splice(
        Math.floor(Math.random() * this.letters.length),
        1
      )[0];
    },
    generateLettersByLevel(level) {
      let amountOfLettersInLevel = Math.floor(
        mData.letterDistribution.amountOfLetters /
          mData.letterDistribution.amountOfLevels
      );

      for (
        let asciiVal = 97 + amountOfLettersInLevel * (level - 1);
        asciiVal < 97 + amountOfLettersInLevel * level;
        asciiVal++
      ) {
        for (
          let numOfInstances = 0;
          numOfInstances < mData.letterDistribution.default_weight;
          numOfInstances++
        ) {
          this.letters.push(String.fromCharCode(asciiVal));
        }
      }
      if (level === 5) {
        for (
          let numOfInstances = 0;
          numOfInstances < mData.letterDistribution.default_weight;
          numOfInstances++
        ) {
          this.letters.push("z");
        }
      }
    },
  },
  components: {
    SubmitBtn,
    Hint,
  },
  watch: {
    level(newLevel) {
      this.letters = [];
      this.generateLettersByLevel(newLevel);
      this.currentLetter = this.nextLetter();
      this.isCorrectAnswer = true;
    },
    morseInput() {
      if (this.isPractice) {
        if (/[^A-Za-z ]/.test(this.morseInput) || this.morseInput.length > 1) {
          this.morseInput = this.morseInput.substring(1);
        }
      } else {
        if (/[^-._ ]/.test(this.morseInput)) {
          this.morseInput = this.morseInput.substring(0, this.morseInput.length - 1);
        }
      } 
    },
  },
  mounted() {
    if (this.isPractice) {
      this.letters = [];
      for (let letter = 97; letter <= 122; letter++) {
        this.letters.push(String.fromCharCode(letter));
      }
      this.currentLetter = this.nextLetter();
    } else if (this.isTest) {
      this.currentLetter = "a";
    } else {
      this.letters = [];
      this.generateLettersByLevel(this.level);
      this.currentLetter = this.nextLetter();
    }
  },
  created() {
    window.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        this.submitAnswer();
      }
    });
  },
};
</script>

<style scoped>
.rightImage {
  position: fixed;
  bottom: 0px;
  right: 0px;
  height: 75vh;
  width: 30vw;
}

.translate-instruction {
  font-family: PT Sans Caption;
  font-weight: 700;
  text-align: left;
  margin-left: 4vw;
  margin-top: 4vh;
  font-size:calc(10px + 2.8vw);
}

.morse-input-area {
  width: 35vw;
  margin-left: 4vw;
}

.morse-input-field {
  width: 100%;
  height: 6vh;
  float: left;

  font-family: PT Sans Caption;
  font-size: calc(15px + 2.7vw);

  margin-top: 3.5vh;
  background: #ffffff;
  border: 1px solid #bebebe;
  padding: 2vh;
  padding-bottom: 4vh;
  border-radius: 8px;
}

.score {
  width: 100%;
  font-family: inder;
  font-style: normal;
  font-weight: normal;
  font-size: 2vw;
  text-align: right;
  font-size:calc(8px + 1.2vw);
}

.correct {
  color: rgb(11, 192, 4);
}

.inCorrect {
  color: red;
}
</style>