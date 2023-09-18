import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../service/itemService";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Bill} from "../../data/Bill";
import {BillService} from "../../service/billService";



@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']

})
export class DetailItemComponent implements OnInit {
  public it !: number;
  public item: any;
  public totalMoney: number;
  public quantity: number;
  public tmp: number;

  constructor(private itemService: ItemService, private activeRouter: ActivatedRoute,
              private billService: BillService, private router: Router) {
  }

  ngOnInit(): void {
    this.totalMoney = 1;
    this.activeRouter.paramMap.subscribe((param: Params) => {
      this.it = param['get']("id");
      // this.category.id = param['get']("id");
      console.log('id day nhes-------', this.it);
    })
    this.itemService.getItem(this.it).subscribe(data => this.item = data);
    // this.totalMoney = this.item.price;
  }


  updateTotalAmount() {
    if (this.totalMoney === 1) {
      this.tmp = this.item.price;
      this.totalMoney = 0;
    }
    // console.log(this.totalMoney)
    // console.log(this.quantity);
    this.item.price = this.tmp * this.quantity;
    console.log('day tien nhe', this.item.price);
  }

  onSubmit(data: any) {

    console.log(data.value)

    const bill = new Bill('Hóa Đơn', this.item.price, data.value.street, this.quantity, this.it, data.value.date);
    console.log(bill);
    this.billService.createBill(bill).subscribe(data => {
        alert("Mua hàng thành công");
        this.router.navigate(["/full-layout/home"]);
      }
    );
  }
}
