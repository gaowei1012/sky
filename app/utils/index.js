export const multiLoadData = (store, id) => (...components) => {
  const loadDataArr = [...components].map(component => component.loadData(store, id))
  return new Promise(resolve => Promise.all(loadDataArr).then(() => resolve()).catch(() => resolve()))
}
