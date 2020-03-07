import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Page } from '../interface/interfaces';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor(private http: HttpClient) {}

    getMenu(){
        //Expecificamos que devuelve un arreglo de las paginas de la aplicación
        return this.http.get<Page[]>('/assets/data/menu.json');
    }

    getHouseServis(){
        return this.http.get('https://www.potterapi.com/v1/houses?key=$2a$10$Os8.LaoEuUagi618Ue8I0eH.RcCMNnzdioOwydw0ifhMKuAn.u/5q');
    }

    getSpellsServis() {
        return this.http.get('https://www.potterapi.com/v1/spells?key=$2a$10$Os8.LaoEuUagi618Ue8I0eH.RcCMNnzdioOwydw0ifhMKuAn.u/5q');
    }

    getCharacters(): Observable<any> {

        return this.http.get('https://www.potterapi.com/v1/characters?key=$2a$10$Os8.LaoEuUagi618Ue8I0eH.RcCMNnzdioOwydw0ifhMKuAn.u/5q');
    
    }

    getMembersHouse(_id: string): Observable<any> {
        return this.http.get(`https://www.potterapi.com/v1/houses/${_id}?key=$2a$10$Os8.LaoEuUagi618Ue8I0eH.RcCMNnzdioOwydw0ifhMKuAn.u/5q`);
    }


}