const inputButton1 = document.getElementById("inputButton1");
const outputButton1 = document.getElementById("outputButton1");
const inputButton2 = document.getElementById("inputButton2");
const outputButton2 = document.getElementById("outputButton2");
const inputButton3 = document.getElementById("inputButton3");
const outputButton3 = document.getElementById("outputButton3");
const inputButton4 = document.getElementById("inputButton4");
const outputButton4 = document.getElementById("outputButton4");
const inputButton5 = document.getElementById("inputButton5");
const outputButton5 = document.getElementById("outputButton5");
const inputButton6 = document.getElementById("inputButton6");
const outputButton6 = document.getElementById("outputButton6");

const input1 = document.getElementById("input1");
const output1 = document.getElementById("output1");
const input2 = document.getElementById("input2");
const output2 = document.getElementById("output2");
const input3 = document.getElementById("input3");
const output3 = document.getElementById("output3");
const input4 = document.getElementById("input4");
const output4 = document.getElementById("output4");
const input5 = document.getElementById("input5");
const output5 = document.getElementById("output5");
const input6 = document.getElementById("input6");
const output6 = document.getElementById("output6")


inputButton1.addEventListener('click', () => toggleShow(output1, input1));
outputButton1.addEventListener('click', () => toggleShow(input1, output1));
inputButton2.addEventListener('click', () => toggleShow(output2, input2));
outputButton2.addEventListener('click', () => toggleShow(input2, output2));
inputButton3.addEventListener('click', () => toggleShow(output3, input3));
outputButton3.addEventListener('click', () => toggleShow(input3, output3));
inputButton4.addEventListener('click', () => toggleShow(output4, input4));
outputButton4.addEventListener('click', () => toggleShow(input4, output4));
inputButton5.addEventListener('click', () => toggleShow(output5, input5));
outputButton5.addEventListener('click', () => toggleShow(input5, output5));
inputButton6.addEventListener('click', () => toggleShow(output6, input6));
outputButton6.addEventListener('click', () => toggleShow(input6, output6));

function toggleShow(hide, show) {
    show.style.display="flex";
    hide.style.display="none";
}