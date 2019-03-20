var parksList = {

    "Channel Islands": {
        coordinates: {
            lat: 33.9961,
            lng: -119.7692},
        imgurTag: "channel_islands"
    },
    "Death Valley": {
        coordinates: {
            lat: 36.5054,
            lng: -117.0794},
        imgurTag: "death_valley"
    },
    "Joshua Tree": {
        coordinates: {
            lat: 33.8734,
            lng: -115.9010},
        imgurTag: "joshua_tree"
    },
    "Redwoods": {
        coordinates: {
            lat: 41.2132,
            lng: -124.0046},
        imgurTag: "redwoods"
    },
    "Kings Canyon": {
        coordinates: {
            lat: 36.8879,
            lng: -118.5551},
        imgurTag: "kings_canyon"
    },
    "Lassen": {
        coordinates: {
            lat: 40.4977,
            lng: -121.4207},
        imgurTag: "lassen"
    },
    "Pinnacles": {
        coordinates: {
            lat: 36.4906,
            lng: -121.1825},
        imgurTag: "pinnacles"
    },
    "Sequoia": {
        coordinates: {
            lat: 36.4864,
            lng: -118.5658},
        imgurTag: "sequoia_national_park"
    },
    "Yosemite": {
        coordinates: {
            lat: 37.8651,
            lng: -119.5383},
        imgurTag: "yosemite"
    }
};

var yosemiteContent = "<div>yosemite clicked</div>";
var channelIslandsContent = "<div>Channel Islands clicked</div>";
var deathValleyContent = "<div>Death Valley clicked</div>";
var joshuaTreeContent = "<div>Joshua Tree clicked</div>";
var redwoodsContent = "<div>Redwoods clicked</div>";
var kingsCanyonContent = "<div>Kings Canyon clicked</div>";
var lassenContent = "<div>Lassen clicked</div>";
var pinnaclesContent = "<div>Pinnacles clicked</div>";
var sequoiaContent = "<div>Sequoia clicked</div>";

class Park_map {
    constructor(region){
        this.userRegion = null;
        if (region==="NW"){
            this.userRegion = "NorthWest";
        } else if (region==="SW"){
            this.userRegion = "SouthWest";
        } else if (region==="NE"){
            this.userRegion = "NorthEast";
        } else {
            this.userRegion = "SouthEast";
        }
        this.map = new google.maps.Map(document.getElementById("map_container"), {
            center: parksList["Yosemite"].coordinates,
            zoom: 5.8
        });
        this.markers = {
            yosemiteMarker: null, 
            channelIslandsMarker: null, 
            deathValleyMarker: null, 
            joshuaTreeMarker: null, 
            redwoodsMarker: null,
            kingsCanyonMarker: null, 
            lassenMarker: null, 
            pinnaclesMarker: null, 
            sequoiaMarker: null
        }; 
        this.addMarkers = this.addMarkers.bind(this);
        this.displayChannelIslandsInfoBox = this.displayChannelIslandsInfoBox.bind(this);
        this.displayDeathValleyInfoBox = this.displayDeathValleyInfoBox.bind(this);
        this.displayJoshuaTreeInfoBox = this.displayJoshuaTreeInfoBox.bind(this);
        this.displayRedwoodsInfoBox = this.displayRedwoodsInfoBox.bind(this);
        this.displayKingsCanyonInfoBox = this.displayKingsCanyonInfoBox.bind(this);
        this.displayLassenInfoBox = this.displayLassenInfoBox.bind(this);
        this.displayPinnaclesInfoBox = this.displayPinnaclesInfoBox.bind(this);
        this.displaySequoiaInfoBox = this.displaySequoiaInfoBox.bind(this);
        this.displayYosemiteInfoBox = this.displayYosemiteInfoBox.bind(this);
    }

    addMarkers(){
        this.markers.channelIslandsMarker = new google.maps.Marker({position: parksList["Channel Islands"].coordinates, map: this.map});
        this.markers.channelIslandsMarker.addListener("click", this.displayChannelIslandsInfoBox);

        this.markers.deathValleyMarker = new google.maps.Marker({position: parksList["Death Valley"].coordinates, map: this.map});
        this.markers.deathValleyMarker.addListener("click", this.displayDeathValleyInfoBox);

        this.markers.joshuaTreeMarker = new google.maps.Marker({position: parksList["Joshua Tree"].coordinates, map: this.map});
        this.markers.joshuaTreeMarker.addListener("click", this.displayJoshuaTreeInfoBox);

        this.markers.redwoodsMarker = new google.maps.Marker({position: parksList["Redwoods"].coordinates, map: this.map});
        this.markers.redwoodsMarker.addListener("click", this.displayRedwoodsInfoBox);

        this.markers.kingsCanyonMarker = new google.maps.Marker({position: parksList["Kings Canyon"].coordinates, map: this.map});
        this.markers.kingsCanyonMarker.addListener("click", this.displayKingsCanyonInfoBox);

        this.markers.lassenMarker = new google.maps.Marker({position: parksList["Lassen"].coordinates, map: this.map});
        this.markers.lassenMarker.addListener("click", this.displayLassenInfoBox);

        this.markers.pinnaclesMarker = new google.maps.Marker({position: parksList["Pinnacles"].coordinates, map: this.map});
        this.markers.pinnaclesMarker.addListener("click", this.displayPinnaclesInfoBox);

        this.markers.sequoiaMarker = new google.maps.Marker({position: parksList["Sequoia"].coordinates, map: this.map});
        this.markers.sequoiaMarker.addListener("click", this.displaySequoiaInfoBox);

        this.markers.yosemiteMarker = new google.maps.Marker({position: parksList["Yosemite"].coordinates, map: this.map});
        this.markers.yosemiteMarker.addListener("click", this.displayYosemiteInfoBox);
    }

    displayChannelIslandsInfoBox(){
        var channelIslandsInfoBox = new google.maps.InfoWindow({
            content: channelIslandsContent, 
            position: parksList["Channel Islands"].coordinates
        });
        channelIslandsInfoBox.open(this.map);
    }

    displayDeathValleyInfoBox(){
        var deathValleyInfoBox = new google.maps.InfoWindow({
            content: deathValleyContent,
            position: parksList["Death Valley"].coordinates
        });
        deathValleyInfoBox.open(this.map);
    }

    displayJoshuaTreeInfoBox(){
        var joshuaTreeInfoBox = new google.maps.InfoWindow({
            content: joshuaTreeContent, 
            position: parksList["Joshua Tree"].coordinates
        });
        joshuaTreeInfoBox.open(this.map);
    }

    displayKingsCanyonInfoBox(){
        var kingsCanyonInfoBox = new google.maps.InfoWindow({
            content: kingsCanyonContent, 
            position: parksList["Kings Canyon"].coordinates
        });
        kingsCanyonInfoBox.open(this.map);
    }

    displayLassenInfoBox(){
        var lassenInfoBox = new google.maps.InfoWindow({
            content: lassenContent, 
            position: parksList["Lassen"].coordinates
        });
        lassenInfoBox.open(this.map);
    }

    displayPinnaclesInfoBox(){
        var pinnaclesInfoBox = new google.maps.InfoWindow({
            content: pinnaclesContent, 
            position: parksList["Pinnacles"].coordinates
        });
        pinnaclesInfoBox.open(this.map);
    }

    displayRedwoodsInfoBox(){
        var redwoodsInfoBox = new google.maps.InfoWindow({
            content: redwoodsContent, 
            position: parksList["Redwoods"].coordinates
        });
        redwoodsInfoBox.open(this.map);
    }

    displaySequoiaInfoBox(){
        var sequoiaInfoBox = new google.maps.InfoWindow({
            content: sequoiaContent, 
            position: parksList["Sequoia"].coordinates
        });
        sequoiaInfoBox.open(this.map);
    }

    displayYosemiteInfoBox(){
        var yosemiteInfoBox = new google.maps.InfoWindow({
            content: yosemiteContent,
            position: parksList["Yosemite"].coordinates
        });
        yosemiteInfoBox.open(this.map);
    }
}


