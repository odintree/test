var PresentList = (function(){
    var sum=0;
    var list = [];


    return {
        addPetToGiftList: function (pet) {
            sum += pet.price;
            list.push(pet); 
        },
        displayList: function(){
            for(var i = 0; i < list.length; i++) {
                console.log(list[i].name + ' - ' + list[i].type, list[i].price); 
            }
        }

    }
}());

function Pet(type){
  var pet = Object.create(Pet.prototype);
  pet.type = type;
  return pet;
}
Animal.prototype = {};


function Kitten(name, price){
  var proto = Object.assign(Pet("kitten"), Kitten.prototype);
  var kitten = Object.create(proto);
  kitten.name = name;
  kitten.price = price;
  return kitten;
}


function Dog(name, price){
  var proto = Object.assign(Pet("dog"), Dog.prototype);
  var dog = Object.create(proto);
  dog.name = name;
  dog.price = price;
  return dog;
}

function  KittenMachine(name,price) {
    var pet = Kitten(name, price)
    return {
        Gift: [
            pet
        ]
    }
};

function  KittenMachineTwoZero(name,price,type='kitten') {
    if (type == 'kitten') var pet = Kitten(name,price);
    else if(type == 'dog') var pet = Dog (name, price);
    else return null; 
    return {
        Gift: [
            pet        
        ]
    }
};
