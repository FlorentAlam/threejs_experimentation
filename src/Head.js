import { MeshMatcapMaterial, DoubleSide } from "three";
import gsap from 'gsap';

export default class Head{
    constructor(options){
        this.models = {};
        this.ressources = options.ressources;

        this.setModels();
        this.setPositions();
        this.animate();
        this.setMaterials();
    }

    setModels(){
        const models = ['peru_head_gold', 'peru_head_lapis', 'peru_head_ruby', 'peru_gold', 'peru_tuiles', 'geisha_head_white', 'african_head', 'japon', 'cote_ivoire_violet', 'cote_ivoire_jaune', 'cote_ivoire_bleu', 'geisha_face', 'geisha_levre'];

        models.forEach(model => {
            this.models[model] = this.ressources.loader.items[model];
        });
    }

    setPositions(){
        this.setPos(this.models.cote_ivoire_bleu, "z", 8);
        this.setPos(this.models.cote_ivoire_violet, "z", 8);
        this.setPos(this.models.cote_ivoire_jaune, "z", 8);
        this.setPos(this.models.japon, "x", -8);
        this.setPos(this.models.peru_gold, "z", -6);
        this.setPos(this.models.peru_tuiles, "z", -6);
        this.setPos(this.models.peru_head_gold, "z", -3);
        this.setPos(this.models.peru_head_lapis, "z", -3);
        this.setPos(this.models.peru_head_ruby, "z", -3);
        this.setPos(this.models.peru_head_gold, "y", -1);
        this.setPos(this.models.peru_head_lapis, "y", -1);
        this.setPos(this.models.peru_head_ruby, "y", -1);
    }
    setPos(obj, pos, value){
        obj.scene.children[0].position[pos] += value;
    }

    animate(){
        const animatedObjects = ['peru_head_gold', 'peru_head_lapis', 'peru_head_ruby', 'african_head', 'geisha_face', 'geisha_head_white', 'geisha_levre'];
        animatedObjects.forEach(object => {
            this.animateHead(this.models[object], this.models[object].scene.children[0].position.y);
        })
    }

    animateHead(obj, initialYPos){
        const t = gsap.timeline({repeat: -1});
        t.to(obj.scene.children[0].position, {y: initialYPos - 1, duration: 1.1, ease: 'power'});
        t.to(obj.scene.children[0].position, {y: initialYPos, duration: 1.1, ease: 'power'});
    }

    setMaterials(){
        const association = {
            'gold_matcap': ['peru_head_gold', 'peru_gold'],
            'blanc_matcap': ['geisha_head_white'],
            'marron_matcap': ['african_head'],
            'ruby_matcap': ['japon', 'peru_head_ruby'],
            'violet_matcap': ['cote_ivoire_violet'],
            'jaune_matcap': ['cote_ivoire_jaune'],
            'bleu_matcap': ['cote_ivoire_bleu'],
            'rouge_matcap': ['geisha_face'],
            'levres_matcap': ['geisha_levre'],
            'lapis_matcap': ['peru_head_lapis', 'peru_tuiles']
        }

        for(let [key, value] of Object.entries(association)){
            value.forEach(val => {
                this.setMaterial(val, key);
            });
        }
    }

    setMaterial(item, texture){
        let matCap = new MeshMatcapMaterial({
            matcap: this.ressources.loader.items[texture], 
            map: this.ressources.loader.items.peru_head_ao,
            side: DoubleSide
        });
        this.models[item].scene.traverse(child => {
            child.material = matCap;
        });
    }

}