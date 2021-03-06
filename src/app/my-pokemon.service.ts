import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Pokemon } from 'src/model/pokemon';

@Injectable({
  providedIn: 'root'
})
export class MyPokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    let stringId = id.toString();
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${stringId}`);
    // return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${stringId}`, {
    //   withCredentials: true,
    // });
  }

  getImage(imageUrl: string): Observable<File> {
    return Observable.create((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUrl;
      if (!img.complete) {
          // This will call another method that will create image from url
          img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
           observer.error(err);
        };
      } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}
