import { TimerService } from './timer.service';
import { Router } from '@angular/router';
import { Component } from "@angular/core";
import { exit } from 'nativescript-exit';
import { on as applicationOn, resumeEvent, ApplicationEventData, start as applicationStart } from "application";
import * as dialogs from "ui/dialogs";

@Component({
  selector: "my-app",
  templateUrl: `app.component.html`,
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  constructor(private router: Router, private timerService: TimerService) {
    
    var orientation = require('nativescript-orientation');  
    orientation.setOrientation("portrait");  
    orientation.disableRotation(); // The screen will no longer rotate 

    // dopo lo sblocco eventuale del telefono mi assicuro di ritornare in questa pagina in modo che l'animazione css si rinnovi
    applicationOn(resumeEvent, function name(args: ApplicationEventData): void {
      if (this.router.url == '/bomb') {
        this.router.navigate(['']);
        this.router.navigate(['/bomb']);
      }
    }.bind(this));

    var application = require('application');
    // application variable should already be included in the app.js file
    // Only do this on android
    if (application.android) {
      application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
        // siamo nel componente bomb
        if (this.router.url == '/bomb') {
          // stoppo il back
          args.cancel = true;
          // chiedo conferma
          dialogs.confirm({
            title: "Turn back",
            message: "Sure?",
            okButtonText: "Yes",
            cancelButtonText: "No",
          }).then(result => {
            if (result) {
              // torno indietro
              this.timerService.endTimeout();
            }
          });
        } else {
          exit();
        }
      }.bind(this));
    }
  }
}