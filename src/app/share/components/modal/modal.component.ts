import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isHovered: boolean = false;
  message: string = 'No'
  message1: string = 'Si'
  @Input() name!: string;
  @Input() age!: string;
  @Input() description!: string;
  @Input() image!: string;

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter() {
    this.isHovered = !this.isHovered;
    if ( this.isHovered ) {
      this.message = 'Si';
      this.message1 = 'No';
    }
  }

  mouseLeave() {
    this.isHovered = !this.isHovered;
    if ( !this.isHovered ) {
      this.message = 'No';
      this.message1 = 'Si';
    }
  }
}
