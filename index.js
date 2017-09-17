function iterativeLog(array) {
  array.forEach((element,index,array) => {
    console.log(`${index}: ${element}`)
  } )
}

function iterate(callback) {
    var randArray = ['alpha','bravo','charlie']
    randArray.forEach(callback)
    return randArray
}

function doToArray(array,callback) {
  array.forEach(callback)
}
