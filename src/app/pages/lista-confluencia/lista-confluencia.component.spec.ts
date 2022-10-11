import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConfluenciaComponent } from './lista-confluencia.component';

describe('ListaConfluenciaComponent', () => {
  let component: ListaConfluenciaComponent;
  let fixture: ComponentFixture<ListaConfluenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaConfluenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConfluenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
