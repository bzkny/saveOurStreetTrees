import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TreeWork } from './treeWork.model'

@Injectable({
  providedIn: 'root'
})
export class TreeService {


  constructor( private http: HttpClient) {} 

  treeData = 'https://data.cityofnewyork.us/resource/82zj-84is.json';

  getTreeData(): Observable<TreeWork[]> {
    return this.http.get<TreeWork[]>(this.treeData)
  }
  
}


