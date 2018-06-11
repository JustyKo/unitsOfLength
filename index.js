// function converts units of length
const convert = () => {
    const factor = {metr:1, kilometr:1000, decymetr:0.1, centymetr:0.01, milimetr:0.001, cal:0.0254, stopa:0.30479, jard:0.91437, mila:1609.344}
    let unitIn = document.getElementById("unitIn");
    let unitOut = document.getElementById("unitOut");
    let valueIn = document.getElementById("valueIn");
    let valueOut = document.getElementById("valueOut");
    let checkedIn = factor[unitIn.value];
    let checkedOut = factor[unitOut.value];
    // console.log(unitIn.value);
    // console.log(unitOut.value);
    


    // function allows to enter only number, dot, arrow and backspace characters
    function isNumberKey(e) {
        let charCode = e.which || event.keyCode;
        if ((charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105) || (charCode == 190) || (charCode == 8) || (charCode == 46) || (charCode >= 37 && charCode <= 40) ) return true;
        return false;
    }
    valueIn.onkeydown = isNumberKey;
    
    // change units and input value are online converted
    valueIn.addEventListener("input", convert);
    unitIn.addEventListener("change", convert);
    unitOut.addEventListener("change", convert);
    
    let a = parseFloat(valueIn.value, 10);  //string valueIn to number
    let result = ((a * checkedIn) / checkedOut);
    
    // the result is printed if input value is correct
    if ( !Number.isNaN(a) && a >= 0) {
        valueOut.innerHTML = result.toFixed(6)
    }
    else { 
        valueOut.innerHTML = ""
    }
}
convert();
let swappingButton = document.getElementById("exchange");
function swapUnits() {
    let a = unitIn.value;
    let b = unitOut.value;
    unitIn.value = b;
    unitOut.value = a;
};
swappingButton.addEventListener("click", function() {
   swapUnits();
   convert();
});



// swappingButton.addEventListener("click", function swapUnits() {
//         let a = unitIn.value;
//         let b = unitOut.value;
//         unitIn.value = b;
//         unitOut.value = a;
//         // return (unitIn.value, unitOut.value)
//     });
// swappingButton.addEventListener("click", convert);