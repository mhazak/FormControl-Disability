import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialCaseComponent } from './components/disability/initial-case/initial-case.component';
import { ChangeTriggerComponent } from './components/disability/change-trigger/change-trigger.component';
import { EmitEventComponent } from './components/disability/emit-event/emit-event.component';

export const INIT_PAGE_URL = 'init';
export const CHANGE_TRIGGER_PAGE_URL = 'change-trigger';
export const EMIT_EVENT_PAGE_URL = 'emit-event';

const routes: Routes = [
  { path: '', redirectTo: EMIT_EVENT_PAGE_URL, pathMatch: 'full' },
  { path: INIT_PAGE_URL, component: InitialCaseComponent },
  { path: CHANGE_TRIGGER_PAGE_URL, component: ChangeTriggerComponent },
  { path: EMIT_EVENT_PAGE_URL, component: EmitEventComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
