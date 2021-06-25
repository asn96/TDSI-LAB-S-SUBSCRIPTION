import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  // backendUrl = 'http://localhost:4000'; // dev
   backendUrl = 'https://vmi502542.contaboserver.net:5002'; // prod

  checkauth = {headers: new HttpHeaders({ 'authorization': 'Bearer' + ' ' + localStorage.getItem('token')})};

  constructor( private http: HttpClient) { }


  /**
   * *********************************************
   * *********************************************
   * ****** DEBUT GENERIC METHOD WITH TOKEN ******
   * *********************************************
   * *********************************************
   */
  createElement(url, element) {
    return this.http.post(this.backendUrl + '/' + url, element, this.checkauth);
  }

  getElements(url) {
    return this.http.get(this.backendUrl + '/' + url, this.checkauth);
  }

  getOneElements(url, id) {
    return this.http.get(this.backendUrl + '/' + url + '/' + id, this.checkauth);
  }
  getFor2Elements(url, element1, element2) {
    return this.http.get(this.backendUrl + '/' + url + '/' + element1 + '/' + element2, this.checkauth);
  }
  getFor3Elements(url, element1, element2, element3) {
    return this.http.get(this.backendUrl + '/' + url + '/' + element1 + '/' + element2 + '/' + element3, this.checkauth);
  }
  updateElement(url, element) {
    return this.http.put(this.backendUrl + '/' + url, element, this.checkauth);

  }
  deleteElement(url, element) {
    return this.http.delete(this.backendUrl + '/' + url + '/' + element, this.checkauth );
  }


  /**
   * *********************************************
   * *********************************************
   * ****** FIN GENERIC METHOD WITH TOKEN ********
   * *********************************************
   * *********************************************
   */


  /**
   * *********************************************
   * *********************************************
   * **** DEBUT GENERIC METHOD WITHOUT TOKEN *****
   * *********************************************
   * *********************************************
   */

  // WOT = WithOut Token
  createElementWOT(url, element) {
    return this.http.post(this.backendUrl + '/' + url, element);
  }

  getElementsWOT(url) {
    return this.http.get(this.backendUrl + '/' + url);
  }

  getOneElementsWOT(url, id) {
    return this.http.get(this.backendUrl + '/' + url + '/' + id);
  }
  getFor2ElementsWOT(url, element1, element2) {
    return this.http.get(this.backendUrl + '/' + url + '/' + element1 + '/' + element2);
  }
  getFor3ElementsWOT(url, element1, element2, element3) {
    return this.http.get(this.backendUrl + '/' + url + '/' + element1 + '/' + element2 + '/' + element3);
  }



  /**
   * *********************************************
   * *********************************************
   * ****** FIN GENERIC METHOD WITHOUT TOKEN *****
   * *********************************************
   * *********************************************
   */
}
