const billAmount = document.getElementById('billamt')

const service = document.getElementById('serviceQual');
const serviceOptions = document.querySelectorAll('option');
console.log(serviceOptions);

const numberOfPeople = document.getElementById('peopleamt')


const calc = document.getElementById('calculate');

calc.addEventListener('click', calculateTip => {
    let billValue = billAmount.value;
    let serviceSelect = service.options[service.selectedIndex].value;
    let numpp = numberOfPeople.value;

    if (serviceSelect == "0" || billValue == "") {
        alert("Please fill in all fields")
        return;
    }
    if (isNaN(numpp)) {
        alert("please use only numbers for ther number of people")
        return;
    }
    if(numpp <= 1) {
        numpp = 1;
        let each = document.getElementById('each')
        each.style.visibility = "hidden";
    } else if (numpp >= 2) {
        each.style.visibility = "visible";
    }
    let totalBox = document.getElementById('totalTip');
    totalBox.style.backgroundColor = "teal"

    let total = (billValue * serviceSelect) / numpp;
    let tip = document.getElementById('tip')
    tip.textContent = total.toFixed(2);
    return total
})
