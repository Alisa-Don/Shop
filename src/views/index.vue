<template>
  <div class="index">{{ userName }}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userName"]),
  },
};
</script>

<style></style>
