import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MarioService } from '../../services/mario.service';
import { MkItem } from '../../mk-item';
import { ContainerComponent } from '../../components/container/container.component';

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

  public players = [
    'Player 1', 'Player 2', 'Player 3', 'Player 4'
  ];

  @ViewChildren('character') private characterSpinners: QueryList<ContainerComponent>;
  @ViewChildren('vehicle') private vehicleSpinners: QueryList<ContainerComponent>;
  @ViewChildren('wheel') private wheelSpinners: QueryList<ContainerComponent>;
  @ViewChildren('glider') private gliderSpinners: QueryList<ContainerComponent>;

  constructor(mario: MarioService) {
    this.characters = mario.getAllCharacters();
    this.vehicles = mario.getAllVehicles();
    this.wheels = mario.getAllWheels();
    this.gliders = mario.getAllGliders();
  }

  ngOnInit() {

  }

  async shuffleItems(player?: number): Promise<void> {
    const shuffleTime = 2000;

    const characters = this.randomizeCharacters();
    const vehicles = this.randomizeVehicles();
    const wheels = this.randomizeWheels();
    const gliders = this.randomizeGliders();

    let promises: Promise<number>[];
    if (player > -1) {
      promises = [
        this.characterSpinners.find((_, i) => i === player).spin(shuffleTime, characters[0].name),
        this.vehicleSpinners.find((_, i) => i === player).spin(shuffleTime, vehicles[0].name),
        this.wheelSpinners.find((_, i) => i === player).spin(shuffleTime, wheels[0].name),
        this.gliderSpinners.find((_, i) => i === player).spin(shuffleTime, gliders[0].name)
      ];
    } else {
      promises = flatten(
        this.characterSpinners.map((spinner, i) => spinner.spin(shuffleTime, characters[i].name)),
        this.vehicleSpinners.map((spinner, i) => spinner.spin(shuffleTime, vehicles[i].name)),
        this.wheelSpinners.map((spinner, i) => spinner.spin(shuffleTime, wheels[i].name)),
        this.gliderSpinners.map((spinner, i) => spinner.spin(shuffleTime, gliders[i].name))
      );
    }

    await Promise.all(promises);
  }

  randomizeCharacters(): MkItem[] {
    return shuffle(this.characters);
  }

  randomizeVehicles() {
    return shuffle(this.vehicles);
  }

  randomizeWheels() {
    return shuffle(this.wheels);
  }

  randomizeGliders() {
    return shuffle(this.gliders);
  }

  buildRandomList(list: MkItem[], count: number): MkItem[] {
    const result: MkItem[] = [];

    for (let i = 0; i < count; i++) {
      const r = Math.floor(Math.random() * (list.length - 1));
      result.push(list[r]);
    }

    return result;
  }
}

function flatten<T>(...arr: T[][]): T[] {
  return arr.reduce((previous, current) => previous.concat(current));
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length; i; i--) {
    const j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
  return a;
}
