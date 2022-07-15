import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TreeService } from './services/tree.service';
import { TreeWork } from './services/treeWork.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'save-our-street-trees';

  public twd: TreeWork[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor( private treeService: TreeService ){}

  // getAllTreeWorkOrders() {
  //   this.treeService.getTreeData().pipe(takeUntil(this.destroy$)).subscribe((twd: any[] ) => {
  //     this.twd = twd;
  //   });
  // }

  ngOnInit() {
    this.treeService.getTreeData().pipe(takeUntil(this.destroy$)).subscribe((twd: any[] ) => {
      this.twd = twd;
      console.log(this.twd)
      console.log(this.twd[0])
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
