import { Component } from '@angular/core';
import {ContactService} from "../../services/phone-contact-list.service";

@Component({
  selector: 'app-phone-contact-list',
  templateUrl: './phone-contact-list.component.html',
  styleUrl: './phone-contact-list.component.css'
})
export class PhoneContactListComponent {
  contactName: string = '';
  contactNumber: string = '';
  searchTerm: string = '';

  contactList: { name: string; phone: string }[] = [];
  filteredContactList: { name: string; phone: string }[] = [];

  constructor(private contactService: ContactService) {
    this.contactList = this.contactService.getContacts();
    this.filteredContactList = [...this.contactList];
  }

  addContact() {
    if (this.contactName.trim() && this.contactNumber.trim()) {
      const newContact = {
        name: this.contactName.trim(),
        phone: this.contactNumber.trim(),
      };
      this.contactService.addContact(newContact);
      this.updateContactList();
      this.contactName = '';
      this.contactNumber = '';
    } else {
      console.log('Please fill out both fields.');
    }
  }

  removeContact(contact: { name: string; phone: string }) {
    this.contactService.removeContact(contact);
    this.updateContactList();
  }

  clearAll() {
    this.contactService.clearAllContacts();
    this.updateContactList();
  }

  searchContacts() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredContactList = this.contactList.filter(contact =>
      contact.name.toLowerCase().includes(searchLower) ||
      contact.phone.includes(searchLower)
    );
  }

  updateContactList() {
    this.contactList = this.contactService.getContacts();
    this.searchContacts();
  }
}
