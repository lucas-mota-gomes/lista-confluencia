import { Component, OnInit } from '@angular/core';
import { TimerZoneService } from 'src/app/services/timer-zone.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-timer-zone-map',
  templateUrl: './timer-zone-map.component.html',
  styleUrls: ['./timer-zone-map.component.scss']
})
export class TimerZoneMapComponent implements OnInit {

  constructor(private readonly timerZoneService: TimerZoneService, private sanitizer:DomSanitizer) { }
  public gotHtml: any;
  public calendar: any;
  public time: any;
  public sinais: any;
  public sinaisList: any[] = [];
  ngOnInit(): void {

  }

  getZone(){
    // this.colar();
    this.getTimeZone([this.calendar?.replace('/', '%2F'), this.time, this.sinais]);
  }

  public colar(){
    navigator.clipboard.readText().then(
      text => {
        this.sinais = encodeURI(text);
        this.sinaisList = text.split(/\r?\n/);
      }
     )
      .catch((error: any) => {
        alert(`erro ao ler os dados copiados: ${JSON.stringify(error)}`);
      }
    );
  }

  reset(){
    this.gotHtml = undefined;
  }

  async getTimeZone(val: any[]) {
    console.log(this.sinais);
    let result = await this.timerZoneService.getTimeZone(`action=send-sinal&desc_crit=N&type=2&datec=${val[0]}&time=${val[1]}&textsinais=${this.sinais}`);
    result = result?.replace('|', '').replace('||', '').replace('1|', '') as string;
    this.timerZoneService.minify(result).then((valor: any) => {
      this.gotHtml = this.sanitizer.bypassSecurityTrustHtml(valor);
    })
  }

}
