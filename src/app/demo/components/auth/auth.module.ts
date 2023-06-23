import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,
        DialogModule
    ]
})
export class AuthModule { 
    productDialog: boolean = false;
}
