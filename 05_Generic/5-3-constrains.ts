{
    interface Employee{
        pay(): void;
    }

    class FullTimeEmployee implements Employee{
        pay(){
            console.log('full time!');
        }

        workFullTime(){

        }
    }

    class PartTimeEmployee{
        pay(){
            console.log('part time!');
        }

        workPartTime(){

        }
    }

    // 세부적인 타입을 인자로 받아서, 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지않다!
    function payBad(employee: Employee): Employee{
        employee.pay();
        return employee;
    }

    // const yelee = new FullTimeEmployee();
    // const seoyoon = new PartTimeEmployee();

    // const yeleeAfterPay = payBad(yelee);
    // const seoyoonAfterPay = payBad(seoyoon);

    interface Employee2<T>{
        pay(): void;
    }


    // 제네릭의 조건문 : Employee를 확장한 제네릭만 사용!
    function pay<T extends Employee>(employee: T): T{
        employee.pay();
        return employee;
    }

    const yelee = new FullTimeEmployee();
    const seoyoon = new PartTimeEmployee();

    const yeleeAfterPay = pay(yelee);
    const seoyoonAfterPay = pay(seoyoon);

    const obj = {
        name: 'yelee',
        age: 20,
    }

    const obj2 = {
        animal: '강아지',
    }

    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key];
    }

    console.log(getValue(obj, 'name'));
    console.log(getValue(obj, 'age'));
    console.log(getValue(obj2, 'animal'));

}