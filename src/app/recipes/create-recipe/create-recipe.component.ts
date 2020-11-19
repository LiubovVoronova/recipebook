import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {
  isDirty = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  returnToMain() {
    this.router.navigate(['/recipes']);
  }
}

export function checkDirtyState(component: CreateRecipeComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this recipe. Do you want to cancel?');
  } else {
    return true;
  }
}
