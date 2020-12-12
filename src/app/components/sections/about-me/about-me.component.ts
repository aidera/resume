import { Component, OnInit } from '@angular/core';
import { softSkills } from '../../../data/skills';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  public skills = softSkills.sort((a, b) => {
    const skillAPriority = a.priority ? a.priority : 0;
    const skillBPriority = b.priority ? b.priority : 0;
    return skillBPriority - skillAPriority;
  });

  constructor() {}

  ngOnInit(): void {}
}
