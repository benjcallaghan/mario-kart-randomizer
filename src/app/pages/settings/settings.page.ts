import { Component, OnInit } from '@angular/core';
import { KartSettings } from '../../kart-settings';
import { CharacterSize } from '../../character-size.enum';
import { VehicleType } from '../../vehicle-type.enum';

@Component({
  selector: 'mk-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  private settings: KartSettings = {
    allowedCharacters: CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large | CharacterSize.Mii,
    allowedVehicles: VehicleType.Kart | VehicleType.Bike | VehicleType.ATV,
    allowDuplicates: true
  };

  constructor() { }

  get isValidCharacters(): boolean {
    const required = CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large;
    return !!(this.settings.allowedCharacters & required);
  }

  get isValidVehicles(): boolean {
    const required = VehicleType.Kart | VehicleType.Bike | VehicleType.ATV;
    return !!(this.settings.allowedVehicles & required);
  }
}
