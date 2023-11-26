import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialCaseComponent } from './components/disability/initial-case/initial-case.component';

export const INIT_PAGE_URL = 'init';

const routes: Routes = [
  { path: '', redirectTo: INIT_PAGE_URL, pathMatch: 'full' },
  { path: INIT_PAGE_URL, component: InitialCaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
