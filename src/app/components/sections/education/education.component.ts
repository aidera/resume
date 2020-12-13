import { Component, OnInit } from '@angular/core';

import {
  Certificate,
  HigherEducation,
  Course,
} from '../../../models/Education';
import {
  certificates,
  courses,
  higherEducations,
} from 'src/app/data/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  public higherEducations: HigherEducation[];
  public certificates: Certificate[];
  public courses: Course[];

  constructor() {}

  ngOnInit(): void {
    this.higherEducations = higherEducations.sort((a, b) => {
      const aTimestamp = a.dateTo ? a.dateTo.getTime() : 0;
      const bTimestamp = b.dateTo ? b.dateTo.getTime() : 0;
      return bTimestamp - aTimestamp;
    });
    this.certificates = certificates.sort((a, b) => {
      const aTimestamp = a.receivingDate ? a.receivingDate.getTime() : 0;
      const bTimestamp = b.receivingDate ? b.receivingDate.getTime() : 0;
      return bTimestamp - aTimestamp;
    });
    this.courses = courses.sort((a, b) => {
      const aTimestamp = a.dateTo ? a.dateTo.getTime() : 0;
      const bTimestamp = b.dateTo ? b.dateTo.getTime() : 0;
      return bTimestamp - aTimestamp;
    });
  }
}
