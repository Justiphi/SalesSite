import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'products', component: Products, title: 'Products' },
  { path: 'about', component: About, title: 'About' },
  { path: 'contact', component: Contact, title: 'Contact' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
