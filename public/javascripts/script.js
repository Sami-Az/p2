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
        }          
  });

const mapDiv = document.querySelector(".my-map");
const map =
  new google.maps.Map(mapDiv, {
    zoom: 10,
    center: {
      lat: 48.866667,
      lng:  2.333333
    }
  });  
// retrieve restaurant data from our backend
axios.get("/moverMap/data")
  .then((response) => {
    const moverList = response.data;
    console.log(moverList);
    moverList.forEach((oneUser) => {
      const [ lat, lng ] = oneUser.location.coordinates;
      new google.maps.Marker({
                              position: { lat, lng },
                              map: map,
                              title: oneUser.name,
                              animation: google.maps.Animation.DROP
                            });
      
    });
  })
  .catch((err) => {
    alert("Something went wrong! 💩");
  });

const locationInput = document.querySelector(".location-input");
const latInput = document.querySelector(".lat-input");
const lngInput = document.querySelector(".lng-input");

const autocomplete = new google.maps.places.Autocomplete(locationInput);

autocomplete.addListener("place_changed", () => {
  const place = autocomplete.getPlace();
  const loc = place.geometry.location;

  latInput.value = loc.lat();
  lngInput.value = loc.lng();
});