class School {
    directions: Direction[] = [];
  
    addDirection(direction: Direction): void {
      this.directions.push(direction);
    }
  }
  
  class Direction {
    levels: Level[] = [];
  
    constructor(private _name: string) {}
  
    get name(): string {
      return this._name;
    }
  
    addLevel(level: Level): void {
      this.levels.push(level);
    }
  }
  
  class Level {
    groups: Group[] = [];
  
    constructor(private _name: string, private _program: string) {}
  
    get name(): string {
      return this._name;
    }
  
    get program(): string {
      return this._program;
    }
  
    addGroup(group: Group): void {
      this.groups.push(group);
    }
  }
  
  class Group {
    private _students: Student[] = [];
  
    constructor(private directionName: string, private levelName: string) {}
  
    get students(): Student[] {
      return this._students;
    }
  
    addStudent(student: Student): void {
      this._students.push(student);
    }
  
    showPerformance(): Student[] {
      const sortedStudents = this._students.sort(
        (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
      );
  
      return sortedStudents;
    }
  }
  
  class Student {
    private grades: Record<string, number> = {};
    private attendance: boolean[] = [];
  
    constructor(
      private firstName: string,
      private lastName: string,
      private birthYear: number
    ) {}
  
    get fullName(): string {
      return `${this.lastName} ${this.firstName}`;
    }
  
    set fullName(value: string) {
      [this.lastName, this.firstName] = value.split(" ");
    }
  
    get age(): number {
      return new Date().getFullYear() - this.birthYear;
    }
  
    setGrade(subject: string, grade: number): void {
      this.grades[subject] = grade;
    }
  
    markAttendance(present: boolean): void {
      this.attendance.push(present);
    }
  
    getPerformanceRating(): number {
      const gradeValues = Object.values(this.grades);
  
      if (gradeValues.length === 0) return 0;
  
      const averageGrade =
        gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
  
      const attendancePercentage =
        (this.attendance.filter((present) => present).length /
          this.attendance.length) *
        100;
  
      return (averageGrade + attendancePercentage) / 2;
    }
  }
  