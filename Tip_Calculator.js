const percentOne = document.getElementById("percentOne");
const percentTwo = document.getElementById("percentTwo");
const peopleOne = document.getElementById("peopleOne");
const peopleTwo = document.getElementById("peopleTwo");
const tipAmount = document.getElementById("tipAmount");
const totalBill = document.getElementById("totalBill");

const tipPercent = document.getElementById("tipPercent");
const billAmount = document.getElementById("billAmount");
const peopleNum = document.getElementById("peopleNum");

let percentCount = 15
let peopleCount = 1

percentOne.addEventListener('click', button => {
    if (percentCount <= 1) return
    percentCount -= 1
    tipPercent.value = percentCount
})

percentTwo.addEventListener('click', button => {
    if (percentCount >= 99) return 100
    percentCount += 1
    tipPercent.value = percentCount
})

peopleOne.addEventListener('click', button => {
    if (peopleCount <= 1) return
    peopleCount -= 1
    peopleNum.value = peopleCount
})

peopleTwo.addEventListener('click', button => {
    if (peopleCount >= 1000) return 1000
    peopleCount += 1
    peopleNum.value = peopleCount
})

document.getElementById('calcBtn').onclick = function() {
    if (peopleCount >= 1000 || peopleNum.value >= 1000) {
        peopleCount = 1000;
        peopleNum.value = peopleCount
    } else if (peopleCount <= 1 || peopleNum.value <= 1) {
        peopleCount = 1;
        peopleNum.value = peopleCount
    }
    
    if (percentCount >= 100 || tipPercent.value >= 100) {
        percentCount = 100
        tipPercent.value = percentCount
    } else if (percentCount <= 1 || tipPercent.value <= 1) {
        percentCount = 1
        tipPercent.value = percentCount
    }

    if (peopleCount > 1) {
        document.getElementById('hiddenText').style.fontSize = "0.9rem";
        document.getElementById('hiddenTextTwo').style.fontSize = "0.9rem";
        document.getElementById("calcBtn").style.marginTop = "18px";

        tipAmount.value = ((+billAmount.value * (+tipPercent.value)/100)/peopleCount).toFixed(2)
        totalBill.value = ((+billAmount.value/peopleCount + +tipAmount.value)).toFixed(2)

        totalBill.value = `$${totalBill.value}`
        tipAmount.value = `$${tipAmount.value}`
    } else {
        document.getElementById('hiddenText').style.fontSize = "0rem";
        document.getElementById('hiddenTextTwo').style.fontSize = "0rem";
        document.getElementById("calcBtn").style.marginTop = "52px";

        tipAmount.value = +billAmount.value * (+tipPercent.value)/100).toFixed(2)
        totalBill.value = +billAmount.value + +(tipAmount.value.toFixed(2))

        totalBill.value = `$${totalBill.value}`
        tipAmount.value = `$${tipAmount.value}`
}
}
