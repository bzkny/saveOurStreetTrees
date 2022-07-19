import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreeWork, TreeWorkOrder } from './treeWork.model'

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor( private http: HttpClient) {} 

  treeData = 'https://data.cityofnewyork.us/resource/82zj-84is.json';


  getTreeServiceData(): Observable<TreeWorkOrder[]> {
    return this.http.get<TreeWorkOrder[]>(this.treeData);
  }
  
}


