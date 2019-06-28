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


