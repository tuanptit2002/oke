import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CategoryService} from "../../service/categoryService";
import {Category} from "../../data/Category";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit{
  public it !:number;


  constructor(private activatedroute:ActivatedRoute, private router:Router,private categoryService: CategoryService) {
  }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params) =>{
      this.it = param['get']("id");
      // this.category.id = param['get']("id");
      console.log('id day nhes-------',this.it);
    })
  }
  onSubmit(data:any){
    // this.category.id = this.it;
    const category = new Category(data.value.describe,this.it,data.value.total);
    console.log(category);
    this.categoryService.editCategory(category).subscribe(data =>{
      console.log('data day nhe ------',data);
    })
    this.Native();
  }
  Native(){
    this.router.navigate(['full-layout/category']);
  }
}
