import Loader from "./Loader";

import peru_head_gold from '../assets/models/peruHead_gold.gltf';
import peru_gold from '../assets/models/peruGold.gltf';
import peru_head_lapis from '../assets/models/peruHead_lapis.gltf';
import peru_head_ruby from '../assets/models/peruHead_ruby.gltf';
import peru_tuiles from '../assets/models/peruTuiles.gltf';

import geisha_head_white from '../assets/models/geishaHead_white.gltf';
import geisha_levre from '../assets/models/geisha_levre.gltf';
import geisha_face from '../assets/models/geishaFace.gltf';

import cote_ivoire_bleu from '../assets/models/codeDivoire_bleu.gltf';
import cote_ivoire_jaune from '../assets/models/codeDivoire_jaune.gltf';
import cote_ivoire_violet from '../assets/models/codeDivoire_violet.gltf';

import japon from '../assets/models/japon.gltf';
import african_head from '../assets/models/africanHead.gltf';
import sol from '../assets/models/sol.gltf';


import gold_matcap from '../assets/models/textures/gold_matcap.jpg';
import ruby_matcap from '../assets/models/textures/ruby.jpg';
import peru_head_ao from '../assets/models/textures/full_ao.jpg';
import bleu_matcap from '../assets/models/textures/bleu.jpg';
import jaune_matcap from '../assets/models/textures/jaune.jpg';
import violet_matcap from '../assets/models/textures/violet.jpg';
import blanc_matcap from '../assets/models/textures/blanc.jpg';
import levres_matcap from '../assets/models/textures/levres.jpg';
import rouge_matcap from '../assets/models/textures/rouge.jpg';
import marron_matcap from '../assets/models/textures/marron.jpg';
import lapis_matcap from '../assets/models/textures/lapis.jpg';

export default class Ressources{
    constructor(){
        this.loader = new Loader();

        this.loader.load([
            {name: 'peru_head_gold', src: peru_head_gold},
            {name: 'peru_head_ruby', src: peru_head_ruby},
            {name: 'peru_head_lapis', src: peru_head_lapis},
            {name: 'peru_gold', src: peru_gold},
            {name: 'peru_tuiles', src: peru_tuiles},

            {name: 'geisha_head_white', src: geisha_head_white},
            {name: 'african_head', src: african_head},
            {name: 'sol', src: sol},

            {name: 'japon', src: japon},
            {name: 'cote_ivoire_violet', src: cote_ivoire_violet},
            {name: 'cote_ivoire_jaune', src: cote_ivoire_jaune},
            {name: 'cote_ivoire_bleu', src: cote_ivoire_bleu},
            {name: 'geisha_levre', src: geisha_levre},
            {name: 'geisha_face', src: geisha_face},

            {name: 'gold_matcap', src: gold_matcap, type: 'texture'},
            {name: 'ruby_matcap', src: ruby_matcap, type: 'texture'},
            {name: 'peru_head_ao', src: peru_head_ao, type: 'texture'},
            {name: 'bleu_matcap', src: bleu_matcap, type: 'texture'},
            {name: 'jaune_matcap', src: jaune_matcap, type: 'texture'},
            {name: 'violet_matcap', src: violet_matcap, type: 'texture'},
            {name: 'blanc_matcap', src: blanc_matcap, type: 'texture'},
            {name: 'levres_matcap', src: levres_matcap, type: 'texture'},
            {name: 'rouge_matcap', src: rouge_matcap, type: 'texture'},
            {name: 'marron_matcap', src: marron_matcap, type: 'texture'},
            {name: 'lapis_matcap', src: lapis_matcap, type: 'texture'}
        ]);
    }

    getRessources(){
        return this.loader.items;
    }
}