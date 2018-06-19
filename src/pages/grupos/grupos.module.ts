import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GruposPage } from './grupos';

@NgModule({
  declarations: [
    GruposPage,
  ],
  imports: [
    IonicPageModule.forChild(GruposPage),
  ],
})
export class GruposPageModule {}
