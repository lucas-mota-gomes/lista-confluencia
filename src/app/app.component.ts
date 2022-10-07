import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private clipboard: Clipboard) { }
  title = 'listas';
  public i1: any = '';
  public i2: any = '';
  public i3: any = '';
  public model = [this.i1, this.i2, this.i3];
  public logged: boolean = false;
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
      console.log("🚀 ~ file: app.component.ts ~ line 30 ~ AppComponent ~ getMatch ~ arr", arr)
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
    console.log("🚀 ~ file: app.component.ts ~ line 27 ~ AppComponent ~ newVal ~ ar", ar)
    ar.push(event);
    this.array[index] = ar;
  }

  public copy() {
    let text: string = '';
    for (const i of this.array2) {
      text = text + ` ${i}`
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
      .catch(error => {
        console.error('Cannot read clipboard text: ', error);
      }
    );
  }

}
