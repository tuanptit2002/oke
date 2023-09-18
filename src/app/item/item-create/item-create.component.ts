import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/categoryService";
import {data} from "autoprefixer";
import {Item} from "../../data/Item";
import {Category} from "../../data/Category";
import {ItemService} from "../../service/itemService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit{
  category:any
  selectedCategory: string = '';
  ngOnInit(): void {
  }
  constructor(private categoryService: CategoryService, private itemService: ItemService,private router:Router) {
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
     const item = new Item(data.value.name,data.value.price,data.value.image,categorys);
     console.log("item day nhe  ------",item);
      this.itemService.createItem(item).subscribe(data =>{
        console.log("oke nhe");
      })
    this.Native();
  }
  Native(){
    this.router.navigate(['full-layout/item']);
  }
}
