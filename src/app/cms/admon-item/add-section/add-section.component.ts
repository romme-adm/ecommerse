import { Component, OnInit, ViewChild } from '@angular/core';
import bootstrap from 'bootstrap/dist/js/bootstrap';
@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
})
export class AddSectionComponent implements OnInit {
  modalDirect: bootstrap.Modal;
  constructor() {
    window.addEventListener('message', this.openForm, false);
  }

  ngOnInit(): void {}

  openForm(event) {
    if (event.data == 'open_add_section_form') {
      console.log(2);
      document.getElementById('openFormSectionBtn').click();
    }
  }
}
