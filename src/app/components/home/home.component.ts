import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../service/firebase.service';
import { UserClass, UserInterface } from '../../models/user.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  time: number = 100; 
  valve: boolean = true;
   
  constructor(private firebaseService: FirebaseService) { }

  /*
    recibe los users, accede a sus propiedades ronda y puntos y los compara. En funcion del
    resultado devuelve 0 o -1, que nos sirve para el método sort
  */
  compareUsers(a: UserClass, b: UserClass){
    if(a.rounds == b.rounds){
      if(a.points<b.points){
        return 0
      }else{
        return -1
      }
    }else if(a.rounds < b.rounds){
        return 0
      }else {
        return -1
      }
  }

  //reording users each 2 seconds.
  reorderUsers(){
    if(this.valve){
      this.valve = false;
      setInterval(()=>{
        this.users.sort((a, b)=> this.compareUsers(a, b))
        this.valve = true; 
      }, 2000) 
    }
  }

  ngOnInit(): void {
    this.getUsers(); 
  }

  getUsers(): void{
  //it gets all users into this.users
    this.firebaseService.getAllUsers().snapshotChanges().pipe(
     map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.users = data;
      console.log("home.component.ts -> line 63: " + this.users);
    });

    if(this.valve){
    this.reorderUsers();}
  }


  createUser() : void {
    //create an user andsend info to server
    this.firebaseService.create(new UserClass("userTest4", "70", "1051", "1210", "img")).then((res) => {
        console.log('Created?? -> ' + res);
    });
  }

}


 



