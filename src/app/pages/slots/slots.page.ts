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
  public tires: MkItem[];
  public gliders: MkItem[];

  constructor(mario: MarioService) {
    this.characters = mario.allCharacters;
  }

  ngOnInit() {

  }
}
