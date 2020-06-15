'use strict';

// Задача

// Сеть фастфудов предлагает несколько видов гамбургеров:
// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)
// Гамбургер может быть с одним из нескольких видов начинок:
// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)
// Можно добавить добавки:
// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).
// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).
// Пример работы кода:
// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
// // спросим сколько там калорий
// console.log(“Calories: “ + hamburger.calculateCalories());
// // сколько стоит
// console.log("Price: “ + hamburger.calculatePrice());
// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// // А сколько теперь стоит?
// console.log("Price with sauce: “ + hamburger.calculatePrice());


class Hamburger {
    constructor(size, additive) {
        this.size = size;
        this.additive = additive;
        this.sauce = [];
    }

    static SIZE_SMALL  = {
        price: 50, 
        calorie: 20
    }
        

    static SIZE_BIG  = {
        price: 100, 
        calorie: 40,
    }

    static STUFFING_CHEESE = {
        price: 10, 
        calorie: 20,
    }

    static SIZE_SALAD  = {
        price: 20, 
        calorie: 5,
    }

    static STUFFING_POTATO  = {
        price: 15, 
        calorie: 10,
    }

    static TOPPING_MAYO  = {
        price: 20, 
        calorie: 5,
    }

    static TOPPING_SAUCE  = {
        price: 15, 
        calorie: 0,
    }

    calculateCalories() {
        let sumPrice = this.size.price + this.additive.price;

        for(let i = 0; i < this.sauce.length; i++) {
            sumPrice += this.sauce[i].price
        }
        return sumPrice
    }

    calculatePrice() {
        let sumCalorie = this.size.calorie + this.additive.calorie;

        for(let i = 0; i < this.sauce.length; i++) {
            sumCalorie += this.sauce[i].calorie
        }
        return sumCalorie
    }

    addTopping(sauce) {
        this.sauce.push(sauce);
    }

    deleteTopping(sauce) {
        this.sauce.pop(sauce);
    }
}


const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE)
console.log(hamburger);
console.log("Price: " + hamburger.calculatePrice());
console.log("Calories: " + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log("Price with mayo: " + hamburger.calculatePrice());
console.log("Calories with mayo: " + hamburger.calculateCalories());

hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log("Price with sauce: " + hamburger.calculatePrice());
console.log("Calories with sauce: " + hamburger.calculateCalories());

hamburger.deleteTopping(Hamburger.TOPPING_SAUCE);
console.log("Price without sauce: " + hamburger.calculatePrice());
console.log("Calories without sauce: " + hamburger.calculateCalories());


console.log("Ниже второй вариант решения")

// class Hamburger {
//     constructor(obj1, obj2) {
//         this.price = obj1.price;
//         this.calorie = obj2.calorie;
//     }

//     static SIZE_SMALL (price = 50, calorie = 20) {
//         this.price = price
//         this.calorie = calorie

//         return this
//     }

//     static SIZE_BIG (price = 100, calorie = 40) {
//         this.price = price;
//         this.calorie = calorie;

//         return this
//     }

//     static STUFFING_CHEESE (price = 10, calorie = 20) {
//         this.price += price;
//         this.calorie += calorie;

//         return this
//     }

//     static STUFFING_SALAD (price = 20, calorie = 5) {
//         this.price += price;
//         this.calorie += calorie;

//         return this
//     }

//     static STUFFING_POTATO (price = 15, calorie = 10) {
//         this.price += price;
//         this.calorie += calorie;
        
//         return this
//     }

//     static TOPPING_MAYO (price = 20, calorie = 5) {
//         this.price += price;
//         this.calorie += calorie;

//         return this
//     }

//     static TOPPING_SAUCE (price = 15, calorie = 0) {
//         this.price += price;
//         this.calorie += calorie;

//         return this
//     }

//     calculateCalories() {
//         return this.calorie
//     }

//     calculatePrice() {
//         return this.price
//     }

//     addTopping(obj) {
//         this.price = obj.price
//         this.calorie = obj.calorie
//     }
// }


// const hamburger = new Hamburger(Hamburger.SIZE_BIG(), Hamburger.STUFFING_CHEESE())
// console.log(hamburger);
// console.log("Price: " + hamburger.calculatePrice());
// console.log("Calories: " + hamburger.calculateCalories());

// hamburger.addTopping(Hamburger.TOPPING_MAYO());
// console.log("Price with mayo: " + hamburger.calculatePrice());
// console.log("Calories with mayo: " + hamburger.calculateCalories());

// hamburger.addTopping(Hamburger.TOPPING_SAUCE());
// console.log("Price with sauce: " + hamburger.calculatePrice());
// console.log("Calories with sauce: " + hamburger.calculateCalories());
