import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//importar el routerModule para los routers
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

//crear este const y agregar todos los routes que hagamos
const appRoutes: Routes = [
  {path:'login', component: LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)//importar aca el const que creaste con los routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
