import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../partial/header/header.component';
import { FooterComponent } from '../partial/footer/footer.component';
import { ConfirmDialogComponent } from '../partial/confirm-dialog/confirm-dialog.component';


const sharedComponent = [
  HeaderComponent,
  FooterComponent,
  ConfirmDialogComponent
]

@NgModule({
  declarations: [sharedComponent],
  imports: [CommonModule],
  exports: [sharedComponent]
})
export class SharedModule { }
