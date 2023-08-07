import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent 
{
recipes: Recipe[] = 
[
        new Recipe('A Test Recipe','This is a Test Recipe', 'https://images.app.goo.gl/NSfS1Cmtn4qsr4bd7')
];
}
