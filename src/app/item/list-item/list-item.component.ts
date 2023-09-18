import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../service/itemService";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  item: any;

  constructor(private itemService: ItemService, private router: Router) {
    itemService.findItem().subscribe(data => {
      this.item = data;
      console.log('item vao r nhe', this.item);
    })
  }

  ngOnInit(): void {
  }

  deleteItem(item: any) {
    this.itemService.deleteItem(item).subscribe();
  }


}
