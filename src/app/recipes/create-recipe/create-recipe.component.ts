import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToMain() {
    this.router.navigate(['/recipes']);
  }
}
