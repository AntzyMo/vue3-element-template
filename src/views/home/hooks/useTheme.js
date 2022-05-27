import { ref } from 'vue'

export default () => {
  const colorPicker = ref('#409EFF')
  const changeTheme = (color) => {
    document.body.style.setProperty('--theme-color', color)
  }

  return {
    colorPicker,
    changeTheme,
  }
}
