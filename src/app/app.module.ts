import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { InitialCaseComponent } from './components/disability/initial-case/initial-case.component';
import { ChangeTriggerComponent } from './components/disability/change-trigger/change-trigger.component';
import { EmitEventComponent } from './components/disability/emit-event/emit-event.component';
import { InfinityLoopComponent } from './components/disability/infinity-loop/infinity-loop.component';
import { MessagesModule } from 'primeng/messages';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InitialCaseComponent,
    ChangeTriggerComponent,
    EmitEventComponent,
    InfinityLoopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PanelMenuModule,
    InputTextModule,
    ButtonModule,
    MessagesModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
