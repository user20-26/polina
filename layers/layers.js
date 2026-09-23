var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });
var format_nhighway_1 = new ol.format.GeoJSON();
var features_nhighway_1 = format_nhighway_1.readFeatures(json_nhighway_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nhighway_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nhighway_1.addFeatures(features_nhighway_1);
var lyr_nhighway_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nhighway_1, 
                style: style_nhighway_1,
                popuplayertitle: 'n — highway',
                interactive: false,
                title: '<img src="styles/legend/nhighway_1.png" /> n — highway'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_nhighway_1.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_nhighway_1];
lyr_nhighway_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'shelter_type': 'shelter_type', 'roof:colour': 'roof:colour', 'leisure': 'leisure', 'ref': 'ref', 'railway': 'railway', 'man_made': 'man_made', 'smoothness': 'smoothness', 'sport': 'sport', 'height': 'height', 'bicycle': 'bicycle', 'tactile_paving': 'tactile_paving', 'shelter': 'shelter', 'public_transport': 'public_transport', 'bin': 'bin', 'bench': 'bench', 'lit': 'lit', 'access': 'access', 'parking': 'parking', 'barrier': 'barrier', 'addr:country': 'addr:country', 'memorial': 'memorial', 'landuse': 'landuse', 'historic': 'historic', 'religion': 'religion', 'opening_hours': 'opening_hours', 'description': 'description', 'denomination': 'denomination', 'building:levels': 'building:levels', 'building': 'building', 'amenity': 'amenity', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'place': 'place', 'surface': 'surface', 'area:highway': 'area:highway', 'name': 'name', 'layer': 'layer', 'type': 'type', 'address': 'address', });
lyr_nhighway_1.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'shelter_type': 'TextEdit', 'roof:colour': 'TextEdit', 'leisure': 'TextEdit', 'ref': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'smoothness': 'TextEdit', 'sport': 'TextEdit', 'height': 'TextEdit', 'bicycle': 'TextEdit', 'tactile_paving': 'TextEdit', 'shelter': 'TextEdit', 'public_transport': 'TextEdit', 'bin': 'TextEdit', 'bench': 'TextEdit', 'lit': 'TextEdit', 'access': 'TextEdit', 'parking': 'TextEdit', 'barrier': 'TextEdit', 'addr:country': 'TextEdit', 'memorial': 'TextEdit', 'landuse': 'TextEdit', 'historic': 'TextEdit', 'religion': 'TextEdit', 'opening_hours': 'TextEdit', 'description': 'TextEdit', 'denomination': 'TextEdit', 'building:levels': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'place': 'TextEdit', 'surface': 'TextEdit', 'area:highway': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'type': 'TextEdit', 'address': 'TextEdit', });
lyr_nhighway_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'shelter_type': 'no label', 'roof:colour': 'no label', 'leisure': 'no label', 'ref': 'no label', 'railway': 'no label', 'man_made': 'no label', 'smoothness': 'no label', 'sport': 'no label', 'height': 'no label', 'bicycle': 'no label', 'tactile_paving': 'no label', 'shelter': 'no label', 'public_transport': 'no label', 'bin': 'no label', 'bench': 'no label', 'lit': 'no label', 'access': 'no label', 'parking': 'no label', 'barrier': 'no label', 'addr:country': 'no label', 'memorial': 'no label', 'landuse': 'no label', 'historic': 'no label', 'religion': 'no label', 'opening_hours': 'no label', 'description': 'no label', 'denomination': 'no label', 'building:levels': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'place': 'no label', 'surface': 'no label', 'area:highway': 'no label', 'name': 'no label', 'layer': 'no label', 'type': 'no label', 'address': 'no label', });
lyr_nhighway_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});