import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { TextureLoader } from 'three';

export default class Loader{
    constructor(){
        this.toLoad = 0;
        this.loaded = 0;

        this.items = {};

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

        if(this.loaded === this.toLoad){
            window.dispatchEvent(new Event('ressourcesLoaded'));
        }
    }
}