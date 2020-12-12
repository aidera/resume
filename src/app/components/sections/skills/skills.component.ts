import { Component, OnInit } from '@angular/core';

import { techSkills } from '../../../data/skills';
import { TechSkillCategory } from 'src/app/models/Skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills = techSkills.sort((a, b) => {
    const skillAPriority = a.priority ? a.priority : 0;
    const skillBPriority = b.priority ? b.priority : 0;
    return skillBPriority - skillAPriority;
  });
  public techSkillCategories = Object.keys(TechSkillCategory).slice(
    0,
    Object.keys(TechSkillCategory).length / 2
  );

  constructor() {}

  ngOnInit(): void {}
}
