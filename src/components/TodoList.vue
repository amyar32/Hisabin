<template>
  <div class="container w-11/12 sm:w-3/4 mt-8">
    <h1 class="font-bold text-white text-4xl mb-1">{{ title }}</h1>
    <p class="text-white mb-8">{{ subTitle }}</p>
    <div
      class="flex p-10 w-full h-auto bg-blue-200 dark:bg-gray-300 filter shadow-md rounded"
    >
      <button
        class="btn bg-blue-500 dark:bg-gray-100 dark:text-gray-800 hover:bg-blue-400 transform transition duration-400 ease-out "
        @click="toggleShow"
      >
        Show
      </button>
      <ul v-if="isShow">
        <li v-for="todo in todoList" :key="todo">{{ todo.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["title", "subTitle"],
  props: {
    title: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: "TodoList App using VueJs and TailwindCSS",
      // validator : function(value) {
      //   return some logic
      // }
    },
  },
  data() {
    return {
      todoList: [{ message: "Modol" }, { message: "Makan" }],
      isShow: false,
    };
  },

  methods: {
    toggleShow() {
      this.isShow = !this.isShow;
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
