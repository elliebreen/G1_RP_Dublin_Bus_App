const styles = {
    default: [],
    silver: [
        {
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
        },
        {
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
        },
        {
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
        },
        {
        elementType: "labels.text.stroke",
        stylers: [{ color: "#f5f5f5" }],
        },
        {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#bdbdbd" }],
        },
        {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
        },
        {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
        },
        {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
        },
        {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
        },
        {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
        },
        {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ color: "#757575" }],
        },
        {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#dadada" }],
        },
        {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
        },
        {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
        },
        {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
        },
        {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
        },
        {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
        },
        {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
        },
    ],
    night: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
        },
        {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
        },
        {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
        },
        {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
        },
        {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
        },
        {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
        },
        {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
        },
        {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
        },
        {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
        },
        {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
        },
        {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
        },
        {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
        },
        {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
        },
        {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
        },
        {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
        },
    ],
    retro: [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
        },
        {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
        },
        {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
        },
        {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
        },
        {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
        },
        {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
        },
        {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
        },
        {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
        },
        {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
        },
        {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
        },
        {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
        },
        {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
        },
        {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
        },
        {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
        },
        {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
        },
        {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
        },
        {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
        },
        {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
        },
        {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
        },
        {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
        },
        {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
        },
    ],
    hiding: [
        {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
        },
        {
        featureType: "transit",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
        },
    ],
};

function initMap() {
    // Initializes the map on the page //
    
    // Creates the map //
    const map = createMap();

    // If there is no map created then do nothing
    if (!map) return;

    // prints the information pertaining to the map in the console //
    console.log(map);

    // calls a function to add controlability to the map //
    addControls(map);

    // calls funcntion to get a route for the map //
    getRoute(map);
}

function addControls(map) {

    // function to add controls to the map for style //
    const styleControl = document.getElementById("style-selector-control");
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(styleControl);
    const styleSelector = document.getElementById("style-selector");
    map.setOptions({ styles: styles[styleSelector.value] });
    styleSelector.addEventListener("change", () => {
        map.setOptions({ styles: styles[styleSelector.value] });
        window.localStorage.setItem("map", styleSelector.value);
    });
}
function createMap() {
    const element = document.getElementById("map");

    if (!element) return;
    
    // assign the map to the element identified as map
    return new google.maps.Map(element, {
        zoom: 14,
        center: { lat: 53.349804, lng: -6.260310 },
        /*Disable the default map ui*/
        disableDefaultUI: true,
    });
}

async function getRoute(map) {
    // If Django adds error list class (i.e. the form is invalid)
    // don't attempt to get the route
    if (document.querySelector('.errorlist')) return;

    const origin = document.querySelector('#id_origin_location').value;
    const destination = document.querySelector('#id_destination_location').value;

    // If there is no value for origin or desitnation return
    if (!origin || !destination) return;

    try {
        const directionsService = new google.maps.DirectionsService();
        const directionsDisplay = new google.maps.DirectionsRenderer();

        var userUnixDate = document.getElementById("userUnixDate").textContent;
        console.log(document.getElementById("userUnixDate").textContent)
        console.log(userUnixDate)
        console.log(new Date(1626081706 * 1000))
        const requestOpts = {
            origin,
            destination,
            travelMode: google.maps.DirectionsTravelMode.TRANSIT,
            transitOptions: {
                departureTime: new Date(userUnixDate  * 1000),
                modes: ['BUS'],
                routingPreference: 'FEWER_TRANSFERS'    //LESS_WALKING is the alternative
            },
            //provideRouteAlternatives: false,            //When True provides alternative routes
        };

        directionsDisplay.setMap(map);
        directionsDisplay.setPanel(document.getElementById('panel-desktop'))
        directionsDisplay.setPanel(document.getElementById('panel'));
        
        await directionsService.route(requestOpts, (...args) => handleRouteResponse(directionsDisplay, ...args));
    } catch(e) {
        console.log("e", e.message)
        if (e.message === "DIRECTIONS_ROUTE: NOT_FOUND: At least one of the origin, destination, or waypoints could not be geocoded.") {
            alert("OOPS! Something went wrong, no route found. Please try using the suggestions and try again!");
        } else {
            alert("OOPS! Something went wrong, no route found. Please try again!");
        }
    }
}

function handleRouteResponse(directionsDisplay, response, status) {
    console.log('handleRouteREsponse', {
        directionsDisplay,
        response,
        status
    })

    if (status !== google.maps.DirectionsStatus.OK) return;

    const l = response.routes
        .reduce((accumulator, route) => [...accumulator, ...route.legs], [])
        .reduce((accumulator, leg) => [...accumulator, ...leg.steps], [])
        .map(step => ({ distance: step.distance, duration: step.duration, instructions: step.instructions, transit: step.transit, travel_mode: step.travel_mode }));
    console.log('steps Jen l', l);

    var travel_time = document.querySelector('#id_travel_time').value

    if (travel_time == "") {
        var today = new Date();
        travel_time = today.getHours() + ":" + today.getMinutes();
    } 

    fetch('/dublinBusHybrid/journeyPlanner/', {
        method: 'POST',
        credentials: 'include',     
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json; charset=UTF-8',
            'X-CSRFToken': getCSRFToken()
        },

        body: JSON.stringify({
            'travel_date': document.querySelector('#id_travel_date').value,
            'travel_time': travel_time + ':00',
            'Steps': l,
        })
    }).then(r => r.json())
    .then(result => {
        const estimatedTimeElement = document.querySelector('#estimated-time');
        const googleWarning = document.querySelector('#google_warning');
        console.log('result', result);
        console.log('google_warning', googleWarning)
        if (result.estimatedTime.type === "google") {
            // Produce Google Warning
            console.log('google')
            googleWarning.style.visibility = 'visible';
        }
            
        estimatedTimeElement.innerHTML = `${Math.floor(result.estimatedTime.time)} mins`;
    });

    directionsDisplay.setDirections(response);

    console.log(response)
    response.routes.forEach(r => {
        r.legs.forEach(l => {
            l.steps.forEach(s => {
                if (s.transit) {
                    console.log("s", s)
                    console.log('arrival_stop', s.transit)

                }

            })

        })
    });
}

// get a csrf token from the page by selecting the input element and
// returning the value
function getCSRFToken() {
    return document.querySelector('[name="csrfmiddlewaretoken"]').value;
}

setTimeout(()=>{
    document.getElementById("style-selector-control").style.display='block';
},3000);