<template>
  <button
    @click="toggleDark"
    class="btn bg-gray-800 m-6 bottom-0 right-0 dark:bg-gray-100 dark:text-gray-800 hover:bg-gray-600 transition duration-400 ease-out fixed"
  >
    {{ message }}
  </button>
</template>

<script>
export default {
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
      default: "Toggle Dark Mode",
    },
  },

  // DEFINING CUSTOM EVENT AND VALIDATING
  //   emits: {
  //     "toggle-dark": function(val) {
  //       if (val) {
  //         return val;

  //     },
  //   },
  data() {
    return {
      darkMode: this.isDark,
    };
  },
  methods: {
    toggleDark() {
      this.darkMode = !this.darkMode;
      this.$emit("toggle-dark", this.darkMode);
    },
  },
};
</script>

<style lang="postcss">
.btn {
  @apply px-6 py-1 text-white font-bold shadow-md rounded-xl;
}
.btn:active {
  @apply bg-gray-200 text-gray-400 outline-none;
}
.btn:focus {
  @apply outline-none;
}
</style>
