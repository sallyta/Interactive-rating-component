  const mainDiv = document.querySelector(".rating");
  const rateScale = document.querySelectorAll(".btn");
  const thankYou = document.querySelector(".thank-you");
  const submitButton = document.getElementById("submit");
  const rateAgain = document.getElementById("rateagain");
  const result = document.getElementById("result");
 

 
let flag = false;
let isClicked = false;

submitButton.addEventListener("click", () => {
  if (isClicked) {
    thankYou.classList.toggle("hidden");
    rateAgain.style.display = "block";
    mainDiv.style.display = "none";
    flag = true;
  } else {
    alert("Please select a rating from 1 to 5.");
  }
});

rateAgain.addEventListener("click", () => {
  thankYou.classList.add("hidden");
  rateAgain.style.display = "none";
  mainDiv.style.display = "block";
  result.innerHTML = "";
  isClicked = false;
  flag = false;
});

rateScale.forEach(rateScaleButton => {
  rateScaleButton.addEventListener("click", () => {
    result.innerHTML = rateScaleButton.innerHTML;
    isClicked = true;
  });
});










 


 
  

 
 
 
 
 
 
 

  

  

