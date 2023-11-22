const counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>{
counter.innerText = "0";

const updateCounter = () => {
    const target = counter.getAttribute("data-target");
   const c = +counter.innerText;
   console.log(c);
   const targetNumber = +target;

   const increment = targetNumber / 300;

   if(c < targetNumber) {
    counter.innerText = `${Math.ceil(c + increment)}`;
    setTimeout(updateCounter,1)
   }
   else {
    counter.innerText = target ;
   }
  

}

updateCounter()


})