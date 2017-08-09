function initMap(){
      // Map options
      var options = {
        zoom:7,
        center:{lat:42.4969805,lng:-82.8888054}
      }

      // New map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      
      // Add marker
      var marker = new google.maps.Marker({
        position:{lat:42.4969805,lng:-82.8888054},
        map:map,
       
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<p style="font-size:8px;">48082, MI</p>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
      

      // Array of markers
      var markers = [
        {
          coords:{lat:42.4969805,lng:-82.8888054},
          content:'<p style="font-size:8px;">Saint Clair Shores, MI</p>'
        }
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }

      // Add Marker Function
      function addMarker(props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map,
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            infoWindow.open(map, marker);
          });
        }
      }
    }