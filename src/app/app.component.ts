import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TreeService } from './services/tree.service';
import { TreeWork, TreeWorkOrder } from './services/treeWork.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'save-our-street-trees';

  public twd: Array<TreeWorkOrder> = [];
  public twa: string[] = [];

  public zip: number = 0;
  // destroy$: Subject<boolean> = new Subject<boolean>();

  constructor( private treeService: TreeService ){ }

  // getNewList(){
  //   let twa = this.extractServiceObjects(this.twd);
  // }

  // extractServiceObjects(twd: Array<TreeWorkOrder>) {

  //   let twa: string[] = [];
  //   for ( let objs of twd ) {
  //     if ( objs ) {
  //       twa.push(`${objs}`);
  //       // console.log(twa);
  //       // twa.push(...this.extractServiceObjects(objs.id).map())
  //     }
  //   }
  //   return twa;
  // }


  // getAllTreeWorkOrders() {
  //   // this.treeService.getTreeData().pipe(takeUntil(this.destroy$)).subscribe((twd: any[] ) => {

  //   this.treeService.getTreeServiceData().subscribe((twd: TreeWork[] ) => {  
  //     this.twd = twd;
  //   });


  // }

  // getWorkOrderObj() {
  //   twd.forEach(function(two) => {
  //     twa.push(twp)
  //   })
  // }


  ngOnInit() {
    this.zip = 11201;

    // this.getNewList();
    // console.log(this.getNewList());
    // this.getAllTreeWorkOrders();

  // getAllTreeWorkOrders() {
    this.treeService.getTreeServiceData().subscribe((twd: Array<TreeWorkOrder>) => {
      this.twd = twd;
      console.log(this.twd);

    let twa = twd.map(function(obj){return obj.buildingnumber})
    console.log(this.twa);

      // for ( let objs of twd ) {
      //   if ( objs ) {
      //     this.twa.push(`${objs}`);
      //     console.log(this.twa);
      //     // twa.push(...this.extractServiceObjects(objs.id).map())
      //   }
      // }
    })
    
    // extractServiceObjects(two: TreeWork[]) {

    //   let twa: string[] = [];
    //   for ( let objs of two ) {
    //     if ( objs.id ) {
    //       twa.push(`${objs}`);
    //       console.log(twa);
    //       // twa.push(...this.extractServiceObjects(objs.id).map())
    //     }
    //   }
  
    // }

  // function extractServiceObjects(two: TreeWorkOrder[]) {

  //   let twa: string[] = [];
  //   for ( let objs of two ) {
  //     if ( objs ) {
  //       twa.push(`${objs}`);
  //       // console.log(twa);
  //       // twa.push(...this.extractServiceObjects(objs.id).map())
  //     }
  //   }
  //   return twa;
  // }
  // extractServiceObjects(this.twd);
  // console.log(extractServiceObjects(this.twd));

  // console.log(this.twa);
    //   // console.log(this.twd[0]);

    //   // console.log(this.two);
    // });
    // this.getWorkOrderObj();
  // }

  // ngOnDestroy() {
  //   this.destroy$.next(true);
  //   this.destroy$.unsubscribe();
  // }
  }

}

