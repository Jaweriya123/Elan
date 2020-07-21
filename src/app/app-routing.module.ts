import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ColectionUnstichedComponent } from './colection-unstiched/colection-unstiched.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path:'',component: HomeContentComponent },
  { path:'collections',component: ColectionUnstichedComponent  },
  { path:'collections/product-name',component: ProductPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeContentComponent, ColectionUnstichedComponent, ProductPageComponent ]