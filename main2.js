var Plate = function(name, description, price, ingredients){
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}
var baconBurger = new Plate('bacon burger', '100% angus beef burger with bacon', '12',[lettuce, tomato, bacon, bun] )







var Menu = function(name, plates){
	this.name = name
	this.plates = plates
}
var Restaurant = function(name, description, menu){
	this.name = name
	this.description = description
	this.menu = menu
}
