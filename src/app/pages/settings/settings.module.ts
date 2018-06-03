import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';
import { PipesModule } from '../../pipes/pipes.module';
import { CanDeactivateGuard } from '../../guards/can-deactivate.guard';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    PipesModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
