
/*
On peut faire en typescript des classes assez similaires
à celle du PHP avec des propriétés typées, des visibilités
des méthodes et autre.
Il ne faut pas oublier d'exporter les éléménts d'un
module auxquels on voudra accéder depuis d'autre fichiers
*/
export class MaClasse{
 private maPropriete:string;
    // methodes de construction, equivalente à __concruct()

    constructor(){
        this.maPropriete = "bloup";
    }
    methode():string {
        let age:number = 20;
        return 'la propriete vaut : '+this.maPropriete;
    }
}
