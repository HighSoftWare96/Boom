import { AudioService } from './../audio.service';
import { TNSPlayer } from 'nativescript-audio';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";

@Component({
  selector: "home",
  templateUrl: `home/home.component.html`,
  styleUrls: ["home/home.component.css"],
})
export class HomeComponent {

  constructor(private page: Page, private router: Router, private audioService: AudioService) {
    this.audioService.playBoom();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  public newAlert(): void {
    this.router.navigate(["/bomb"]);
  }
}