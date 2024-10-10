import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private contactList: { name: string; phone: string }[] = [
    { name: 'Camo Lorenz', phone: '09196611932' },
    { name: 'Amador Kaysie', phone: '09096533340' },
    { name: 'Decio Rodel', phone: '09853440944' },
    { name: 'Rodel Calda', phone: '09095488500' },
  ];

  getContacts() {
    return this.contactList;
  }

  addContact(contact: { name: string; phone: string }) {
    this.contactList.push(contact);
  }

  removeContact(contact: { name: string; phone: string }) {
    const index = this.contactList.indexOf(contact);
    if (index > -1) {
      this.contactList.splice(index, 1);
    }
  }

  clearAllContacts() {
    this.contactList = [];
  }
}
