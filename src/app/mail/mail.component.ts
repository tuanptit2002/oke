import { Component } from '@angular/core';
import {Mail} from "../data/Mail";
import {MailService} from "../service/mail.service";

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  constructor(private mailService:MailService) {
  }

  onSubmit(mail :any){
    console.log("mail ne", mail.value);
    let data = mail.value;
    mail = new Mail(data.recipient, data.msgBody, data.subject);
    this.mailService.sendMail(mail).subscribe(x => console.log(x));
  }
}
