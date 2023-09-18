import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {ItemService} from "../../service/itemService";
import {Router} from "@angular/router";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatLegacyFormFieldModule],
})
export class HomePageComponent implements AfterViewInit, OnInit{
  items:any;
  constructor(private itemService: ItemService, private router: Router) {
   this.itemService.findItem().subscribe(data => this.items = data);
    console.log('item home day ------------',this.items);
  }


  displayedColumns: string[] = ['position', 'name', 'price', 'image', 'action'];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

  }

  ngOnInit(): void {
    console.log("item lai ne",this.items);
  }
  detail(id : any){
    console.log("id ne --------",id);
    this.router.navigate(['full-layout/home/detail',id]);
}
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.items.filter = filterValue.trim().toLowerCase();
  // }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
