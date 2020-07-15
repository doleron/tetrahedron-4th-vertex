

var props = {showSpheres: true, showBase: true, showLabels: true,};

var datGui = new dat.GUI();

var controls = [];

function initializeGui(scene) {

    controls[0] = datGui.add(props, 'showSpheres')
                .name('Show Spheres')
                .listen();

    controls[0].onChange(
            function(newValue) {
                controlSpheres(scene, newValue);
            });

    controls[1] = datGui.add(props, 'showBase')
                .name('Show Base Triangle')
                .listen();

    controls[1].onChange(
            function(newValue) {
                controlBaseTriangle(scene, newValue);
            });

    controls[2] = datGui.add(props, 'showLabels')
                .name('Show Point Labels')
                .listen();

    controls[2].onChange(
            function(newValue) {
                controlPointLabels(scene, newValue);
            });
}