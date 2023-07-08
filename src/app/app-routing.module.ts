import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ServiceComponent } from './pages/service/service.component';
import { LoginComponent } from './pages/login/login.component';
import { BusinessviewComponent } from './pages/businessview/businessview.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:ProductpageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'businessview',component:BusinessviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
