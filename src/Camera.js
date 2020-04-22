import { PerspectiveCamera } from "three";
import gsap from 'gsap';

export default class Camera{
    constructor(){
        this.camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 300);
        this.initialPosition = {
            x: 48, y: 10, z: 0
        }
        this.positions = [
            {x: 0, z: 48},
            {x: 48, z: 0},
            {x: 0, z: -48}
        ];
        this.currPosIndex = 1;
        this.isMoving = false;

        window.addEventListener('keydown', (event) => {
            if(event.key === 'ArrowLeft'){ this.moveLeft(); } 
            else if (event.key === 'ArrowRight'){ this.moveRight(); }
        });

        window.addEventListener('tick', () => {
            this.camera.position.x = this.initialPosition.x;
            this.camera.position.y = this.initialPosition.y;
            this.camera.position.z = this.initialPosition.z;
            this.camera.lookAt(0, 0, 0);
        });
        this.addControls();
    }

    moveLeft(){
        if(this.currPosIndex > 0 && !this.isMoving){
            this.isMoving = true;
            this.currPosIndex--;
            this.move();
        }
    }
    moveRight(){
        if(this.currPosIndex < 2 && !this.isMoving){
            this.isMoving = true;
            this.currPosIndex++;
            this.move();
        }
    }

    move(){
        gsap.to(this.initialPosition, {x: this.positions[this.currPosIndex].x, z: this.positions[this.currPosIndex].z, duration: 1, ease: 'circ', onComplete: () => {this.isMoving = false}});
    }

    addControls(){
        const toLeftBtn = document.querySelector('.toLeft-button');
        const toRightBtn = document.querySelector('.toRight-button');
        toLeftBtn.addEventListener('click', () => {
            this.moveLeft();
        });
        toRightBtn.addEventListener('click', () => {
            this.moveRight();
        });
    }
}