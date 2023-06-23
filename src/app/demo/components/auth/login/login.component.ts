import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router'; 
import { AuthenticationService } from 'src/app/demo/service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];

    email!: string;
    password!: string;
    item: any = {};
    productDialog: boolean = false;

    constructor(public layoutService: LayoutService, private router: Router, private authenticationService:AuthenticationService) { }

    onLogin(){
        if(this.authenticationService.logInUser(this.email, this.password)){
            this.authenticationService.setLoginStatus(true);
              this.router.navigate(['/brand']);
          }else{
            alert('Please enter valid credential.');
          }
        //this.router.navigate(['/']);
    }

    openRegister() {
        this.productDialog = true;
    }

    hideDialog() {
        this.productDialog = false;
    }
    
    save() 
    {
        this.hideDialog();
        // this.submitted = true;

        // if (this.product.name?.trim()) {
        //     if (this.product.id) {
        //         // @ts-ignore
        //         this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
        //         this.products[this.findIndexById(this.product.id)] = this.product;
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
        //     } else {
        //         this.product.id = this.createId();
        //         this.product.code = this.createId();
        //         this.product.image = 'product-placeholder.svg';
        //         // @ts-ignore
        //         this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
        //         this.products.push(this.product);
        //         this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
        //     }

        //     this.products = [...this.products];
        //     this.productDialog = false;
        //     this.product = {};
        // }
    }
}
