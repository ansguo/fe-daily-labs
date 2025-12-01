function myNew(constractor, ...args) {
  const obj = {}
  obj.__proto__ = constractor.prototype
  const res = constractor.apply(obj, args)
  console.log('myNew:', res)
  return typeof res === 'object' ? res : obj
}

function Person(name) {
  this.name = name
}

const p1 = new Person('Jack')
console.log(p1.name)
console.log(p1.__proto__ === Person.prototype)

console.log('=====')

const p2 = myNew(Person, 'Jack2')
console.log('p2:', typeof p2)
console.log('p2 name:', p2.name)
console.log('p2 instanceof Person:', p2 instanceof Person)