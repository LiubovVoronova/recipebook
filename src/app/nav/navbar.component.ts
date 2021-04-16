import { Component } from '@angular/core';
import { AuthService } from "../user/auth.service";
import { DataStorageService } from '../recipes/shared/data-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(public auth:AuthService, private dataStorage: DataStorageService) {}

  onSaveData() {
    this.dataStorage.storeRecipes();
  }

  onFetchData() {
    this.dataStorage.fetchRecipes().subscribe();
  }

}
