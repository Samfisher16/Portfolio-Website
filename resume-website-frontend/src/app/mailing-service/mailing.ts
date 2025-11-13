import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class Mailing {
  postURL: string = 'https://api.emailjs.com/api/v1.0/email/send';
}
