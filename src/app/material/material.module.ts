
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';


const materials = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatDividerModule
];


@NgModule({
  declarations: [],
  imports: materials,
  exports: materials
  
})
export class MaterialModule { }
