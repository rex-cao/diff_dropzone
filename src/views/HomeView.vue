<template>
  <div class="home">
    <DropZone />
  </div>
</template>

<script>
// @ is an alias to /src
import DropZone from "@/components/DropZone.vue";

export default {
  name: "HomeView",
  components: {
    DropZone,
  },
};
</script>
