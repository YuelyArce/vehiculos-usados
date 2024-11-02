import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculosComponent } from './listar-vehiculos.component';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;

    // Simulamos una lista de 3 vehículos para la prueba
    component.vehiculos = [
      { id: 1, marca: 'Renault', linea: 'Kangoo', referencia: 'VU Express', modelo: 2017, kilometraje: 93272, color: 'Blanco', imagen: '' },
      { id: 2, marca: 'Chevrolet', linea: 'Spark', referencia: 'Life', modelo: 2018, kilometraje: 55926, color: 'Plata', imagen: '' },
      { id: 3, marca: 'Nissan', linea: 'March', referencia: 'Active Plus', modelo: 2019, kilometraje: 31298, color: 'Plata', imagen: '' },
    ];

    fixture.detectChanges();
  });

  it('should create a table with three rows plus header', () => {
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
