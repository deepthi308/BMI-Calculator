const button = document.querySelector(".button")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const bmi = document.getElementById("bmi")
const condition = document.getElementById("condition")
const warn = document.querySelector(".warn")

let heightVal;
let weightVal;
let bmiVal;
let conditionVal;

const handleClick = () => {
    // console.log("Clicked")

    
     if( heightVal == "" || weightVal == "")
    {
      warn.style.display = "block"   
    }
     else
    {
         warn.style.display = "none" 
         heightVal = Number(height.value)
         weightVal = Number(weight.value)
         bmiVal = (weightVal / ((heightVal * heightVal) / 10000)).toFixed(2);
         bmi.value = bmiVal;
         if (bmiVal < 18.6)
         {
            condition.value = "Under Weight" 
         }
         else if (bmiVal >= 18.6 && bmiVal < 24.9)
         {
             condition.value = "Normal" 
         }
         else
         {
            condition.value = "Over Weight"  
         }
    }


    

}


button.addEventListener("click", handleClick)