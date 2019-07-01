const human = {
    name: 'Irfan',
    age: 23,

    walk: function () {
        console.log(`${human.name} is walking`)
    },

    run: speed => {
        console.log(`${human.name} is running at ${speed} km/h!`)
    }
}
human.walk()
human.run(21)

const key = prompt('What do you want to know about the user?', 'name')

console.log(human[key])

const fruit = prompt('Which fruit to buy?', 'apple')

const bag = {
  
  [fruit]: 5
}

console.log(bag.apple) 
console.log(bag.banana);

const makeUser = (name, age) => {
  return {
    name,
    age
  }
}

const user = makeUser('PelleK', 32)
console.log(user);

const clonedUser = {}

for (let key in user){
    clonedUser[key]=user[key]
}

clonedUser.name= 'RaonK'

console.log(user);
console.log(clonedUser);

const newuser = {
    name: 'John',
    sizes: {
      height: 182,
      width: 50
    }
  }
  
  const newclonedUser = Object.assign({}, newuser)
  
  console.log(newuser.sizes === newclonedUser.sizes)

  newuser.sizes.width++ 
  console.log(newuser) 
  console.log(newclonedUser) 
  
  Object.assign(newclonedUser, {name: 'Jay', sizes:{ height: 179}})

  console.log(newclonedUser);
  