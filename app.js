//alert("sde");
//listen for submit
 document.getElementById('loan-form').addEventListener('submit',function(event)
 {
     //hide results
      document.getElementById('results').style.display='none';
     //show loader
     document.getElementById('loading').style.display='block';
     setTimeout(calculateResults,1000);
      event.preventDefault();
 });

 //calculate Results
 function calculateResults()
 {
     //console.log("calculating...");
     //UI variables     
     const amount=document.getElementById('amount');
     const interest=document.getElementById('interest');
     const year=document.getElementById('years');
     const monthlyT=document.getElementById('monthly-payment');
     const paymentT=document.getElementById('total-payment');
     const interestT=document.getElementById('total-interest');
//parseFloat() because the ans might be float so thats why..
     const principal=parseFloat(amount.value);
     const calculatedInterest=parseFloat(interest.value)/100/12;
     const calculatedPayment=parseFloat(year.value)*12;
     const x=Math.pow(1+calculatedInterest,calculatedPayment);
     const monthly=(principal*x*calculatedInterest)/(x-1);
     if(isFinite(monthly))
     {
          monthlyT.value=monthly.toFixed(2);
          paymentT.value=(monthly*calculatedPayment).toFixed(2);
          interestT.value=((monthly*calculatedPayment)-principal).toFixed(2); 
          amount.value="";interest.value="";year.value="";
          //show result
          document.getElementById('results').style.display='block';
          //show loader
          document.getElementById('loading').style.display='none';
     }
     else
     {
         showError("Please check"); 
     }
 }
 function showError(error) 
 {
   //hide results
   document.getElementById('results').style.display='none';
    //hide loader
    document.getElementById('loading').style.display='none';
    //create a div  
   const errorDiv=document.createElement('div');
   //get elements
    const card=document.querySelector('.card');
    const heading=document.querySelector('.heading');
   //in bootstrap if you want to create alert use alert class and 
   //if you want to make it appear in red use alert-danger
   errorDiv.className='alert alert-danger';
   //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));
    //insert error above heading element.insertBefore(newElement,existing)
    card.insertBefore(errorDiv,heading);
    //clear error after 3  sec    
    setTimeout(clearError,2000);
 }
 function clearError()
 {
     document.querySelector('.alert').remove();
 } 