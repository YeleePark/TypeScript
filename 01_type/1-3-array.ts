{
  // Array
  // const fruits: string[] = ['π', 'π'];
  const fruits: Array<string> = ['π', 'π'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {
    // fruits.push(); <- readonly μ΅μ μ¬μ©μΌλ‘ μΈν΄ κ° λ³κ²½μ΄ λΆκ°λ₯
  }

  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ['name', 123];

  // μλμ κ°μ λ°©μμ  μ½λκ° κΈΈμ΄μ§ κ²½μ° κ°μ νμΈνκΈ° μ΄λ ΅λ€
  student[0]; // name
  student[1]; // 123

  const [name, age] = student;

}
