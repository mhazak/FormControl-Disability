import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialCaseComponent } from './components/disability/initial-case/initial-case.component';
import { ChangeTriggerComponent } from './components/disability/change-trigger/change-trigger.component';

export const INIT_PAGE_URL = 'init';
export const CHANGE_TRIGGER_PAGE_URL = 'change-trigger';

const routes: Routes = [
  { path: '', redirectTo: INIT_PAGE_URL, pathMatch: 'full' },
  { path: INIT_PAGE_URL, component: InitialCaseComponent },
  { path: CHANGE_TRIGGER_PAGE_URL, component: ChangeTriggerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
