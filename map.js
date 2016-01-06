var map;

function initialize() {
    var latlng = new google.maps.LatLng(-16.7696477, -49.3319283);

    var options = {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
}

function carregarPontos() {

    $.getJSON('pontos.json', function (pontos) {

        $.each(pontos, function (index, ponto) {

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
                title: "Meu ponto personalizado! :-D",
                map: map
            });

        });

    });

}

carregarPontos();


initialize();
