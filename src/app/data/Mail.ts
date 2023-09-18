export class Mail{
  cc?: string;
  recipient?:string;
  msgBody ?: string;
  subject?:string;
  constructor( recipient:string, msgBody:string, subject:string) {
    // this.cc = cc;
    this.recipient = recipient;
    this.msgBody = msgBody;
    this.subject = subject;
  }
}
