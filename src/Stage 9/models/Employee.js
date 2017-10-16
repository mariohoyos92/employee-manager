export default class Employee {
  constructor(id,name,phone, title){
    this.name = name;
    this.phone = phone;
    this.id = id;
    this.title = title;
  }
  
updateName(str){
  this.name = str;
}

updatePhone(str){
  this.phone = str;
}

 updateTitle(str){
   this.title = str;
 }
}