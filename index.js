localStorage.clear()
localStorage.setItem('name', JSON.stringify('Tom'))
localStorage.setItem('array', JSON.stringify([1, 2, 3, 4]))
localStorage.setItem('age', JSON.stringify(15));

console.log(JSON.parse(localStorage.getItem('age')))

export const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value)
    } catch(e) {
      newValue = value
    }

    return {
      ...acc, [key]: newValue
    }
  }, {})
}
console.log(getLocalStorageData());