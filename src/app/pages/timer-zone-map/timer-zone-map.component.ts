import { Component, OnInit } from '@angular/core';
import { TimerZoneService } from 'src/app/services/timer-zone.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Clipboard } from '@angular/cdk/clipboard';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-timer-zone-map',
  templateUrl: './timer-zone-map.component.html',
  styleUrls: ['./timer-zone-map.component.scss']
})
export class TimerZoneMapComponent implements OnInit {

  constructor(private readonly timerZoneService: TimerZoneService, private sanitizer: DomSanitizer, private clipboard: Clipboard, private messageService: MessageService) { }
  public gotHtml: any;
  public calendar: any;
  public time: any;
  public sinais: any;
  public sinaisList: any[] = [];
  ngOnInit(): void {

  }

  getZone() {
    // this.colar();
    this.getTimeZone([this.calendar?.replace('/', '%2F'), this.time, this.sinais]);
  }

  public colar() {
    navigator.clipboard.readText().then(
      text => {
        this.sinaisList = text.split(/\r?\n/);
      }
    )
      .catch((error: any) => {
        alert(`erro ao ler os dados copiados: ${JSON.stringify(error)}`);
      }
      );
  }

  reset() {
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

  table_to_array() {
    let rows: any;
    var table = document.getElementById('table');
    rows = table?.getElementsByTagName("tr");
    var arr = [];
    for (var i = 1, iLen = rows?.length; i < iLen; i++) {
      var cells = rows[i].getElementsByTagName("th");
      var cellArr = {};
      for (var j = 0, jLen = cells.length; j < jLen; j++) {
        let date = cells[0];
        let time = cells[1];
        let zone = cells[2];
        if (j == 2) {
          cellArr = {
            date: date.innerHTML,
            time: time.innerHTML,
            zone: zone.style.backgroundColor,
            index: i - 1
          };
        }
      }
      arr.push(cellArr);
    }
    return arr;
  }

  public copy() {
    const data = this.table_to_array();
    let inters = [];
    for (const iterator of data as any[]) {
      if (iterator.zone == 'rgb(132, 45, 47)') {
        delete this.sinaisList[iterator.index];
      }
      else if (iterator.zone == 'rgb(237, 50, 55)') {
        delete this.sinaisList[iterator.index];
      }
    }
    let text: string = '';
    for (const i of this.sinaisList) {
      if (i != undefined) {
        text = text + `\n${i}`;
      }
    }
    this.clipboard.copy(text);
    this.messageService.add({ severity: 'O Conteudo foi copiado para à area de transferência', summary: 'Conteudo filtrado copiado com sucesso', detail: '' });
  }
}
