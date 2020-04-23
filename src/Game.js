import Ressources from "./Ressources";
import Time from "./Time";
import { Scene, WebGLRenderer, Color } from "three";
import Camera from "./Camera";
import World from "./World";

export default class Game{
    constructor(){
        this.ressources = new Ressources();
        this.time = new Time();

        this.setRenderer();
        this.setCamera();

        window.addEventListener('ressourcesLoaded', () => {
            this.setWorld();
        })
    }

    setRenderer(){
        this.scene = new Scene();
        this.renderer = new WebGLRenderer({
            canvas: document.querySelector('.js-canvas'),
            antialias: true
        });
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.setPixelRatio(2);
        this.renderer.physicallyCorrectLights = true;
        this.renderer.gammaFactor = 2.2;
        this.renderer.gammaOutPut = true;
        this.renderer.autoClear = false;  
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene.background = new Color("rgb(200, 200, 200)")

        window.addEventListener('tick', () => {
            this.renderer.render(this.scene, this.camera.camera);
        })
    }

    setCamera(){
        this.camera = new Camera();
        this.scene.add(this.camera.camera);
    }

    setWorld(){
        this.world = new World({scene: this.scene, ressources: this.ressources});
    }
}