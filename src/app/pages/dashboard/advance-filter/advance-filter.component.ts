import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'advance-filter',
  templateUrl: './advance-filter.component.html',
  styleUrls: ['./advance-filter.component.scss']
})
export class AdvanceFilterComponent implements OnInit {
  sentimentLists: any = [];
  classificationLists: any = [];
  threatClassification: any = [];
  verifiedUser: any = [];
  countryDeskList: any = [];
  countryLists: any = [];
  socialmedia:any[]=[];


  countryDesk: any = "country"

  constructor(private cServices:CommunicationService) {   
    this.sentimentLists = this.sentiments();
    this.classificationLists = this.classification();
    this.threatClassification = this.threat();
    this.verifiedUser = this.verified();
    this.countryDeskList = this.desklist();
    this.countryLists = this.country();
    this.socialmedia = this.source();
  }


  ngOnInit(): void {
  }

  closepanel(){
    this.cServices.advancefilterpanel.next(false);
  }

  checkUncheckAll(event: any, arr: any) {
    let isCheck = event.target.checked;
    arr.forEach((item: any) => {
      item.checked = isCheck
    });
  }

  sentiments() {
    return [
      { title: "Positive", value: 1, checked: "checked" },
      { title: "Neutral", value: 0, checked: "checked" },
      { title: "Negative", value: -1, checked: "checked" },
    ]
  }

  classification() {
    return [
      { title: "Political", value: "politics", checked: "checked" },
      { title: "Terrorism", value: "terrorism", checked: "checked" },
      { title: "Crime", value: "crime", checked: "checked" },
      { title: "Hate Speech", value: "hate_speech", checked: "checked" },
      { title: "General", value: "general", checked: "checked" },
      { title: "Economy", value: "economy", checked: "checked" },
      { title: "Military", value: "military", checked: "checked" },
      { title: "Sports", value: "sports", checked: "checked" },
    ]
  }

  threat() {
    return [
      { title: "High", value: "high", checked: false },
      { title: "Medium", value: "medium", checked: false },
      { title: "Low", value: "low", checked: false },
      { title: "Neutral", value: "general", checked: false },
    ]
  }

  verified() {
    return [
      { title: "All", value: "", checked: false },
      { title: "Verified", value: "verified", checked: false },
      { title: "Not Verified", value: "notVerified", checked: false },
    ]
  }

  desklist() {
    return [
      { title: "Country", value: "country", checked: true },
      { title: "News Paper", value: "newspaper", checked: false },
    ]
  }

  country() {
    return [
      { title: "India", value: "in", checked: true },
      { title: "Pakistan", value: "pk", checked: true },
      { title: "Bangladesh", value: "bd", checked: true },
      { title: "China", value: "cn", checked: true },
      { title: "Nepal", value: "np", checked: true },
      { title: "Bhutan", value: "bt", checked: true },
      { title: "Myanmar", value: "mm", checked: true },
      { title: "Maldives", value: "mv", checked: true },
      { title: "Sri Lanka", value: "lk", checked: true },
      { title: "Afghanistan", value: "af", checked: true },
      { title: "Nigeria", value: "ng", checked: true },
      { title: "Sudan", value: "su", checked: true },
      { title: "Kenya", value: "ke", checked: true },
      { title: "Other", value: "kl", checked: true },
    ]
  }

  source(){
    return [
       {title: "Twitter", value: "tw", checked: true },
       {title: "Facebook", value: "fb", checked: true },
       {title: "Youtube", value: "yt", checked: true },
       {title: "Instagram", value: "insta", checked: true },
       {title: "Dailymotion", value: "dm", checked: true },
       {title: "Tumblr", value: "tm", checked: true },
       {title: "WordPress", value: "wp", checked: true },
       {title: "Blogger", value: "gb", checked: true },
       {title: "WhatsApp", value: "wtsap", checked: true },
       {title: "Telegram", value: "tg", checked: true },
       {title: "Linkedin", value: "linkedin", checked: true },
       {title: "DarkWeb", value: "darkweb", checked: true },
       {title: "Website", value: "website", checked: true },
       {title: "FTP", value: "ftp", checked: true },
       {title: "Google", value: "google", checked: true },
       {title: "Bing", value: "bing", checked: true },
       {title: "DuckDuckGo", value: "duckduckgo", checked: true },
       {title: "ChirpWire", value: "chirpwire", checked: true },
       {title: "Reddit", value: "reddit", checked: true },
       {title: "Flickr", value: "flickr", checked: true },
       {title: "ThinkTank", value: "ThinkTank", checked: true },
       {title: "VK", value: "vk", checked: true },
       {title: "Exalead", value: "exalead", checked: true },
       {title: "Baidu", value: "baidu", checked: true },
       {title: "TikTok", value: "tiktok", checked: true },
       {title: "Weibo", value: "weibo", checked: true },
       {title: "Zhihu", value: "zhihu", checked: true },
       {title: "Toutiao", value: "toutiao", checked: true },
       {title: "Youku", value: "youku", checked: true },
       {title: "Sogou", value: "sogou", checked: true },
       {title: "Qihoo 360", value: "qihoo360", checked: true },
    ]
  }


}
