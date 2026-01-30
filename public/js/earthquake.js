let map;
let refreshTimer = 30000;

/**
 * Initialize the Google Map
 * @param {string} elementId - The ID of the HTML element to host the map
 * @param {string} geoJsonUrl - The USGS GeoJSON URL
 * @param {string} geoJsonpUrl - The USGS GeoJSONP URL (for script injection if needed)
 */
function initEarthquakeMap(elementId, geoJsonUrl, geoJsonpUrl) {
    map = new google.maps.Map(document.getElementById(elementId), {
        zoom: 2.2,
        center: { lat: -15.865427, lng: 151.196123 },
        mapTypeId: 'terrain',
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_RIGHT,
            mapTypeIds: ['roadmap', 'terrain', 'satellite']
        }
    });

    // Style the data layer
    map.data.setStyle(feature => {
        return {
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: 'red',
                fillOpacity: 0.2,
                scale: Math.pow(2, feature.getProperty('mag')) / 2,
                strokeColor: 'white',
                strokeWeight: 0.5
            }
        };
    });

    // Load initial data
    map.data.loadGeoJson(geoJsonUrl);

    // Single listener for all property updates
    map.data.addListener('mouseover', event => {
        const props = {
            'showTitle': 'title',
            'showMag': 'mag',
            'showEarthquakeType': 'type',
            'showStatus': 'status',
            'showSignificant': 'sig',
            'showIntensity': 'mmi'
        };

        Object.keys(props).forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                element.textContent = event.feature.getProperty(props[elementId]) || '-';
            }
        });
    });

    // Auto-refresh interval
    setInterval(() => {
        map.data.forEach(feature => map.data.remove(feature));
        map.data.loadGeoJson(geoJsonUrl);
    }, refreshTimer);
}

// Global callback for GeoJSONP if still used by some USGS feeds
function eqfeed_callback(response) {
    if (map) map.data.addGeoJson(response);
}
