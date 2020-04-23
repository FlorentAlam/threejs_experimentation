import { PerspectiveCamera } from "three";
import gsap from 'gsap';

export default class Camera{
    constructor(){
        this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 300);

        // Set camera distance depending on screen width
        const cameraPositionFormula = (window.innerWidth - 6504) / -109.625;

        this.initialPosition = {
            x: cameraPositionFormula, y: 10, z: 0
        }
        this.positions = [
            {x: 0, z: cameraPositionFormula},
            {x: cameraPositionFormula, z: 0},
            {x: 0, z: -cameraPositionFormula}
        ];
        this.currPosIndex = 1;
        this.isMoving = false;

        window.addEventListener('keydown', (event) => {
            if(event.key === 'ArrowLeft' || event.key === 'ArrowRight'){ this.move(event.key); } 
        });

        window.addEventListener('tick', () => {
            this.camera.position.x = this.initialPosition.x;
            this.camera.position.y = this.initialPosition.y;
            this.camera.position.z = this.initialPosition.z;
            this.camera.lookAt(0, 0, 0);
        });
        this.addControls();
    }

    move(direction){
        if(!this.isMoving){
            this.currPosIndex = (this.currPosIndex > 0 && direction === "ArrowLeft") ? this.currPosIndex - 1 : ((this.currPosIndex < 2 && direction === "ArrowRight") ? this.currPosIndex + 1 : this.currPosIndex);
            this.isMoving = true;
            gsap.to(this.initialPosition, {x: this.positions[this.currPosIndex].x, z: this.positions[this.currPosIndex].z, duration: 1, ease: 'circ', onComplete: () => {this.isMoving = false}});
        }  
    }

    addControls(){
        const toLeftBtn = document.querySelector('.toLeft-button');
        const toRightBtn = document.querySelector('.toRight-button');
        toLeftBtn.addEventListener('click', () => {
            this.move("ArrowLeft");
        });
        toRightBtn.addEventListener('click', () => {
            this.move("ArrowRight");
        });
    }
}