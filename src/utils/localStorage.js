const getLocalItem = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key))
  } catch (error) {
    console.error('Ошибка получения данных из localStorage', error)
    return null
  }
}

const setLocalItem = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Ошибка установки данных в localStorage', error)
  }
}

export { getLocalItem, setLocalItem }
