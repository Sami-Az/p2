document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');


console.log(ddlDepartement)
}, false);


var ddlDepartement = $("#ddlDepartment").change( function () {
  return this.value;
;})

$("#ddlDepartment").change(function() {
  
  var valSelected = $(this).val();
   switch (valSelected){
    case "Electronics":
      $('#ddlProductType option[value ="Washing machine"]').hide();
      $('#ddlProductType option[value ="Fridge machine"]').hide();
    break;
    case "Home appliance":
      $('#ddlProductType option[value ="Television"]').hide();
      $('#ddlProductType option[value ="Phone"]').hide();
    break;
    case "Home furnishing":
    
    break;
  };
  $('#closeModal').click(function(){
    $('.modal').close()
  })
});

