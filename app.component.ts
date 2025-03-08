import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, CommonModule] ,
  standalone: true,
})
export class AppComponent {
  isModalOpen = false;
  user = {
    name: '',
    email: '',
    age: '',
    country: ''
  };

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    window.console.log('Form Submitted');
    this.closeModal();
  }
}
