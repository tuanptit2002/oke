import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../service/categoryService";
import {data} from "autoprefixer";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  category: any

  constructor(private categories: CategoryService, private router: Router) {
  console.log("vao roi nhe")
    this.listCategory();
  }

  ngOnInit(): void {
    console.log("oke nhe")

  }

  listCategory(){
    this.categories.findCategories().subscribe(data =>{

      this.category = data;
      console.log("data day nhe........",this.category)
    })
  }

  // gotoEdit(){
  //   this.router.navigate(['edit']);
  // }
  // gotoDelete(){
  //   this.router.navigate(['full-layout/category/delete']);
  // }
  deleteCategory(id:number){
    this.categories.deleteCategory(id).subscribe();
  }
}
