import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoublePipe } from './pipe/double.pipe';
import { Yedis } from './interfaces/yedis';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from "./pipe/search.pipe";
import { NumbersOnlyDirective } from './directives/numbers-only.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, DoublePipe, FormsModule, SearchPipe,NumbersOnlyDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes_project';
  message = { msj :'este es un mensaje'};
  date = new Date();
  number = 2;
  searchValue!:string;
  jediOrder: Yedis[] = [
    { name: "Obi-wan Kenobi", rank: "master" },
    { name: "Yoda", rank: "master" },
    { name: "Anakin Skywalker", rank: "padawan" },
    { name: "Mace Windu", rank: "master" },
    { name: "Adi Galia", rank: "master" }
  ]
}
