import { Component, OnInit, OnDestroy } from '@angular/core';
import { KartSettings } from '../../kart-settings';
import { CharacterSize } from '../../character-size.enum';
import { VehicleType } from '../../vehicle-type.enum';
import { SettingsService } from '../../services/settings.service';
import { CanDeactivateComponent } from '../../guards/can-deactivate.guard';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'mk-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy, CanDeactivateComponent {
  // Needed to access enums inside the template
  public CharacterSize = CharacterSize;
  public VehicleType = VehicleType;

  private settings: KartSettings = {
    allowedCharacters: CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large | CharacterSize.Mii,
    allowedVehicles: VehicleType.Kart | VehicleType.Bike | VehicleType.ATV,
    allowDuplicates: true
  };

  constructor(private settingsService: SettingsService) { }

  async ngOnInit() {
    this.settings = await this.settingsService.loadSettings();
  }

  ngOnDestroy() {
    this.settingsService.saveSettings(this.settings);
  }

  canDeactivate(): boolean {
    return this.isValidCharacters && this.isValidVehicles;
  }

  get isValidCharacters(): boolean {
    const required = CharacterSize.Small | CharacterSize.Medium | CharacterSize.Large;
    return this.isCharacterEnabled(required);
  }

  isCharacterEnabled(size: CharacterSize): boolean {
    return !!(this.settings.allowedCharacters & size);
  }

  enableCharacter(size: CharacterSize, value: boolean) {
    if (value) {
      this.settings.allowedCharacters |= size;
    } else {
      this.settings.allowedCharacters &= ~size;
    }
  }

  get isValidVehicles(): boolean {
    const required = VehicleType.Kart | VehicleType.Bike | VehicleType.ATV;
    return this.isVehicleEnabled(required);
  }

  isVehicleEnabled(vehicle: VehicleType): boolean {
    return !!(this.settings.allowedVehicles & vehicle);
  }

  enableVehicle(vehicle: VehicleType, value: boolean) {
    if (value) {
      this.settings.allowedVehicles |= vehicle;
    } else {
      this.settings.allowedVehicles &= ~vehicle;
    }
  }

  isDuplicatesEnabled(): boolean {
    return this.settings.allowDuplicates;
  }

  enableDuplicates(value: boolean) {
    this.settings.allowDuplicates = value;
  }
}
