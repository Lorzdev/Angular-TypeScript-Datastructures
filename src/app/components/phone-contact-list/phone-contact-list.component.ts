import { Component } from '@angular/core';

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {

  contactName: string = '';
  contactNumber: string = '';
  contactList: { name: string; phone: string }[] = [];

  addContact() {
    if (this.contactName.trim() && this.contactNumber.trim()) {
      const newContact = {
        name: this.contactName.trim(),
        phone: this.contactNumber.trim(),
      };
      this.contactList.push(newContact);

      this.contactName = '';
      this.contactNumber = '';
    } else {
      console.log('Please fill out both fields.');
    }
  }

  removeContact(contact: { name: string; phone: string }) {
    const index = this.contactList.indexOf(contact);
    if (index > -1) {
      this.contactList.splice(index, 1);
    }
  }
}
