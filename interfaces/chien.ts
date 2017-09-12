import { AnimalCompagnie } from "./animal-compagnie";
import { Savable } from "./savable";

export class Chien implements AnimalCompagnie, Savable {
    
    nom: string;
    race:string;

    constructor(nom:string,race:string) {
        this.nom = nom;
        this.race = race;
    }

    allerChercher():void {
        console.log('le chien va chercher le truc');
    } 

    seGratter():void {
        console.log('le chien ' +this.nom+' se gratte');
    }
    
    manger(aliment: string): void {
        console.log('le chien mange goulument '+aliment);
    }
    emettreSon(): string {
        return 'ouaf ouaf ouaf';
    }

    getInfos(): string {
        return 'Chien:nom='+this.nom+';race='+this.race;
    }
}


