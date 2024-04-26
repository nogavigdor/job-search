const fruits = ['apple', 'banana', 'cherry']
const vegetables = ['carrot', 'cucumber', 'potato']

const food = [...fruits, ...vegetables]
console.log(food) // ['apple', 'banana', 'cherry', 'carrot', 'cucumber', 'potato']
console.log([...fruits, vegetables])
