

export class Bill{
    title?:string;
    totalPrice?:number;
    street?:string;
  number?:number;
  itemDTOS?:number;
  create_At?:string;
  constructor(title: string,totalPrice:number,street:string, number:number, itemDTOS:number,create_At: string) {
    this.title = title;
    this.totalPrice = totalPrice;
    this.street = street;
    this.number = number;
    this.itemDTOS = itemDTOS;
    this.create_At = create_At;
  }
}
