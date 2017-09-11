import {AnimalCompagnie} from './petit-interface';


export class Chien implements AnimalCompagnie {
// public nom:string;
// public race:string;

constructor(public nom:string, public race:string){
    this.nom = nom;
    this.race = race;
}

allerChercher():void {
    console.log('le chien va chercher le truc !');
}
seGratter():void {
    console.log('le chien va se gratter');
}
manger(aliment:string):void {
    console.log('le chien va manger');
    }
emettreSon():string {
     return 'ouaf, ouaf, ouaf';
    }
}

