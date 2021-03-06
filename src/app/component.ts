import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: Model = new Model();
    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
    getProducts(): Product[] {
        return this.model.getProducts();
    }
    selectedProduct!: string;
    // name = this.selectedProduct?this.selectedProduct.name : "None";
    getSelected(product: Product): boolean{
        return product.name == this.selectedProduct;
    }
}