import Car from './car';

export default class WishList {
    constructor() {
        this.list = [];
        this.nextId = 0;
    }

    add (make, model, year) {
        let car = new Car(++this.nextId, make, model, year);
        this.list.push(car);
    }
    remove(carId) {
        this.list = this.list.filter(car => carId !== car.id);
    }
}
