import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/categoryService";
import {ItemService} from "../../service/itemService";
import {Category} from "../../data/Category";
import {Item} from "../../data/Item";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit{
  category:any
  selectedCategory: string = '';
  public it !:number;

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params) =>{
      this.it = param['get']("id");
      // this.category.id = param['get']("id");
      console.log('id day nhes-------',this.it);
    })
  }
  constructor(private activatedroute:ActivatedRoute, private categoryService: CategoryService, private itemService: ItemService,private router: Router) {
    this.listCategory();

  }
  listCategory(){
    this.categoryService.findCategories().subscribe(data =>{

      this.category = data;
      console.log("data day nhe........",this.category)
    })
  }
  onSubmit(data:any){
    // console.log("data day nhe----------",data.value);
    const categorys = new Category(this.selectedCategory);
    console.log(data.name)
    const item = new Item(data.value.name,data.value.price,data.value.image,categorys,this.it);
    console.log("item day nhe  ------",item);
    this.itemService.editItem(item).subscribe(data =>{
      console.log("oke nhe");
    })
    this.Native();
  }
  Native(){
    this.router.navigate(['full-layout/item']);
  }
}
