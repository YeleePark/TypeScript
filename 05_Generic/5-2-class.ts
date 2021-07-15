{
    interface Either{
        left: () => number;
        right: () => number;
    }

    class SimpleEither implements Either{
        constructor(private leftValue: number, private rightValue: number){}

        left(): number {
            return this.leftValue;
        }

        right(): number {
            return this.rightValue;
        }
    }

    const either = new SimpleEither(4, 5);

    either.left();
    either.right();


    //
    interface Either2<L, R>{
        left: () => L;
        right: () => R;
    }

    class SimpleEither2<L, R> implements Either2<L, R>{
        constructor(private leftValue: L, private rightValue: R){}

        left(): L {
            return this.leftValue;
        }

        right(): R {
            return this.rightValue;
        }
    }

    const either2: Either2<number, string> = new SimpleEither2(4, 'hi');
    either.left();
    either.right();
}