import { DebugElement, Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from '@angular/fire/database'
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { UserClass, UserInterface } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})


export class FirebaseService {

  private dbPath = '/users'

  usersRef: AngularFireList<UserClass> = null; 


  constructor(private db: AngularFireDatabase){ 

    this.usersRef = db.list(this.dbPath);

  }

  getAllUsers(): AngularFireList<UserClass>{
      return this.usersRef;
  }


  create(user: UserClass): any {
    return this.usersRef.push(user);
  }

}
