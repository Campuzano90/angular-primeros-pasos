import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name: string = "Spiterman"
public age: number = 25
public metod: string = ""

get capitalizedName(): string{
  return this.name.toUpperCase()
}

getHeroDescription(): string{
  return `${this.name} - ${this.age}`;
}

changeHero(): void{
this.name = "Spiderman"
}

changeAge(): void{
this.age = 20
}

resetForm(): void{
  this.name = "Spiterman"
  this.age = 25
  //document.querySelectorAll('h1')!.forEach (element => {
    //element.innerHTML= '<h1>Desde Angular</h1>';
  //} )
}


}
