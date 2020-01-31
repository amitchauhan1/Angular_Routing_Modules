import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent, LoginComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    FooterComponent, HeaderComponent, SidebarComponent, LoginComponent, RegisterUserComponent
  ]
})
export class CoreModule {
  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'CoreModule is already loaded. Import it in the AppModule only');
  //   }
  // }
}
