import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface UserDetails {
  name: string | null;
  age: number | null;
  yearsOrMonths: 'years' | 'months' | null;
  student: boolean | null;
  school: string | null;
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponent {
  @Output() addCard = new EventEmitter<UserDetails>();

  userDetails: UserDetails = {
    name: null,
    age: null,
    yearsOrMonths: null,
    student: null,
    school: null
  };

  getMaxAge(): number {
    return this.userDetails.yearsOrMonths === 'months' ? 12 : 125;
  }

  isFormValid(): boolean {
    return (
      !!this.userDetails.name &&
      !!this.userDetails.age &&
      this.userDetails.age <= this.getMaxAge() &&
      this.userDetails.student !== null &&
      !!this.userDetails.yearsOrMonths
    );
  }

  resetForm(): void {
    this.userDetails = {
      name: null,
      age: null,
      yearsOrMonths: null,
      student: null,
      school: null
    };
  }

  submitForm(): void {
    if (this.isFormValid()) {
      this.addCard.emit({ ...this.userDetails });
      this.resetForm();
    } else {
      alert('Please ensure all required fields are filled correctly before submitting.');
    }
  }
}