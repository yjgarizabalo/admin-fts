import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Boards } from './pages/boards/boards';
import { Board } from './pages/board/board';


export const routes: Routes = [
  // Login route
  { path: 'login', component: Login },
  // Boards route
  {  path: 'boards', component: Boards },
  // Board route
  { path: 'board', component: Board },

  // Redirect to login if no path matches
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
