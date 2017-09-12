


import { Savable } from "./savable";



export class Saver {
    private saves:string[] = [];

    save(toSave:Savable):void {
        this.saves.push(toSave.getInfos());
    }

    showSaves() {
        console.log(this.saves);
    }
}