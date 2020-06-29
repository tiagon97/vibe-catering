import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor() {}
  isOpen: boolean = false;

  openModal() {
    this.isOpen = !this.isOpen;
  }
}
