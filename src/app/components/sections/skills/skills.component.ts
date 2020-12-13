import { Component, OnInit } from '@angular/core';

import { Skill, SkillType } from '../../../models/Skill';
import { Certificate } from '../../../models/Education';
import { skills, skillTypes } from '../../../data/skills';
import { certificates } from '../../../data/education';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  public skills: Skill[];
  public skillTypes: SkillType[];
  public certificates: Certificate[];

  constructor() {}

  ngOnInit(): void {
    this.skills = skills.sort((a, b) => {
      return b.priority - a.priority;
    });

    this.skillTypes = skillTypes.sort((a, b) => {
      return b.priority - a.priority;
    });

    this.certificates = certificates.sort((a, b) => {
      const aTimestamp = a.receivingDate ? a.receivingDate.getTime() : 0;
      const bTimestamp = b.receivingDate ? b.receivingDate.getTime() : 0;
      return bTimestamp - aTimestamp;
    });

    /* Adding certificates to skills */
    this.certificates.forEach((certificate) => {
      if (certificate.skillIds && certificate.skillIds.length > 0) {
        certificate.skillIds.forEach((certificateSkill) => {
          this.skills.findIndex((element) => {
            return element.id === certificateSkill;
          });
          this.skills.forEach((skill) => {
            if (skill.id === certificateSkill) {
              if (skill.certificates) {
                skill.certificates.push(certificate);
              } else {
                skill.certificates = [certificate];
              }
            }
          });
        });
      }
    });
  }
}
