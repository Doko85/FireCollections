import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from './models/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users$: Observable<Array<User>>;
  constructor(private firestore: AngularFirestore) {
    this.users$ = this.firestore.collection<User>('users').valueChanges();
  }
}
