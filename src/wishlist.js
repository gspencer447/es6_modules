import Car from './car';

export class WishList {
    constructor(list, nextId) {
        this.list = list;
        this.nextId = nextId;
    }

    addCar (make, model, year) {
        let car = new Car(++this.nextId, make, model, year);
        this.list.push(car);
    }
    remove(carId) {
        this.list = this.list.filter(car => car.id !== carId);
    }
}
