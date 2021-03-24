var $ = function (id)
{
  return document.getElementById(id);
};

var processEnteries = function() //creating function(event handler)
{
  //get user enteries 
  var subtotal = parseFloat($("subtotal").value); //calling to $ function
  var taxRate = parseFloat($("tax_rate").value);
  var isValid = true;

  //calculate results
  if(isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000)
  {
    alert("Subtotal must be between 0 and 10000"); 
  }
 /* else if(isNaN(tax_rate) || tax_rate <= 0 || tax_rate >= 12)
  {
    alert("Tax rate must be between 0 and 12"); 
  }*/
  else
  {
    var salesTax = subtotal * (taxRate/100); 
    salesTax = parseFloat(salesTax.toFixed(2)); //limit decimal places
    var total = subtotal + salesTax;
  }

  //display results
  $("sales_tax").value = salesTax; 
  $("total").value = total.toFixed(2); 

  //assign focus
  $("subtotal").focus(); //focus on the one with subtotal as an id
}; //need ; at end of function

var clearEnteries = function()
{
  //clear all boxes
  $("subtotal").value = ""; 
  $("tax_rate").value = "";
  $("sales_tax").value = "";
  $("total").value = "";
};

var clearSubtotal = function()
{
  $("subtotal").value = ""; 
};

var clearRate = function()
{
  $("tax_rate").value = "";
};


window.onload = function() //onloading event handler
{
  $("calculate").onclick = processEnteries;
  $("clear").onclick = clearEnteries;
  $("subtotal").onclick = clearSubtotal;
  $("tax_rate").onclick = clearRate;
  $("subtotal").focus();
};