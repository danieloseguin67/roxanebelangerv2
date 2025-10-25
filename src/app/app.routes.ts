import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Services } from './components/services/services';
import { Faq } from './components/faq/faq';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'services', component: Services },
  { path: 'faq', component: Faq },
  { path: 'about', component: About },
  { path: 'contact', component: Contact }
];
