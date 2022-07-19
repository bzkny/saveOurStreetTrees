import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AllTreesService {
  
  allTreeDataSource = 'https://data.cityofnewyork.us/resource/hn5i-inap.json';

  constructor( private http: HttpClient) { }

  // getTreeData(): Observable<TreeWork[]>
  allTreeData = this.http.get(this.allTreeDataSource);
  
  ngOnInit() {
    // console.log(this.allTreeData);
  }

}
