import { BombComponent } from './bomb/bomb.component';
import { HomeComponent } from './home/home.component';

export const routes = [
  { path: "", component: HomeComponent },
  { path: "bomb", component: BombComponent}
];

export const navigatableComponents = [
  HomeComponent,
  BombComponent
];