<template>
  <div class="bg" :style="{ height: height + 'px' }">
    <b-navbar variant="faded" type="light">
      <b-navbar-brand href="#" class="ml-auto">
        <b-img
          alt="logo"
          :src="require('@/assets/logo.svg')"
          class="m-2 m-md-4 float-right"
        >
        </b-img>
      </b-navbar-brand>
    </b-navbar>

    <b-row
      align-h="end"
      class="m-0 my-auto timesection"
      :style="{ height: height - 200 + 'px' }"
    >
      <b-col align-self="end" md="12" lg="9" xl="8" class="text-center">
        <h1>LEEZY BOOST 103</h1>
        <Timer class="my-2" />
        <h5>UNTIL DROP</h5>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Timer from "@/components/TheTimer.vue";
export default {
  name: "DropZone",
  components: {
    Timer,
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style>
.bg {
  background-size: cover;
  background-position: left bottom;
  background-image: url("~@/assets/landing.svg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

h1 {
  font-family: "Roboto";
  font-size: 3rem;
  padding: 2rem 0rem;
  letter-spacing: 0.6rem;
}
h5 {
  letter-spacing: 0.3rem;
}
.timesection {
  padding-bottom: 10rem;
}
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
  .timesection {
    padding-bottom: 5rem;
  }
}
@media (max-width: 576px) {
  h1 {
    padding: 1rem 0rem;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
  .timesection {
    padding-bottom: 0rem;
  }
}
</style>
