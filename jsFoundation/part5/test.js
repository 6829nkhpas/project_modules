function order(teaType){
    function confirmaion(){
        return "order has been confirmed"
    }
    return confirmaion();
}
//console.log(order("lemon tea"));

// arrow function -3
const calculateTotal = (price, quantity) => {
    return price * quantity;

}

const totalCost = calculateTotal(222,32);
//console.log(totalCost);
 
// function as a para meter or higher order function -04

const makeTea =(tea) =>{
    return `the tea is ${tea}`
}
const proccessTea =(typeTea) =>{
    return typeTea("lemon tea");
}
//console.log(proccessTea(makeTea));
//SPECil feature of function that allows the value of the code to hunted

const createTeaMaker = (flav)=> {
    return function(teaType){
        return `making ${teaType} ${flav}`;
    }
}
const teamaker = createTeaMaker("light");
console.log(teamaker("lemon tea"));
