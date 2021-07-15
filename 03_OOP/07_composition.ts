{
    type CoffeeCup = {
        shot : number; // 입력받은 샷의 숫자
        hasMilk?: boolean; // 우유 포함 여부
        hasSugar?: boolean;
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


    interface MilkFrother{
        makeMilk(cup: CoffeeCup):CoffeeCup;
    }


    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('우유 데우는 중');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return{
                ...cup, 
                hasMilk: true,
            }
        }
    }

    // 거품기 2
    class FancyMildSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('우유 데우는 중');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return{
                ...cup, 
                hasMilk: true,
            }
        }
    }

    // 거품기 3
    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('우유 데우는 중');
        }

        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return{
                ...cup, 
                hasMilk: true,
            }
        }
    }


    interface sugarProvider{
        addSugar(cup: CoffeeCup):CoffeeCup;
    }

    // 설탕 제조기
    class AutomaticSugarMixer implements sugarProvider{
        private getSugar(){
            console.log('설탕 가져오는 중')
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return{
                ...cup, 
                hasMilk: true,
            }
        }
    }

    class CaffeLatteMachine extends CoffeeMachine{
        constructor(beans: number,  private milkFother: MilkFrother){
            super(beans);
        }
        //오버라이딩
        makeCoffee(shot: number): CoffeeCup{
            const coffee = super.makeCoffee(shot);
            return this.milkFother.makeMilk(coffee);
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(private beans: number, private sugar: sugarProvider){
            super(beans);
        }

         makeCoffee(shot: number): CoffeeCup {
             const coffee = super.makeCoffee(shot);
             return this.sugar.addSugar(coffee);
         }
    }

    class SweetCaffelatteMachine extends CoffeeMachine{
        constructor(private beans: number, private sugar: sugarProvider, private milk: MilkFrother){
            super(beans);
        }

        makeCoffee(shot: number): CoffeeCup{
            const coffee = super.makeCoffee(shot);
            return this.milk.makeMilk(this.sugar.addSugar(coffee));
        }
    }

    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMildSteamer();
    const coldMilkSteamer = new ColdMilkSteamer();

    const candySugar = new AutomaticSugarMixer();
    const sweetMachine = new SweetCoffeeMaker(12, candySugar);

    const latteMachien = new CaffeLatteMachine(12, cheapMilkMaker);
    const fancylatteMachien = new CaffeLatteMachine(12, fancyMilkMaker);
    const coldlatteMachien = new CaffeLatteMachine(12, coldMilkSteamer);
    
    const sweetLatteMachine =  new SweetCaffelatteMachine(12, candySugar, cheapMilkMaker);
}
 