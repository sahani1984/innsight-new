import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  signout(){
   const dialogData = new ConfirmDialogModel('Logout', 'Do you really want to logout?');
   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width:"600px",
      maxWidth:"600px",
      data:dialogData,
      panelClass:'custom_dialog'
   })
   dialogRef.afterClosed().subscribe(res=>{
    if(res) this.router.navigate(['/']);   
   })

  }


}
