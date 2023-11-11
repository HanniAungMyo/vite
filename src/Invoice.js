import { productRender } from "./app/product";
import { addRecordHandler, recordObserver } from "./app/record";
import { addServiceHandler } from "./app/service";
import { manageProductHandler, printHandler, recordListHandler } from "./core/handler";
import { addRecord, addService, closeManageProductBox, manageProduct, print, recordList } from "./core/slelctor";

class Invoice {
    listener(){
      manageProduct.addEventListener("click",manageProductHandler)
      closeManageProductBox.addEventListener("click",manageProductHandler)
      addRecord.addEventListener("submit",addRecordHandler)
      recordList.addEventListener("click",recordListHandler)
      addService.addEventListener("submit",addServiceHandler)
      print.addEventListener("click",printHandler)
    }
    initialRender(){
    productRender()
    }
    observer(){
        recordObserver()
            }
init(){
    console.log("Invoice App Started")
    this.observer()

    this.initialRender()
    this.listener()
}
}
export default Invoice;