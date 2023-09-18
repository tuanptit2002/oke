import {Category} from "./Category";

export class Item{
  id?:number |null;
  name?: string;
  price?: number;
  image?:string;
  categoryDTO?:Category;
  constructor( name: string, price: number,image: string, category: Category,id?:number) {
    this.id = id || null;
    this.name = name;
    this.price = price;
    this.image = image;
    this.categoryDTO = category;
  }
}
