import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickCharsGrabService {

  constructor(private http: HttpClient) { }

  public getTwentyCharList(page: number, name?: string, status?: string, species?: string, type?: string, gender?: string){

    let endpoint: string = "https://rickandmortyapi.com/api/character/?page=".concat(String(page));

    if (name && name.length > 0) endpoint.concat("&name=").concat(name);
    if (status && status.length > 0) endpoint.concat("&status=").concat(status);
    if (species && species.length > 0) endpoint.concat("&species=").concat(species);
    if (type && type.length > 0) endpoint.concat("&type=").concat(type);
    if (gender && gender.length > 0) endpoint.concat("&gender=").concat(gender);

    return this.http.get(endpoint);
  }

  public getOneCharacter(id: number){
    return this.http.get("https://rickandmortyapi.com/api/character/".concat(String(id)));
  }
}
