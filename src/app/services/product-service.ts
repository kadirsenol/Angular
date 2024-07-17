import { Injectable } from "@angular/core";


@Injectable({
    providedIn:"root"
})
export class ProductService {

    constructor(private productDetail: ProductDetail) {

    }
    getProducts(): Product[] {
        const products:Product[] = [
                {no:1,name:"silgi",quantity:8},
                {no:5,quantity:5,name:"kalem"}
                // new product(1,"",5)
            ];
            return products;
    }
}

export class ProductDetail {
    price : number
}

export class Product {
    no: number;
    name: string;
    quantity: number;

    // constructor(no:number , name : string , quantity:number) {
    //      this.name = name;
    //      this.no = no;
    //      this.quantity = quantity   
    // }
}

