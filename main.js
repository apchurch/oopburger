var FoodItem = function(name, calories, vegan, glutenFree){
	this.name = name
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
}
var bacon = new FoodItem('bacon', 44, false, true)
var lettuce = new FoodItem('lettuce', 5, true, true)
var tomato = new FoodItem('tomato', 22, true, true)
var bun = new FoodItem('bun', 120, true, false)

console.log(bacon)
console.log(lettuce)
console.log(tomato)
console.log(bun)

FoodItem.prototype.stringify = function(){
	if(this.vegan === true && this.glutenFree === true){
	console.log(this.name + ' has ' + this.calories + ' calories,' + ' is vegan, ' + 'and is gluten free.')
}
	else if(this.vegan === true && this.glutenFree === false){
		console.log(this.name + ' has ' + this.calories + ' calories,' + ' is vegan, ' + 'but is not gluten free.')
	}
	else if(this.vegan === false && this.glutenFree === true){
		console.log(this.name + ' has ' + this.calories + ' calories,' + ' is not vegan, ' + 'but is gluten free.')
	}	
	else if(this.vegan === false && this.glutenFree === false){
		console.log(this.name + ' has ' + this.calories + ' calories,' + ' is not vegan, ' + 'and is not gluten free.')
	}


}
bacon.stringify()
lettuce.stringify()
tomato.stringify()
bun.stringify()


var Plate = function(name, description, price, ingredients, calories, vegan, glutenFree){
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
}
var baconBurger = new Plate('bacon burger', '100% angus beef burger with bacon', 12, 'bacon, lettuce, tomato, bun', 191, false, false)
var greenSalad = new Plate('green salad', 'green salad with tomatoes and bacon bits', 9, 'lettuce, tomato, bacon', 81, false, true)


var Menu = function(name, plates){
	this.name = name
	this.plates = plates
}
var lunchMenu = new Menu('lunch menu', 'bacon burger, green salad')
// var dinnerMenu = new Menu('dinner menu', Plate[1])

var Restaurant = function(name, description, menu){
	this.name = name
	this.description = description
	this.menu = menu
}
var BobsBurgers = new Restaurant('Bobs Burgers', 'a burger joint', lunchMenu)

Plate.prototype.stringify = function(){
	if(this.vegan === true && this.glutenFree === true){
		console.log(this.name + ': ' + ' Ingredients: ' + this.ingredients + '. ' + 'Price: $' + this.price + '.' + ' Calories: ' + this.calories + '.' + ' *This food is Vegan. ' + '*This food is gluten free.')
}
	else if(this.vegan === false && this.glutenFree === true){
		console.log(this.name + ': ' + ' Ingredients: ' + this.ingredients + '. ' + 'Price: $' + this.price + '.' + ' Calories: ' + this.calories + '.' + ' *This food is NOT Vegan. ' + '*This food is gluten free.')
	}
	else if(this.vegan === true && this.glutenFree === false){
		console.log(this.name + ': ' + ' Ingredients: ' + this.ingredients + '. ' + 'Price: $' + this.price + '.' + ' Calories: ' + this.calories + '.' + ' *This food is Vegan. ' + '*This food is NOT gluten free.')
	}
	else {
		console.log(this.name + ': ' + ' Ingredients: ' + this.ingredients + '. ' + 'Price: $' + this.price + '.' + ' Calories: ' + this.calories + '.' + ' *This food is NOT Vegan. ' + '*This food is NOT gluten free.')
	}
}
// greenSalad.stringify()
// baconBurger.stringify()

Menu.prototype.stringify = function(){
	console.log(this.name + ': ' + this.plates)
}
// lunchMenu.stringify()

Restaurant.prototype.stringify = function(){
	console.log(this.name + ': ')

}
BobsBurgers.stringify()
lunchMenu.stringify()
baconBurger.stringify()
greenSalad.stringify()
