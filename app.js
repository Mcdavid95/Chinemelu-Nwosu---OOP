"use strict"

class Vehicle {
	constructor (numofseats, numofdoors){
		this.numofseats = numofseats;
		this.numofdoors = numofdoors;
	}
	getDescription() {
		console.log ("This vehicle has " + this.numofseats + " seats and " + this.numofdoors + " doors ");
	}
	static accelerate(){
		console.log("vroom vroom");
	}
	static getVehiclePapers(){
		console.log("Here are your car papers");
	}
}

class Truck extends Vehicle {
	constructor (numofseats, numofdoors, numofwheels){
		super(numofseats, numofdoors); 
		this.numofwheels = 8;
	}
	getVehiclePapers(){
		console.log("Your vehicle has " + this.numofwheels + " wheels and as a result, you get a class C license")
	}
} 

class Car extends Vehicle {
	constructor (numofseats, numofdoors, numofwheels){
		super(numofseats, numofdoors);
		this._engineTechnologySecrets = "V8";
		this.numofwheels = 4;
	}
	getVehiclePapers(){
		console.log("Your vehicle has " + this.numofwheels + " wheels and as a result, you get a class B license")
	}
}

class Motorcycle extends Vehicle {
	constructor (numofseats, numofdoors, numofwheels){
		super(numofseats, numofdoors);
		this.numofwheels = 2;
	}
    getVehiclePapers(){
		console.log("Your vehicle has " + this.numofwheels + " wheels and as a result, you get a class A license")
	}

}


let jaguar = new Car(5, 6, 4);
let harleydavidson = new Motorcycle(1, 0, 2);
console.log(jaguar.getDescription());
console.log(Vehicle.accelerate());
console.log(Vehicle.getVehiclePapers());
console.log(harleydavidson.getVehiclePapers());