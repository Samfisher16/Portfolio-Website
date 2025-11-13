import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageDoesNotExist } from './page-does-not-exist/page-does-not-exist';
import { Resume } from './resume/resume';
import { Work } from './work/work';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '404-not-found', component: PageDoesNotExist },
  {
    path: 'work',
    component: Work,
  },
  {
    path: 'resume',
    component: Resume,
  },
  {
    path: 'contact',
    component: Contact,
  },

  {
    path: '**',
    redirectTo: '404-not-found',
  },
];
