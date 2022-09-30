import { Component, Input, OnInit } from '@angular/core';
import { FactoryOrValue } from 'rxjs';
// import { zip } from 'src/app/app.component';
import { TreeWorkOrder } from 'src/app/services/treeWork.model';
import { TreeService } from '../../services/tree.service';

interface FArray {
  names: string[];
}


@Component({
  selector: 'app-service-orders',
  templateUrl: './service-orders.component.html',
  styleUrls: ['./service-orders.component.scss']
})

export class ServiceOrdersComponent implements OnInit {

  @Input() Zip: number = 0;

  // public typeArr: FArray = ["Bea123","Anis1335","Aqsa9"]; 

  otherArr: string[] = ["Bea123","Anis45678","Aqsa9"]; 
  newArr: Array<string> = ["Bea123","Anis1335","Aqsa9"]; 

  constructor( private treeService: TreeService) { }

  public twd: Array<TreeWorkOrder> = [];
  
  ngOnInit(): void {
    // console.log(this.Zip);
    
    this.treeService.getTreeServiceData().subscribe((twd: Array<TreeWorkOrder>) => {
      this.twd = twd;
      twd 
      // console.log(typeof twd);
      // for(let entry in this.twd){ 
      //   // console.log(this.Zip);
      //   if(this.twd[entry].zipcode === this.Zip){
      //     // console.log("it's a match: " + this.twd[entry] );
      //   } else {
      //     // console.log("no match with " + this.twd[entry].zipcode );
      //   }
      // }
    });
    let wordHolder = [];
    let numberHolder = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // let numCheck = numberHolder.every((item) => this.otherArr.includes(item));

    // let one = this.otherArr.includes("1");
    // console.log(one);

    for (const i of this.otherArr ) {
      // console.log(i);
      let one = i.includes("1");
      console.log("one");

      // for (const j of i){

      //   // console.log(j);
        

      //   // if (j === "0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"){

      //   if (j === "1" || "2"){
      //     console.log(j);
      //     let convertedNum = parseInt(j);

      //     // console.log(convertedNum);
      //     numberHolder.push(convertedNum);
      //     // console.log(numberHolder);

      //   }
      //   else {
      //     wordHolder.push()
      //   }
      // }

      // console.log(numberHolder);
    }

    
   
  }

}
