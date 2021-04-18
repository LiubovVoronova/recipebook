import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../user/auth.service";
import { DataStorageService } from '../recipes/shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(public auth:AuthService, private dataStorage: DataStorageService) {}

  ngOnInit() {
    this.userSub = this.auth.currentUser.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

  onLogoutUser() {
    this.auth.logout();
  }
}
