import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../service/categoryService";
import {Category} from "../../data/Category";
import {data} from "autoprefixer";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {

  constructor( private categoryService: CategoryService) {
  }

  onSubmit(data:any){

    // console.log(data.value,'day');
    // if(this.form.valid){
      this.categoryService.createCategory(data.value).subscribe(data =>{
        console.log('data day nhe ------',data);
      })

  }
}
