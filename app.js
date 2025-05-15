function calcBmi(){
    const height=(parseFloat(document.getElementById("height").value))*30.48;
    const weight=parseFloat(document.getElementById("weight").value);
    const result=document.getElementById("result");
    if(isNaN(height) || isNaN(weight) || height<=0 || weight<=0){
        result.innerHTML="Please enter valid height and weight.";
        result.style.color="red";
        return;
    }
    
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let category="";
       if (bmi < 18.5) category = "Underweight";
       else if (bmi < 24.9) category = "Normal weight";
       else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";
        result.textContent=`Your BMI is ${bmi} (${category}).`;
        result.style.color="black";    
}