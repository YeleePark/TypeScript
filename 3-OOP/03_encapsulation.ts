// 캡슐화
{
    // makeCoffee 함수가 return할 객체
    type CoffeeCup = {
        shot : number; // 입력받은 샷의 숫자
        hasMilk: boolean; // 우유 포함 여부
    }


    // 클래스 생성 (=템플릿 생성)
    class CoffeeMaker{
        // 외부에서 접근할 필요가 없으므로 private 설정
        private coffeeBeans: number = 0; 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 

        // 오로지 인자를 받아와서 coffeBeans 값 설정 가능
        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        // coffeeBeans는 private 변수 이므로 오로지 fillCoffeeBeans 함수를 통해 coffeeBeans를 채울 수 있다
        fillCoffeeBeans(beans: number){
            // 인자로 받는 값의 유효성 검사
            if(beans < 0){
                throw new Error('커피콩은 0보다 커야됩니다!');
            }

            this.coffeeBeans += beans;
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

    // const maker = new CoffeeMaker(100);
    // maker.coffeeBeans = 3;
    // maker.coffeeBeans = -15; // invaild

    
    const maker = new CoffeeMaker(100);
    maker.fillCoffeeBeans(100); // 커피콩 충전
    console.log(maker);


    /**
     * getter setter
     */
    class User{
        firstName: string;
        lastName: string;
        fullName: string;
        constructor(firstName: string, lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
            this.fullName = `${firstName} ${lastName}`;
        }
    }

    const user = new User ('yelee', 'park');
    console.log(user.fullName); // yelee park
    user.firstName = 'Seoyoon'
    console.log(user.fullName); // yelee park <- firstName이 변경되어도 기존에 fullName에 yelee park으로 할당되었기 때문에 yelee park으로 출력

    // 해결법1
    class User2{
        firstName: string;
        lastName: string;

        get fullName():string {
            return `${this.firstName} ${this.lastName}`
        }

        constructor(firstName: string, lastName: string){
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    const user2 = new User2 ('yelee', 'park');
    console.log(user2.fullName); // yelee park
    user2.firstName = 'Seoyoon'
    console.log(user2.fullName); // seoyoon park


    // 해결법2 
    class User3{
        get fullName():string {
            return `${this.firstName} ${this.lastName}`
        }

        constructor(private firstName: string, private lastName: string){
        }
    }

    const user3 = new User3 ('yelee', 'park');
    console.log(user2.fullName); // yelee park

    // 하나 더!
    class User4{
        get fullName():string {
            return `${this.firstName} ${this.lastName}`
        }

        private internalAge = 4;
        get age():number{
            return this.internalAge;
        }

        set age(num: number){
            if(age < 0){
                throw new Error ('나이가 0보다 작을 수 있나요...?;;;')
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string){
        }
    }

    const user4 = new User4 ('yelee', 'park');
    user4.age = 100;
    console.log(user4.age);
    console.log(user4.fullName);


}