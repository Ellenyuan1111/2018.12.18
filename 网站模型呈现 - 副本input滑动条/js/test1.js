//var container, stats;
//var controls;

//var windowHalfX = window.innerWidth / 2;
//var windowHalfY = window.innerHeight / 2;

var dividingRule =  null;   //刻度指针
var dividingRule1 =  null;   //轴
var dividingRule2 =  null;  //反光镜
var dividingRule3 =  null;  //目镜+物镜
var measureBtton = null;    //移动测量按钮
var handle = null;
// var modelGroup = no
var measureGroup = new THREE.Group();
measureGroup.name = 'measure';


init();

/**
* 初始化模型
*/
function initObject() {
    //加载过程回调函数

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());



    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setBaseUrl('obj/底座固定不圆滑/');
    mtlLoader.setPath('obj/底座固定不圆滑/');
    mtlLoader.load('底座固定不圆滑.mtl', function (materials) {
        materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/底座固定不圆滑/');
        //加载obj文件
        objLoader.load('底座固定不圆滑.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            //object.rotation.x = -Math.PI/2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/物镜+目镜/');
    mtlLoader.load('物镜+目镜.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/物镜+目镜/');
        //加载obj文件
        objLoader.load('物镜+目镜.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.rotation.x = -Math.PI / 2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);
            dividingRule3 = object;

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/底座平面镜/');
    mtlLoader.load('底座平面镜.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/底座平面镜/');
        //加载obj文件
        objLoader.load('底座平面镜.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.rotation.x = -Math.PI / 2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/反光镜/');
    mtlLoader.load('反光镜.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/反光镜/');
        //加载obj文件
        objLoader.load('反光镜.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.rotation.x = -Math.PI / 2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);
            dividingRule2 = object;

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/固定旋钮/');
    mtlLoader.load('固定旋钮.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/固定旋钮/');
        //加载obj文件
        objLoader.load('固定旋钮.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.rotation.x = -Math.PI / 2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/中大旋钮/');
    mtlLoader.load('中大旋钮.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/中大旋钮/');
        //加载obj文件
        objLoader.load('中大旋钮.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            object.rotation.x = -Math.PI / 2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/移动测量旋钮/');
    mtlLoader.load('移动测量旋钮.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/移动测量旋钮/');
        //加载obj文件
        objLoader.load('移动测量旋钮.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            //object.rotation.x = -Math.PI / 2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            // measureGroup.add(object)
            // scene.add(measureGroup);
            scene.add(object);
            object.traverse(function(child){
                if (child.isMesh) {
                    child.updateMatrixWorld();
                    var worldPos = child.getWorldPosition(child.position);
                    console.log('worldPos', worldPos);

                    child.geometry.computeBoundingBox();
                    child.geometry.computeBoundingSphere();
                    var pos = new THREE.Vector3();
                    pos = child.geometry.boundingSphere.center.clone();
                    child.geometry.center();
                    child.position.copy(pos);
                }
            });
            measureBtton = object;
            console.log('测量', object);

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setBaseUrl('obj/刻度指针/');
    mtlLoader.setPath('obj/刻度指针/');
    mtlLoader.load('刻度指针.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/刻度指针/');
        //加载obj文件
        objLoader.load('刻度指针.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            //object.rotation.x = -Math.PI/2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;


            scene.add(object);
            dividingRule = object;

        }, onProgress, onError);

    });

    var onProgress = function (xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            // console.log(Math.round(percentComplete, 2) + '% downloaded');
        }
    };

    //加载出错回调函数
    var onError = function (xhr) { };

    THREE.Loader.Handlers.add(/\.dds$/i, new THREE.DDSLoader());

    // model
    var mtlLoader = new THREE.MTLLoader();
    //设置材质路径
    mtlLoader.setPath('obj/轴/');
    mtlLoader.load('轴.mtl', function (materials) {

        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        //设置要加载的obj文件的路径
        objLoader.setPath('obj/轴/');
        //加载obj文件
        objLoader.load('轴.obj', function (object) {
            //这里设置我们的素材相对于原来的大小以及旋转缩放等
            //object.rotation.x = -Math.PI/2;
            //object.rotation.z = -Math.PI/2;

            // object.position.y = -50;
            // object.position.x = -100;

            scene.add(object);
            dividingRule1 = object;

        }, onProgress, onError);

    });

}



function init() {
    //使用createElement创建一个div，就是整个页面
    container = document.getElementById("canvas3d1");
    //添加子节点
    document.body.appendChild(container);
    // 透视相机
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.x = -250;
    camera.position.y = 100;
    camera.position.z = 300;

    // 场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.position.z = 1;

    //环境光
    var ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    scene.add(camera);

    //电光源
    var pointLight = new THREE.PointLight(0xAAAAAA);
    pointLight.position.set(-200, 200, 200);
    pointLight.castShadow = true;
    camera.add(pointLight); 


    //声明渲染器r
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);



    //在页面中添加canvas
    container.appendChild(renderer.domElement);
    // 创建控制器
    controls = new THREE.OrbitControls(camera, renderer.domElement);



    initObject();

    // //存放有所有需要改变的属性的对象
    var changeData = {
        'positionx': 25,
        'measure':2500,
    }

    //创建dat.GUI，传递并设置属性
    var gui = new dat.GUI();
    gui.add(changeData, 'positionx', 0, 50).name("指针移动").onChange(transformFun);
    gui.add(changeData, 'measure', 0, 5000).name("测量选择按钮").onChange(transformFun);
    
    gui.domElement.style = 'position:absolute;top:200px;left:200px';


    //监听窗口缩放函数
    window.addEventListener('resize', onWindowResize, false);
    render();

}


function transformFun(val){
    var scrop = this;
    if(scrop.property == 'positionx'){
        dividingRule.position.z = -2*(val-25)+0.5;
        dividingRule1.position.z = -2*(val-25);
        dividingRule2.position.z = -2*(val-25);
        dividingRule3.position.z = -2*(val-25);
         measureBtton.traverse(function(child){
            if(child.isMesh){
                child.rotation.z = THREE.Math.degToRad((val-25)*422.6);
            }
        });

    }else if(scrop.property == 'measure'){
        // measureBtton.rotation.z = val/180;
        measureBtton.traverse(function(child){
            if(child.isMesh){
                child.rotation.z = THREE.Math.degToRad(val*3.6);
            }
        });
        dividingRule.position.z = -0.02*(val)+0.3;
    }


}

function onWindowResize() {

    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}


function render() {
    requestAnimationFrame(render);
    //渲染场景
    renderer.render(scene, camera);

    //更新控制器
    controls.update();

}
