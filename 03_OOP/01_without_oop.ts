// 절차지향 프로그래밍으로 코딩~
{
    // makeCoffee 함수가 return할 객체
    type CoffeeCup = {
        shot : number; // 입력받은 샷의 숫자
        hasMilk: boolean; // 우유 포함 여부
    }

    // 현재 커피콩 그램
    let coffeeBeans: number = 0; 
    // 한샷당 필요한 커피콩 그램 (한샷당 7g 필요하다고 가정)
    const BEANS_GRAMM_PER_SHOT: number = 7; 

    // shot을 인자로 받아 CoffeeCup 객체를 return하는 함수
    function makeCoffee(shot: number): CoffeeCup{
        // 현재 가지고 있는 커피콩이 입력받은 샷이 필요로하는 커피콩 보다 작으면
        if(coffeeBeans < shot * BEANS_GRAMM_PER_SHOT){
            throw new Error('커피콩 모자라요 😭');
        }

        // 가지고 있는 커피콩에서 샤용한만큼 빼주기
        coffeeBeans -= shot * BEANS_GRAMM_PER_SHOT;
        
        // CoffeeCup 객체로 return
        return {
            shot : shot, 
            hasMilk : false
        };
    }

    // const result = makeCoffee(1);
    // console.log(result); // Error 커피콩 모자라요 😭

    // 커피콩 충전하기!
    coffeeBeans += 5 * BEANS_GRAMM_PER_SHOT; // 5잔 분량으로 충전충전
    const result2 = makeCoffee(2);
    console.log(result2); // result : { shot: 2, hasMilk: false }
}