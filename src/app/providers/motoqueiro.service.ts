
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Funcionario } from '../model/Funcionario';

@Injectable()
export class MotoqueiroService {

    constructor(private http: Http ){}

    listar(): Observable<Funcionario[]>{
        return  this.http.get("http://192.168.7.89:8080/api/motoqueiro")
            .map(res => res.json())
            .catch(this.handleError)
    }



    salvar(motoqueiro):Observable<Funcionario>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let postData = JSON.stringify(motoqueiro)
        return this.http.post('http://192.168.7.89:8080/api/motoqueiro/salvar', postData, options)
        .map( response => response.json())
        .catch(this.handleError)
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
      }
}