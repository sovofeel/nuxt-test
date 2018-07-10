import Vue from 'vue'

/** Тут пробегаемся циклом по components/common и делаем каждый компонент глобальным  */

const getComponentName = path => {
  let pathElements = path.split('/')

  pathElements.shift()

  let name = pathElements
    .pop()
    .split('.')
    .shift()

  name = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  name = 'c-' + name /** префикс */
  return name
}

const req = require.context('~/components/common', true, /\.vue$/)

let globalComponents = {}
req.keys().forEach(path => {
  const component = req(path)
  let name = getComponentName(path)

  Vue.component(name, component.default)
})


export default ({
  app
}) =>
(app.globalComponents = () => {
  return globalComponents
})
