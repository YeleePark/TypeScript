{
    type CoffeeCup = {
        shot : number; // 입력받은 샷의 숫자
        hasMilk: boolean; // 우유 포함 여부
    }

    interface CoffeMaker{
        makeCoffee(shot: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shot:number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeMaker, CommercialCoffeeMaker{
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

    class AmateurUser{
        constructor(private machine: CoffeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
        }
    }

    class ProBarist{
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeans(50);
            this.machine.clean();
        }
    }

    const maker = CoffeeMachine.makeMachine(100);
    maker.fillCoffeeBeans(100);
    maker.makeCoffee(2); 
    // 콩 갈아서
    // 예열중~~
    // 커피 내리는중 : 2

    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(100);
    maker.fillCoffeeBeans(100);
    maker.makeCoffee(2);
    maker.clean();

    const amateur = new AmateurUser(maker);
    console.log(amateur.makeCoffee());
    const pro = new ProBarist(maker2);
    console.log(pro.makeCoffee());
}