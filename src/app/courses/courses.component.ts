import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  title = "Liste courses"
  liste = [
    { title: "C1", nb_eleve: 4 },
    { title: "C2", nb_eleve: 8 },
    { title: "C4", nb_eleve: 15 },
  ]

  nb_eleve?: number;

  constructor() { }

  ngOnInit(): void {
    this.getNbEleve();
  }

  getNbEleve() {
    this.nb_eleve = 0;
    for (let ue of this.liste) this.nb_eleve += ue.nb_eleve;
  }

  // onNewNb(delta: number) { this.nb_eleve ? += delta }

}
