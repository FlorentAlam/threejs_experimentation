import { Object3D } from "three";
import Head from "./Head";

export default class World{
    constructor(options){
        this.scene = options.scene;
        this.ressources = options.ressources;

        this.setHead();
    }

    setHead(){
        this.head = new Head({ressources: this.ressources});
        for(let model in this.head.models){
            this.scene.add(this.head.models[model].scene);
        }
        
    }
}