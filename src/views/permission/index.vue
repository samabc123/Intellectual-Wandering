<template>
    <div>
        <canvas id="three"></canvas>
    </div>
</template>
  
<script setup name="permission">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const scene = new THREE.Scene()
scene.background = new THREE.Color('#eee')
const canvas = document.querySelector('#three')
const width = window.innerWidth
const height = window.innerHeight
const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height); 
renderer.render(scene, camera);
camera.position.z = 10

const gltfLoader = new GLTFLoader()
gltfLoader.load('/seraphine/scene.gltf', (gltf) => {
    var model = gltf.scene
    scene.add(model)
})
gltfLoader.load('/seraphine/scene.gltf', (gltf) => {
    let model = gltf.scene

    //添加这段代码
    //遍历模型每部分
    model.traverse((o) => {
        //将图片作为纹理加载
        let explosionTexture = new THREE.TextureLoader().load(
            '/seraphine/textures/Mat_cwfyfr1_userboy17.bmp_diffuse.png'
        )
        //调整纹理图的方向
        explosionTexture.flipY = false
        //将纹理图生成基础网格材质(MeshBasicMaterial)
        const material = new THREE.MeshBasicMaterial({
            map: explosionTexture,
        })
        //给模型每部分上材质
        o.material = material
    })

    scene.add(model)

})
function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement
    var width = window.innerWidth
    var height = window.innerHeight
    var canvasPixelWidth = canvas.width / window.devicePixelRatio
    var canvasPixelHeight = canvas.height / window.devicePixelRatio

    const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height
    if (needResize) {
        renderer.setSize(width, height, false)
    }
    return needResize
}
function animate() {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
    //添加下面代码
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
    }
}
animate()
</script>
  
<style scoped>
#three {
    width: 100px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
}
</style>