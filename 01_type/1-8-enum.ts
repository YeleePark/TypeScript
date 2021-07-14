{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);

  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  console.log(day); //1
  day = 10;
  console.log(day); //10

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
  console.log(dayOfweek); // Wednesday -> enum의 문제점!

}
