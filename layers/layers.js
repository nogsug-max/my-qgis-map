var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': '브이월드 일반도',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://xdworld.vworld.kr:8080/2d/Base/201710/{z}/{x}/{y}.png'
            })
        });
var format__260223_1 = new ol.format.GeoJSON();
var features__260223_1 = format__260223_1.readFeatures(json__260223_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__260223_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__260223_1.addFeatures(features__260223_1);
var lyr__260223_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__260223_1, 
                style: style__260223_1,
                popuplayertitle: '지오코딩(주소변환) - 복사본_26.02.23',
                interactive: true,
                title: '<img src="styles/legend/_260223_1.png" /> 지오코딩(주소변환) - 복사본_26.02.23'
            });

lyr__0.setVisible(true);lyr__260223_1.setVisible(true);
var layersList = [lyr__0,lyr__260223_1];
lyr__260223_1.set('fieldAliases', {'시설명': '시설명', '주소': '주소', 'X좌표(경도)': 'X좌표(경도)', 'Y좌표(위도)': 'Y좌표(위도)', });
lyr__260223_1.set('fieldImages', {'시설명': '', '주소': '', 'X좌표(경도)': '', 'Y좌표(위도)': '', });
lyr__260223_1.set('fieldLabels', {'시설명': 'no label', '주소': 'no label', 'X좌표(경도)': 'no label', 'Y좌표(위도)': 'no label', });
lyr__260223_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});