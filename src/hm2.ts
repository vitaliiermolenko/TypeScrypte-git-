interface Lecturer {
  name: string;
  surname: string;
  position: string;
  company: string;
  experience: number;
  courses: string;
  contacts: string;
}

class School {
  _areas: string[] = [];
  _lecturers: string[] = [];


  get areas(): string[] {
    return this._areas;
  }

  get lecturers(): string[] {
    return this._lecturers;
  }


  addArea(area: string): void {
    this._areas.push(area);
  }

  removeArea(area: string): void {
    const index = this._areas.indexOf(area);
    if (index !== -1) {
      this._areas.splice(index, 1);
    }
  }

  addLecturer(lecturer: string): void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturer: string): void {
    const index = this._lecturers.indexOf(lecturer);
    if (index !== -1) {
      this._lecturers.splice(index, 1);
    }
  }
}


class Area {
  _levels: string[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get levels(): string[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(level: string): void {
    this._levels.push(level);
  }

  removeLevel(level: string): void {
    const index = this._levels.indexOf(level);
    if (index !== -1) {
      this._levels.splice(index, 1);
    }
  }
}


class Level {
  private _groups: string[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }

  get groups(): string[] {
    return this._groups;
  }

  set groups(groups: string[]) {
    this._groups = groups;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get description(): string {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  addGroup(group: string): void {
    this._groups.push(group);
  }

  removeGroup(group: string): void {
    const index = this._groups.indexOf(group);
    if (index !== -1) {
      this._groups.splice(index, 1);
    }
  }
}

class Group {
  _area: string;
  _status: string;
  _students: string[] = [];

  constructor(directionName: string, levelName: string) {
    this._area = directionName;
    this._status = levelName;
  }

  get area(): string {
    return this._area;
  }

  get status(): string {
    return this._status;
  }

  get students(): string[] {
    return this._students;
  }

  addStudent(student: string): void {
    this._students.push(student);
  }

  removeStudent(student: string): void {
    const index = this._students.indexOf(student);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }

  set status(status: string) {
    this._status = status;
  }

  showPerformance(): string[] {
    const sortedStudents = this._students.sort((a, b) => a.localeCompare(b));
    return sortedStudents;
  }
}