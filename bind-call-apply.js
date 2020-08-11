const details = {
    firstName : "Madhob",
    lastName : "karmakar",
    salary : 20000,
    getFullName : function(){
        return (this.firstName, this.lastName);
    },
    chargeBill : function(bill){
        this.salary = this.salary - bill;
        return this.salary;
    }
}
console.log(details);
console.log(details.chargeBill(500));
console.log(details.salary);


const hero = {
    firstName : "Hero",
    lastName : "Alom",
    salary : 20000,
}

// .........Bind............
const heroChargeBill = details.chargeBill.bind(hero);
console.log(hero);
console.log(heroChargeBill(3000));
console.log(hero.salary);
console.log(hero.firstName,hero.lastName);
console.log(details.salary);


// .........call.......
const heroChargeBill = details.chargeBill.call(hero,5000);
console.log(heroChargeBill);
console.log(hero.salary);
console.log(hero);


// ........apply......
const heroChargeBill = details.chargeBill.apply(hero,[5000]);
console.log(hero);