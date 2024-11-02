import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  contadorPorMarca: { [marca: string]: number } = {};

  constructor(private vehiculosService: VehiculosService) {}

  ngOnInit(): void {
    this.vehiculosService.getVehiculos().subscribe((data) => {
      this.vehiculos = data;
      this.contarVehiculosPorMarca();
    });
  }

  contarVehiculosPorMarca(): void {
    this.vehiculos.forEach((vehiculo) => {
      if (this.contadorPorMarca[vehiculo.marca]) {
        this.contadorPorMarca[vehiculo.marca]++;
      } else {
        this.contadorPorMarca[vehiculo.marca] = 1;
      }
    });
  }
}
