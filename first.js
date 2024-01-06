let form=document.querySelector("form");


form.addEventListener('submit',function(e){
    e.preventDefault();
    let result=document.querySelector(".result");
    let guide=document.querySelector(".guide");
    let heigth=parseInt(document.querySelector(".heigth").value);
    let weigth=parseInt(document.querySelector(".weigth").value);

    if((heigth==="")||(heigth>0)||isNaN(heigth)){
   result.innerHTML=`heigth is invalid ${heigth}`;
       }
  else if((weigth==="")||(weigth>0)||isNaN(weigth)){
    result.innerHTML=`weigth is invalid ${weigth}`;
  }

  let BMI=(weigth/((heigth*heigth)/10000)).toFixed(0);

  result.innerHTML=`<span> ${BMI}</span>`;
  if(BMI<18.6){
    guide.innerHTML=`${BMI} is underweigth`;
}
else if(BMI>18.6&&BMI<24.9){
    guide.innerHTML=`${BMI} is normal weigth`;
}
else if(BMI>24.9){
    guide.innerHTML=`${BMI} is overweigth`;
}
});
