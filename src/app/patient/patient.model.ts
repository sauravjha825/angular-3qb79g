export class Patient {
  public fname: string;
  public lname: string;
  public email: string;
  public bday: string;
  public address: string;
  public contact: string;
  public gender: string;
  public imagePath: string;

  constructor(fname: string, lname: string, email: string,bday: string, address: string, contact: string,gender: string,imagePath: string) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.bday = bday;
    this.address = address;
    this.contact = contact;
    this.gender= gender;
    this.imagePath = imagePath;
  }
}
