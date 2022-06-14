// var myAlert = document.getElementById("myAlert");
// myAlert.addEventListener("closed.bs.alert", function () {
//   // do something, for instance, explicitly move focus to the most appropriate element,
//   // so it doesn't get lost/reset to the start of the page
//   document.getElementById("...").focus();
// });

// let str = [];
// let message = document.querySelector("#exampleFormControlTextarea1");
// let submitBtn = document.querySelector(".submit");
// let finalMsg;

// submitBtn.addEventListener("click", function () {
//   finalMsg = message.value;
//   console.log(message.value);
//   finalMsg.charCodeat();
// });

// let decrypt = function () {
//   for (i = 0; i < 100 && str[i] != "\0"; i++) str[i] = str[i] - 2; //the key for encryption is 3 that is subtracted to ASCII value
//   console.log("Decryption String" + str);
// };

// declarations
// let ans = [];
// let inputMessage = document.querySelector("#message");
// let encryptOption = document.querySelector("#encryptRadio");
// let decryptOption = document.querySelector("#decryptRadio");
// let submitBtn = document.querySelector(".submit");
// let resultMsg = document.querySelector(".rst-msg");
// let finalMsg;
// let finalMsgArray;

// function
// submitBtn.addEventListener("click", () => {
//   console.log(inputMessage.value);
//   finalMsg = inputMessage.value;
//   finalMsgArray = [...finalMsg];
//   console.log(finalMsgArray);
// });

// function encrypt() {
//   console.log(inputMessage.value);
//   finalMsg = inputMessage.value;
//   finalMsgArray = [...finalMsg];
//   console.log(finalMsgArray);
// }

// declarations
let ans = [];
let codeAns = [];
let inputMessage = document.querySelector("#message");
let encryptOption = document.querySelector("#encryptRadio");
let decryptOption = document.querySelector("#decryptRadio");
let submitBtn = document.querySelector("#submit1");
let resultMsg = document.querySelector(".rst-msg");
let finalMsg;
let finalMsgArray;
let finalEncryptedMsg;

// functions

submitBtn.addEventListener("click", function () {
  finalMsg = inputMessage.value;
  for (let i = 0; i < finalMsg.length; i++) {
    codeAns[i] = finalMsg.charCodeAt(i) + 2;
    ans[i] = String.fromCharCode(codeAns[i]);
  }
  finalEncryptedMsg = ans.join("");
  resultMsg.innerHTML = finalEncryptedMsg;
});

function encrypt() {
  finalMsg = inputMessage.value;
  for (let i = 0; i < finalMsg.length; i++) {
    codeAns[i] = finalMsg.charCodeAt(i) + 2;
    ans[i] = String.fromCharCode(codeAns[i]);
  }
  finalEncryptedMsg = ans.join("");
  resultMsg.innerHTML = finalEncryptedMsg;
}

function decrypt() {
  finalMsg = inputMessage.value;
  for (let i = 0; i < finalMsg.length; i++) {
    codeAns[i] = finalMsg.charCodeAt(i) - 2;
    ans[i] = String.fromCharCode(codeAns[i]);
  }
  finalEncryptedMsg = ans.join("");
  resultMsg.innerHTML = finalEncryptedMsg;
}

document.querySelector("#submit1").addEventListener("click", function () {
  if (encryptOption.checked == true) {
    console.log("Encrypt checked");
    submitBtn.addEventListener("click", encrypt());
  } else if (decryptOption.checked == true) {
    console.log("Decrypt checked");
    submitBtn.addEventListener("click", decrypt());
  } else {
    console.log("Nothing is selected");
    alert("Nothing is Selected");
  }
});
