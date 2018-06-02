import { Component, OnInit } from '@angular/core';
import { MarioService } from '../../services/mario.service';
import { MkItem } from '../../mk-item';

@Component({
  selector: 'mk-slots',
  templateUrl: 'slots.page.html',
  styleUrls: ['slots.page.scss'],
})
export class SlotsPage implements OnInit {
  public characters: MkItem[];
  public vehicles: MkItem[];
  public wheels: MkItem[];
  public gliders: MkItem[];

  constructor(mario: MarioService) {
    this.characters = mario.getAllCharacters();
    this.vehicles = mario.getAllVehicles();
    this.wheels = mario.getAllWheels();
    this.gliders = mario.getAllGliders();
  }

  ngOnInit() {

  }
}
