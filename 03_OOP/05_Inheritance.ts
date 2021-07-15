{
    type CoffeeCup = {
        shot : number; // 입력받은 샷의 숫자
        hasMilk: boolean; // 우유 포함 여부
    }

    interface CoffeMaker{
        makeCoffee(shot: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeMaker{
        private coffeeBeans: number = 0; 
        private static BEANS_GRAMM_PER_SHOT: number = 7; 

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans;
        }

        fillCoffeeBeans(beans: number){
            if(beans < 0){
                throw new Error('커피콩은 0보다 커야됩니다!');
            }

            this.coffeeBeans += beans;
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        private grindBeans(shot: number){
            if(this.coffeeBeans < shot * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('커피콩 모자라요 😭');
            }

            this.coffeeBeans -= shot * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
            console.log('콩 갈아서')
        }

        private preheat(){
            console.log('예열중~~')
        }

        private extract(shot: number): CoffeeCup{
            console.log(`커피 내리는중 : ${shot}`);
            return {
                shot : shot, 
                hasMilk : false
            };
        }

        clean(){
            console.log('청소중')
        }
    
        makeCoffee(shot: number): CoffeeCup{
            this.grindBeans(shot);
            this.preheat();
            return this.extract(shot);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine{

        private steamMilk(): void{
            console.log('우유 스티밍')
        }
        

        //오버라이딩
        makeCoffee(shot: number): CoffeeCup{
            const coffee = super.makeCoffee(shot);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    const machine = new CoffeeMachine(25);
    const latte = new CaffeLatteMachine(25);
    console.log(latte.makeCoffee(2));
}
