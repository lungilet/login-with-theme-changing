import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './modules/app-bootstrap.module';
import { CustomMaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserComponent, MessageDialog } from './components/user/user.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { HttpClientModule } from '@angular/common/http';
import { OverlayContainer } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    MessageDialog
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),//this is to remove the warning in the console
    BrowserAnimationsModule,
    CustomMaterialModule,
    AppRoutingModule,
    AppBootstrapModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgxSummernoteModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule
  ],
  entryComponents: [UserComponent, MessageDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
