import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialCaseComponent } from './components/disability/initial-case/initial-case.component';
import { ChangeTriggerComponent } from './components/disability/change-trigger/change-trigger.component';
import { EmitEventComponent } from './components/disability/emit-event/emit-event.component';
import { InfinityLoopComponent } from './components/disability/infinity-loop/infinity-loop.component';
import { DisabledValueComponent } from './components/disability/disabled-value/disabled-value.component';
import { OnlySelfComponent } from './components/disability/only-self/only-self.component';

export const INIT_PAGE_URL = 'init';
export const CHANGE_TRIGGER_PAGE_URL = 'change-trigger';
export const EMIT_EVENT_PAGE_URL = 'emit-event';
export const INIFINTY_LOOP_PAGE_URL = 'infinity-loop';
export const DISABLED_VALUES_PAGE_URL = 'disabled-values';
export const ONLY_SELF_PAGE_URL = 'only-self';

const routes: Routes = [
  { path: '', redirectTo: DISABLED_VALUES_PAGE_URL, pathMatch: 'full' },
  { path: INIT_PAGE_URL, component: InitialCaseComponent },
  { path: CHANGE_TRIGGER_PAGE_URL, component: ChangeTriggerComponent },
  { path: EMIT_EVENT_PAGE_URL, component: EmitEventComponent },
  { path: INIFINTY_LOOP_PAGE_URL, component: InfinityLoopComponent },
  { path: DISABLED_VALUES_PAGE_URL, component: DisabledValueComponent },
  { path: ONLY_SELF_PAGE_URL, component: OnlySelfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
