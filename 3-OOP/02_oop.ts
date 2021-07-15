// 객체지향으로 프로그래밍~
{
    // makeCoffee 함수가 return할 객체
    type CoffeeCup = {
        shot : number; // 입력받은 샷의 숫자
        hasMilk: boolean; // 우유 포함 여부
    }


    // 클래스 생성 (=템플릿 생성)
    class CoffeeMaker{
        /**
         * 클래스에 필요한 속성 (멤버변수)
         */
        coffeeBeans: number = 0; 

        // BEANS_GRAMM_PER_SHOT은 변하지 않는 값이다.
        // 이를 멤버 변수로 둘 경우 CoffeeMaker 클래스를 이용해서 여러개의 인스턴스를 생성할 때마다 중복적으로 데이터가 생성되므로 데이터 낭비가 발생한다
        // 그래서 static 키워드를 붙여 변수를 instance-level이 아닌 class-level로 지정해준다
        static BEANS_GRAMM_PER_SHOT: number = 7; 

        /**
         * 클래스를 이용해 새로운 인스턴스를 만들 때 마다 호출 되어지는 함수
         * CoffeeMaker라는 클래스를 호출할 때 인자를 넣고 싶다면, consturctor 함수를 이용해야된다
         */
        constructor(coffeeBeans: number){
            // 클래스의 멤버변수인 coffeeBeans에 입력받은 coffeeBeans 인자값이 대입
            this.coffeeBeans = coffeeBeans;
        }

        //static 함수를 생성해서 새롭게 인스턴스를 생성하지 않고도 접근할 수 있다
        static makeMachine(coffeeBeans: number): CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        /**
         * 클래스에 필요한 함수
         */
        makeCoffee(shot: number): CoffeeCup{
            // 클래스 내에 있는 멤버 변수에 접근할 때는 'this'로 바인딩!
            if(this.coffeeBeans < shot * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('커피콩 모자라요 😭');
            }

            this.coffeeBeans -= shot * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            
            return {
                shot : shot, 
                hasMilk : false
            };
        }
    }

    // CoffeeMaker내 consturctor에 인자가 없을 떄
    // const maker = new CoffeeMaker();
    // console.log(maker); // 결과 : CoffeeMaker { coffeeBeans: 0, BEANS_GRAMM_PER_SHOT: 7 }

    const maker = new CoffeeMaker(100);
    console.log(maker); // 결과 : CoffeeMaker { coffeeBeans: 100 }, BEANS_GRAMM_PER_SHOT은 static변수이므로 출력되지 않는다

    const maker2 = CoffeeMaker.makeMachine(200);
    console.log(maker2);

}