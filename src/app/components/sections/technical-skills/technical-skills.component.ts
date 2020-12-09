import { Component, OnInit } from '@angular/core';

import { techSkills } from '../../../data/skills';
import { TechSkillCategory } from 'src/app/models/Skill';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.scss'],
})
export class TechnicalSkillsComponent implements OnInit {
  public skills = techSkills;
  public techSkillCategories = Object.keys(TechSkillCategory).slice(
    0,
    Object.keys(TechSkillCategory).length / 2
  );

  constructor() {}

  ngOnInit(): void {}
}
