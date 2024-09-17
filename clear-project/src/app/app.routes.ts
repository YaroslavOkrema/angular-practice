import { Routes } from '@angular/router';
import {ChildComponent} from "./child/child.component";
import {ParentComponent} from "./parent/parent.component";

export const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: '', redirectTo: '/parent', pathMatch: 'full' }
];
