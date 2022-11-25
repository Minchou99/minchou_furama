import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FacilityListComponent } from './facility-list/facility-list.component';
import { FacilityEditComponent } from './facility-edit/facility-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { FacilityCreateComponent } from './facility-create/facility-create.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { ContractCreateComponent } from './contract-create/contract-create.component';
import { ContractListComponent } from './contract-list/contract-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    FacilityListComponent,
    FacilityEditComponent,
    CustomerCreateComponent,
    FacilityCreateComponent,
    CustomerListComponent,
    NavigationComponent,
    CustomerEditComponent,
    ContractCreateComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
