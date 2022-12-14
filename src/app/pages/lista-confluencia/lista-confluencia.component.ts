import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-lista-confluencia',
  templateUrl: './lista-confluencia.component.html',
  styleUrls: ['./lista-confluencia.component.scss']
})
export class ListaConfluenciaComponent implements OnInit {

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  title = 'listas';
  public i1: any = '';
  public i2: any = '';
  public i3: any = '';
  public model = [this.i1, this.i2, this.i3];
  public logged: boolean = true;
  public user: string = '';
  public password: string = '';

  public array: any[] = [[], [], []];
  public array2: any[] = [];

  public getMatch() {
    let a1 = this.array[0];
    let a2 = this.array[1];
    let a3 = this.array[2];
    let arr = this.array;
    if(a3.length == 0){
      arr.pop();
    }

    let result = arr.shift().reduce(function (res: any[], v: any) {
      if (res.indexOf(v) === -1 && arr.every(function (a) {
        return a.indexOf(v) !== -1;
      })) res.push(v);
      return res;
    }, []);

    this.array[0] = a1;
    this.array[1] = a2;
    this.array[2] = a3;
    this.array2 = result;
  }

  public newVal(event: any, index: number) {
    let ar: string[] = this.array[index] ? this.array[index] : [];
    ar.push(event);
    this.array[index] = ar;
  }

  public copy() {
    let text: string = '';
    for (const i of this.array2) {
      text = text + `\n${i}`
    }
    this.clipboard.copy(text);
  }

  public logar() {
    if(this.user == 'admin' && this.password == 'admin123'){
      this.logged = true;
    }
    else{
      alert('usuário ou senha incorretos');
    }
  }

  public colar(index: number){
    navigator.clipboard.readText().then(
      text => {
        const result = text.split(/\r?\n/);
        for (const i of result) {
          this.array[index].push(i);
        }
      }
     )
      .catch((error: any) => {
        alert(`erro ao ler os dados copiados: ${JSON.stringify(error)}`);
      }
    );
  }

}
