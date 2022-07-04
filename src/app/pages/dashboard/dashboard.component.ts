import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  advncdfilterPanel:boolean=false;

  constructor(private cServices:CommunicationService) {
    this.cServices.advancefilterpanel.subscribe((res:boolean)=> this.advncdfilterPanel=res);
   }

  ngOnInit(): void { }


}
