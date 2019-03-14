import { Directive ,HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @HostBinding('style.color') color:string;

  constructor() { }

  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  @HostListener('window:keydown', ['$event']) windowClick($event) {
    console.log($event);
    if ($event.keyCode == 37) this.color="red"; //gauche();
    else if ($event.keyCode == 39) this.color="orange"; //droite() ;
    else if ($event.keyCode == 38) this.color="blue" ;//haut();
    else if($event.keyCode == 40) this.color="green";//bas() ;
  }

}
