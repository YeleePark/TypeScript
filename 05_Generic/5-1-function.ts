{

    // 아래 function은 number 타입의 인자만 check 할 수 있다.
    function checNotkNull(arg: number | null): number{
        if(arg == null){
            throw new Error('not valid number!');
        }

        return arg;
    } 



    // 아래 타입은 인자의 타입을 보장할 수 없다
    function checNotkNull2(arg: any | null): any{
        if(arg == null){
            throw new Error('not valid number!');
        }

        return arg;
    } 

    let res = checNotkNull2(123);
    console.log(res); 
    res = true; // any 타입이므로 타입 보장이 안된다
    console.log(res);

    // 해결법 -> generic 하게!
    function checNotkNull3<T>(arg: T | null): T{
        if(arg == null){
            throw new Error('not valid number!');
        }

        return arg;
    } 

    let number = checNotkNull3(123);
    console.log(number);
    // number = true; // error

    const boal= checNotkNull3(true);
    console.log(boal);

}