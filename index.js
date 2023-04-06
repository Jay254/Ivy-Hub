document.addEventListener('DOMContentLoaded', () =>{
   const form = document.getElementById('form');
   const collegeName = document.getElementById('collegeName');
   const appRound = document.getElementById('appRound');
   const appPlan = document.getElementById('appPlan');
   
   form.addEventListener('submit', handleSubmit)

   function handleSubmit(event){
    event.preventDefault();
     
    console.log(collegeName.value)
    console.log(appRound.value)
    console.log(appPlan.value)
   }

})
