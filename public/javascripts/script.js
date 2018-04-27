document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');


}, false);



$("#ddlProductType").change(function() {  
        var valSelected = $(this).val();
        switch (valSelected){
          case "Electronics":
            $('#ddlProduct option[value ="Washing machine"]').hide();
            $('#ddlProduct option[value ="Refrigerator"]').hide();
            $('#ddlProduct option[value ="Table"]').hide();
            $('#ddlProduct option[value ="Bed"]').hide();
          break;
          case "Home appliance":
            $('#ddlProduct option[value ="Television"]').hide();
            $('#ddlProduct option[value ="Phone"]').hide();
          break;
          case "Home furnishing":
            $('#ddlProduct option[value ="Phone"]').hide();
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
    const productList = response.data;
    console.log(productList);
    var marker=[];
    productList.forEach(oneProduct => {
      const [ lat, lng ] = oneProduct.location.coordinates;
      console.log("[ lat, lng ]="+[ lat, lng ]);
      var eachMarker = new google.maps.Marker({
                              position: { lat, lng },
                              map: map,
                              title: " Posted date : "+ new Date(oneProduct.created_at).toDateString()+" - "+ oneProduct.product +" "+oneProduct.brand+ ":"+oneProduct.model,
                              imageUrl: oneProduct.imageUrl,
                              productId: oneProduct._id,
                              animation: google.maps.Animation.DROP
                            }); 
      marker.push(eachMarker)    
    });
    marker.forEach(oneMarker => {
      oneMarker.addListener('click', function() {
            document.location.href = "/products/"+oneMarker.productId;
      }); 
      oneMarker.addListener( 'mouseover', function() {
        this.setIcon(oneMarker.imageUrl);
      })
      oneMarker.addListener( 'mouseout', function() {
        this.setIcon(null);
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