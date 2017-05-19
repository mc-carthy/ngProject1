import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    /* ngStyle refactors this code:

    [style.backgroundColor]="canSave ? 'blue' : 'grey'"
    [style.color]="canSave ? 'white' : 'black'"
    [style.fontWeight]="canSave ? 'bold' : 'normal'"

    However, this does highlight that maybe a class should be used instead

    */
    template: `
        <button
            [ngStyle]="{
                backgroundColor: canSave ? 'blue' : 'grey',
                color: canSave ? 'white' : 'black',
                fontWeight: canSave ? 'bold' : 'normal'
            }"
        >Submit</button>
    `
})

export class AppComponent
{
    canSave = false;
}