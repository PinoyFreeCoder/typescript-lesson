"use strict";
const InputNum1 = document.querySelector("#input1");
const InputNum2 = document.querySelector("#input2");
const SubmitButton = document.querySelector("button");
function addNumbers(num1, num2) {
    return num1 + num2;
}
SubmitButton === null || SubmitButton === void 0 ? void 0 : SubmitButton.addEventListener("click", () => {
    console.log(`the sum  ${addNumbers(+InputNum1.value, +InputNum2.value)}`);
});
