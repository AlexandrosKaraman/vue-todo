const App = {
  data() {
    return {
      placeholderString: "Введите название задачи",
      title: "Список задач",
      inputValue: "",
      notes: ['Задача 1', 'Задача 2'],

    }
  },
  methods: {

    addNewNotes() {
      if (this.inputValue !== "") {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    toUpperCase(item) {
      return item.toUpperCase()
    },

    removeNote(index) {
      this.notes.splice(index, 1)
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    },

  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ""
      }
    }
  }
}

Vue.createApp(App).mount('#app')