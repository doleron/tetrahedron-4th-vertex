function controlSpheres(scene, show) {
    if (show) {
        addSphereToScene(scene, "Sq", _Q, _Lq, 0xFF0000);
        addSphereToScene(scene, "Sp", _P, _Lp, 0x00FF00);
        addSphereToScene(scene, "Sr", _R, _Lr, 0x0000FF);
    } else {
        scene.remove(scene.getObjectByName("Sq"));
        scene.remove(scene.getObjectByName("Sp"));
        scene.remove(scene.getObjectByName("Sr"));
    }
}

function controlPointLabels(scene, show) {
    if (show) {
        addText(scene, "Q", _Q);
        addText(scene, "P", _P);
        addText(scene, "R", _R);
    } else {
        scene.remove(scene.getObjectByName("Q"));
        scene.remove(scene.getObjectByName("P"));
        scene.remove(scene.getObjectByName("R"));
    }
}

function controlBaseTriangle(scene, show) {
    if (show) {
        addTriangleToScene(scene, "baseTriangle", _P, _Q, _R, 0x00ff00);
    } else {
        scene.remove(scene.getObjectByName("baseTriangle"));
    }
}

function makeTextSprite( message, parameters ) {
        if ( parameters === undefined ) parameters = {};
        var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Arial";
        var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
        var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 4;
        var borderColor = parameters.hasOwnProperty("borderColor") ?parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
        var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?parameters["backgroundColor"] : { r:255, g:255, b:255, a:1.0 };
        var textColor = parameters.hasOwnProperty("textColor") ?parameters["textColor"] : { r:0, g:0, b:0, a:1.0 };

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = "Bold " + fontsize + "px " + fontface;
        var metrics = context.measureText( message );
        var textWidth = metrics.width;

        context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
        context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

        context.lineWidth = borderThickness;
        roundRect(context, borderThickness/2, borderThickness/2, (textWidth + borderThickness) * 1.1, fontsize * 1.4 + borderThickness, 8);

        context.fillStyle = "rgba("+textColor.r+", "+textColor.g+", "+textColor.b+", 1.0)";
        context.fillText( message, borderThickness, fontsize + borderThickness);

        var texture = new THREE.Texture(canvas) 
        texture.needsUpdate = true;

        var spriteMaterial = new THREE.SpriteMaterial( { map: texture } );
        var sprite = new THREE.Sprite( spriteMaterial );
        sprite.scale.set(0.5 * fontsize, 0.25 * fontsize, 0.75 * fontsize);
        sprite.center.set( 0,1 );
        return sprite;  
    }

function roundRect(ctx, x, y, w, h, r) 
{
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
	ctx.stroke();   
}

function addText(scene, text, position) {
    var label = makeTextSprite(text);
    label.position.set(position.x, position.y, position.z);
    label.name = text;
    scene.add(label);
}

function addVector(scene, origin, direction, _color) {
    const directionNormalized = direction.normalized();
    var dir = new THREE.Vector3(directionNormalized.x, directionNormalized.y, directionNormalized.z);
    var origin = new THREE.Vector3(origin.x, origin.y, origin.z);
    const length = direction.length();
    var arrowHelper = new THREE.ArrowHelper(dir, origin, length, _color);
    scene.add(arrowHelper);
}

function addTriangleToScene(scene, name, P, Q, R, _color) {
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3(_P.x, _P.y, _P.z),
        new THREE.Vector3(_Q.x, _Q.y, _Q.z),
        new THREE.Vector3(_R.x, _R.y, _R.z)
    );
    geometry.faces.push(new THREE.Face3(0, 1, 2));
    geometry.computeFaceNormals();
    geometry.computeBoundingSphere();
    var mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: _color, side: THREE.DoubleSide } ));
    mesh.name = name;
    scene.add(mesh);
}

function addSphereToScene(scene, name, center, radius, _color, widthSegments = 32, heightSegments = 32) {
    const material = new THREE.MeshPhongMaterial({
        color: _color,
        opacity: 0.5,
        transparent: true,
      });
     
    material.transparent = true ;    
    var geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments );
    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.set(center.x, center.y, center.z);
    sphere.name = name;
    scene.add(sphere);
    return sphere;
}

function addLight(scene, ...pos) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...pos);
    scene.add(light);
}

function threeJsMain(scene, prepareScene) {
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    addLight(scene, -1, 2, 4);
    addLight(scene,  1, -1, -2);

    prepareScene(scene, camera);
                
    var gridHelper = new THREE.GridHelper(40, 40);
    scene.add(gridHelper);
    
    var axis = new THREE.AxesHelper(10);
    scene.add(axis);
    
    var controls = new THREE.OrbitControls( camera, renderer.domElement );

    controls.update();

    var animate = function () {
        requestAnimationFrame( animate );
        
        controls.update();

        renderer.render( scene, camera );
    };

    animate();
}