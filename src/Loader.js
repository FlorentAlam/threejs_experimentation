import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';
import gsap from 'gsap';

export default class Loader{
    constructor(){
        this.toLoad = 0;
        this.loaded = 0;

        this.items = {};

        this.loadingBar = document.getElementById('loaded');

        this.initLoaders();
    }

    initLoaders(){
        this.GLTF = new GLTFLoader();
        this.Texture = new TextureLoader();
    }

    load(items){
        this.toLoad = items.length;
        items.forEach(item => {
            if(item.type === "texture"){
                let texture = this.Texture.load(item.src);
                this.fileLoaded(item, texture);
            } else {
                this.GLTF.load(item.src, obj => {
                    this.fileLoaded(item, obj);
                })
            }
        })
    }
    fileLoaded(item, data){
        this.loaded++;
        this.items[item.name] = data;

        gsap.to(this.loadingBar, {scaleX: this.loaded / this.toLoad, duration: 0.2, ease: 'Expo.easeOut'})

        if(this.loaded === this.toLoad){
            const loading = document.getElementById('loading');
            gsap.to(loading, {opacity: 0, duration: .4});
            gsap.to(loading, {display: 'none', duration: 0.01, delay: .4});
            window.dispatchEvent(new Event('ressourcesLoaded'));
        }
    }
}