import products from "../core/data";
import {productSelect, serviceList } from "../core/slelctor";
import { createService } from "./service";

export const productRender=()=>{
    products.forEach(({ name, id, price }) => {
        // productSelect.append(createOption(product.name,product.id))
        productSelect.append(new Option(name, id));
        serviceList.append(createService(id, name, price));
      });
}