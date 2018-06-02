import { Component, OnInit, Input } from '@angular/core';
import { MkItem } from '../../mk-item';

@Component({
  selector: 'mk-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  @Input() public items: MkItem[];

  constructor() { }

  ngOnInit() {
  }

  getImage(item: MkItem): string {
    return `assets/images/${item.image}`;
  }
}
