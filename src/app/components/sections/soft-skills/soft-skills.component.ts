import { Component, OnInit } from '@angular/core';
import { softSkills } from '../../../data/skills';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent implements OnInit {
  public skills = softSkills.sort((a, b) => {
    const skillAPriority = a.priority ? a.priority : 0;
    const skillBPriority = b.priority ? b.priority : 0;
    return skillBPriority - skillAPriority;
  });

  constructor() {}

  ngOnInit(): void {}
}
