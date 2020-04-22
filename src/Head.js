import { MeshMatcapMaterial, DoubleSide } from "three";
import gsap from 'gsap';

export default class Head{
    constructor(options){
        this.models = {};
        this.ressources = options.ressources;

        this.setModels();
        this.setMaterials();
    }

    setModels(){
        this.models.peru_head_gold = this.ressources.loader.items.peru_head_gold;
        this.models.peru_head_lapis = this.ressources.loader.items.peru_head_lapis;
        this.models.peru_head_ruby = this.ressources.loader.items.peru_head_ruby;
        this.models.peru_gold = this.ressources.loader.items.peru_gold;
        this.models.peru_tuiles = this.ressources.loader.items.peru_tuiles;

        this.models.geisha_head_white = this.ressources.loader.items.geisha_head_white;
        this.models.african_head = this.ressources.loader.items.african_head;

        this.models.japon = this.ressources.loader.items.japon;
        this.models.cote_ivoire_violet = this.ressources.loader.items.cote_ivoire_violet;
        this.models.cote_ivoire_jaune = this.ressources.loader.items.cote_ivoire_jaune;
        this.models.cote_ivoire_bleu = this.ressources.loader.items.cote_ivoire_bleu;
        this.models.geisha_face = this.ressources.loader.items.geisha_face;
        this.models.geisha_levre = this.ressources.loader.items.geisha_levre;

        this.models.cote_ivoire_bleu.scene.children[0].position.z += 8;
        this.models.cote_ivoire_violet.scene.children[0].position.z += 8;
        this.models.cote_ivoire_jaune.scene.children[0].position.z += 8;

        this.models.japon.scene.children[0].position.x -= 8;

        this.models.peru_gold.scene.children[0].position.z -= 6;
        this.models.peru_tuiles.scene.children[0].position.z -= 6;

        this.models.peru_head_gold.scene.children[0].position.z -= 3;
        this.models.peru_head_lapis.scene.children[0].position.z -= 3;
        this.models.peru_head_ruby.scene.children[0].position.z -= 3;
        this.models.peru_head_gold.scene.children[0].position.y -= 1;
        this.models.peru_head_lapis.scene.children[0].position.y -= 1;
        this.models.peru_head_ruby.scene.children[0].position.y -= 1;

        this.animateHead(this.models.peru_head_gold, this.models.peru_head_gold.scene.children[0].position.y);
        this.animateHead(this.models.peru_head_ruby, this.models.peru_head_ruby.scene.children[0].position.y);
        this.animateHead(this.models.peru_head_lapis, this.models.peru_head_lapis.scene.children[0].position.y);

        this.animateHead(this.models.african_head, this.models.african_head.scene.children[0].position.y);
        this.animateHead(this.models.geisha_face, this.models.geisha_face.scene.children[0].position.y);
        this.animateHead(this.models.geisha_levre, this.models.geisha_levre.scene.children[0].position.y);
        this.animateHead(this.models.geisha_head_white, this.models.geisha_head_white.scene.children[0].position.y);

    }

    animateHead(obj, initialYPos){
        const t = gsap.timeline({repeat: -1});
        t.to(obj.scene.children[0].position, {y: initialYPos - 1, duration: 1.1, ease: 'power'});
        t.to(obj.scene.children[0].position, {y: initialYPos, duration: 1.1, ease: 'power'});
    }

    setMaterials(){
        this.setMaterial('peru_head_gold', 'gold_matcap');
        this.setMaterial('peru_gold', 'gold_matcap');
        this.setMaterial('geisha_head_white', 'blanc_matcap');
        this.setMaterial('african_head', 'marron_matcap');

        this.setMaterial('japon', 'ruby_matcap');
        this.setMaterial('cote_ivoire_violet', 'violet_matcap');
        this.setMaterial('cote_ivoire_jaune', 'jaune_matcap');
        this.setMaterial('cote_ivoire_bleu', 'bleu_matcap');
        this.setMaterial('geisha_face', 'rouge_matcap');
        this.setMaterial('geisha_levre', 'levres_matcap');

        this.setMaterial('peru_head_lapis', 'lapis_matcap');
        this.setMaterial('peru_tuiles', 'lapis_matcap');
        this.setMaterial('peru_head_ruby', 'ruby_matcap');
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