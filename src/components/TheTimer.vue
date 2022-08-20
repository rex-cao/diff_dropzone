<template>
  <div>
    <section>
      <vac :end-time="countTime" @finish="finish()">
        <template v-slot:process="{ timeObj }">
          <b-row align-h="center">
            <b-col cols="auto" class="mx-1 mx-md-2">
              <b-row>
                <b-col class="number">
                  <span>{{ `${timeObj.d.charAt(0)}` }}</span>
                </b-col>
                <b-col class="number">
                  <span>{{ `${timeObj.d.charAt(1)}` }}</span>
                </b-col>
              </b-row>
              <h2>DAYS</h2>
            </b-col>
            <b-col cols="auto" class="mx-1 mx-md-2">
              <b-row>
                <b-col class="number">
                  <span>{{ `${timeObj.h.charAt(0)}` }}</span>
                </b-col>
                <b-col class="number">
                  <span>{{ `${timeObj.h.charAt(1)}` }}</span>
                </b-col>
              </b-row>
              <h2>HOURS</h2>
            </b-col>
            <b-col cols="auto" class="mx-1 mx-md-2">
              <b-row>
                <b-col class="number">
                  <span>{{ `${timeObj.m.charAt(0)}` }}</span>
                </b-col>
                <b-col class="number">
                  <span>{{ `${timeObj.m.charAt(1)}` }}</span>
                </b-col>
              </b-row>
              <h2>MINS</h2>
            </b-col>
            <b-col cols="auto" class="mx-1 mx-md-2">
              <b-row>
                <b-col class="number">
                  <span>{{ `${timeObj.s.charAt(0)}` }}</span>
                </b-col>
                <b-col class="number">
                  <span>{{ `${timeObj.s.charAt(1)}` }}</span>
                </b-col>
              </b-row>
              <h2>SECS</h2>
            </b-col>
          </b-row>
        </template>
        <template v-slot:finish>
          <span>Done!</span>
        </template>
      </vac>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["countTime"]),
    setTimer() {
      if (this.countTime > 0) return false;
      else return true;
    },
    endTime() {
      let sec = 1000,
        min = 60 * sec,
        hour = 60 * min,
        day = 24 * hour;
      return 13 * day + 8 * hour + 12 * min + 5 * sec;
    },
  },
  methods: {
    getCurrentTime() {
      const currentTime = new Date().getTime(),
        startTime = localStorage.getItem("startTime");
      if (startTime > 0) {
        let newTime = currentTime + this.endTime - (currentTime - startTime);
        this.$store.dispatch("countTime", newTime);
      } else {
        this.$store.dispatch("countTime", currentTime + this.endTime);
      }
      localStorage.setItem("startTime", currentTime);
    },
    finish() {
      this.$store.dispatch("countTime", 0);
    },
  },
  mounted() {
    this.getCurrentTime();
  },
};
</script>

<style scoped>
h2 {
  font-family: "Roboto";
  margin: 0.5rem 0;
}

.number {
  font-family: "RozhaOne";
  font-size: 3rem;
  color: white;
  background-color: black;
  padding: 0.5rem;
  margin: 0 0.5rem;
  width: 3rem;
}

@media (max-width: 992px) {
  .number {
    font-size: 2rem;
    letter-spacing: initial;
  }
}
@media (max-width: 768px) {
  .number {
    font-size: 2rem;
    letter-spacing: initial;
  }
}
@media (max-width: 576px) {
  .number {
    font-size: 1.4rem;
    margin: 0 0.2rem;
    padding: 0.2rem;
    width: 2rem;
  }
  h2 {
    font-size: 1rem;
  }
}
</style>
