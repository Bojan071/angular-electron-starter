import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './child-barrel.routes';
import { ChildBarrelComponent } from './child-barrel.component';

@NgModule({
  declarations: [
    ChildBarrelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class ChildBarrelModule {
  public static routes = routes;
}
