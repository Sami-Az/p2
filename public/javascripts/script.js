
document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');
    /******* Carroussel ****** */
    	//rotation speed and timer
	var speed = 3000;
	var run = setInterval('rotate()', speed);	
	
	//grab the width and calculate left value
	var item_width = $('#slides li').outerWidth(); 
	var left_value = item_width * (-1); 
        
    //move the last item before first item, just in case user click prev button
	$('#slides li:first').before($('#slides li:last'));
	
	//set the default item to the correct position 
	$('#slides ul').css({'left' : left_value});

    //if user clicked on prev button
	$('#prev').click(function() {

		//get the right position            
		var left_indent = parseInt($('#slides ul').css('left')) + item_width;

		//slide the item            
		$('#slides ul').animate({'left' : left_indent}, 200,function(){    

            //move the last item and put it as first item            	
			$('#slides li:first').before($('#slides li:last'));           

			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});
		
		});

		//cancel the link behavior            
		return false;
            
	});

 
    //if user clicked on next button
	$('#next').click(function() {
		
		//get the right position
		var left_indent = parseInt($('#slides ul').css('left')) - item_width;
		
		//slide the item
		$('#slides ul').animate({'left' : left_indent}, 200, function () {
            
            //move the first item and put it as last item
			$('#slides li:last').after($('#slides li:first'));                 	
			lso
			//set the default item to correct position
			$('#slides ul').css({'left' : left_value});
		
		});
		         
		//cancel the link behavior
		return false;
		
	});        
	
	//if mouse hover, pause the auto rotation, otherwise rotate it
	$('#slides').hover(
		
		function() {
			clearInterval(run);
		}, 
		function() {
			run = setInterval('rotate()', speed);	
		}
	); 
  
    /******* /Carroussel ****** */
    $('.seller-product').on('click', function(event){
      var $this = $(this);
      var clickProduct = $this.children(3)[3].innerText
      document.location.href = "/products/"+clickProduct;      
    });

}, false);
//a simple function to click next link
//a timer will call this function, and the rotation will begin :)  
function rotate() {
	$('#next').click();
}

$("#ddlProductType").change(function() {  
        var valSelected = $(this).val();
        switch (valSelected){
          case "Electronics":
            $('#ddlProduct option[value ="Washing machine"]').hide();
            $('#ddlProduct option[value ="Refrigerator"]').hide();
          break;
          case "Home appliance":
            $('#ddlProduct option[value ="Television"]').hide();
            $('#ddlProduct option[value ="Phone"]').hide();
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
// retrieve mover product data from our backend
axios.get("/moverMap/data")
  .then((response) => {
    const productList = response.data;
    //console.log(productList);
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
        this.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
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

  
