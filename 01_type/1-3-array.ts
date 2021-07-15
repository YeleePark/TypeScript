{
  // Array
  // const fruits: string[] = ['🍅', '🍌'];
  const fruits: Array<string> = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // fruits.push(); <- readonly 옵션 사용으로 인해 값 변경이 불가능
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];

  // 아래와 같은 방식은  코드가 길어질 경우 값을 확인하기 어렵다
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;

}
