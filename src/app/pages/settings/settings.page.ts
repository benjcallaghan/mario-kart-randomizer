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
  // Needed to access enums inside the template
  public CharacterSize = CharacterSize;
  public VehicleType = VehicleType;

  private settings: KartSettings = {
    allowedCharacters: CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large | CharacterSize.Mii,
    allowedVehicles: VehicleType.Kart | VehicleType.Bike | VehicleType.ATV,
    allowDuplicates: true
  };

  constructor() { }

  get isValidCharacters(): boolean {
    const required = CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large;
    return this.isCharacterChecked(required);
  }

  get isValidVehicles(): boolean {
    const required = VehicleType.Kart | VehicleType.Bike | VehicleType.ATV;
    return this.isVehicleChecked(required);
  }

  isCharacterChecked(size: CharacterSize): boolean {
    return !!(this.settings.allowedCharacters & size);
  }

  isVehicleChecked(vehicle: VehicleType): boolean {
    return !!(this.settings.allowedVehicles & vehicle);
  }

  isDuplicatesChecked(): boolean {
    return this.settings.allowDuplicates;
  }
}
