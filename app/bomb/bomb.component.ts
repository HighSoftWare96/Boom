import { TimerService } from './../timer.service';
import { AudioService } from './../audio.service';
import { Router } from '@angular/router';
import { Page } from 'ui/page';
import { AppComponent } from './../app.component';
import { Component, OnInit, Input, ViewChild } from "@angular/core";

@Component({
  selector: "bomb",
  templateUrl: `bomb/bomb.component.html`,
  styleUrls: ["bomb/bomb.component.css"],
})
export class BombComponent {

  private timeOut: any;
  public text: string = "Time's passing!";

  constructor(private page: Page, private router: Router, private audioService: AudioService, private timerService: TimerService) {
    this.audioService.playTick();
    this.timerService.startTimeout();
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  public boomFunction() {
    this.timerService.endTimeout();
  }
}
