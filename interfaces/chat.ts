import { AnimalCompagnie } from "./animal-compagnie";
import { Savable } from "./savable";


export class Chat implements AnimalCompagnie, Savable {
    getInfos(): string {
        return 'Chat:nom='+this.nom+';couleur='+this.couleur;
    }
    //ceci equivaut
    constructor(public nom:string,public couleur:string){}
    /*
    à ceci :
    public nom:string;
    public couleur:string;
    constructor(nom:string,couleur:string){
        this.nom = nom;
        this.couleur = couleur;
    } 
    */

    chasser():void {
        console.log('le chat-sse');
    }
    seGratter(): void {
        console.log('le chat se gratte');
    }
    manger(aliment: string): void {
        console.log('le chat mange '+aliment+' pendant trop longtemps');
    }
    emettreSon(): string {
        return 'miou miou miou';
    }
}