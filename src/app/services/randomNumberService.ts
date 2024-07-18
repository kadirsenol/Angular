

export class RandomNumberService{
     public random: number = 0;
     constructor(){
        this.random = Math.floor(Math.random()*1000);
     }
}
