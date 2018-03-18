import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { StarComponent } from '../star/star.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {  
  pageTitle: string = 'Product List';
  imageWidth: number = 70;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  constructor(private _productService: ProductsService) {     
    
  }

  ngOnInit() {
    this._productService.getProducts()
                    .subscribe(products => {
                      this.products = products;
                      this.filteredProducts = this.products;
                    },
                    error => this.errorMessage = <any>error);    
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((prod: IProduct) => prod.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  OnClickRating(msg: string): void{
    this.pageTitle = 'Product List: ' + msg;
  }

}
