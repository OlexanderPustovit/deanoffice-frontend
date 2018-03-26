import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StudentGroup} from '../../models/StudentGroup';
import {Course} from "../../models/Course";
import {CourseForGroupService} from "../../services/course-for-group.service";
import {GroupService} from "../../services/group.service";
import {CourseService} from "../../services/course.service";

@Component({
  selector: 'courses-for-groups',
  templateUrl: './courses-for-groups.component.html',
  styleUrls: ['./courses-for-groups.component.scss'],
  providers: [CourseService, GroupService]
})
export class CoursesForGroupsComponent implements OnInit {
  groups: StudentGroup[];
  selectedGroup: StudentGroup;
  selectedSemester: number;
  semesters: number[] = [];
  courses: Course[];
  selectedCourses: Course[];
  searchText = '';
  studiedCoursesLoading = false;
  constructor(private courseForGroupService: CourseService, private groupService: GroupService) {
  }

  ngOnInit() {
    this.groupService.getGroupsByFaculty().subscribe(groups => {
      this.groups = groups;
    })
  }

  private changeSemesters(){
    this.semesters = [];
    for (let i = 0; i < this.selectedGroup.studySemesters; i++){
      this.semesters.push(i + 1);
    }
  }

  onGroupChange(){
    this.changeSemesters();
  }

  onSemesterChange(){
    this.studiedCoursesLoading = true;
    if (this.selectedSemester) {
      this.courseForGroupService.getCoursesBySemester(this.selectedSemester).subscribe(cfg => {
        this.courses = cfg;
        this.studiedCoursesLoading = false;
      })
    }
  }

  changeGroup(event) {
    this.selectedGroup = event;
  }

  changeSemester(event) {
    this.selectedSemester = event;
  }
}
