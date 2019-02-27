// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let empty = {};
    error = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    coins = {};


    if (currency > 10000)
        return error;

    else if (currency <= 0)
        return empty;

    let Half = Math.floor(currency/50);
//    console.log(Half);
    if (Half > 0) coins.H = Half;

    let short_change_H = currency % 50;
//    console.log(short_change_H);

    let Quarter = Math.floor(short_change_H/25);
//    console.log(Quarter);
    if (Quarter > 0) coins.Q = Quarter;

    let short_change_Q = short_change_H % 25;
//    console.log(short_change_Q);

    let Dimes = Math.floor(short_change_Q/10);
//    console.log(Dimes);
    if (Dimes > 0) coins.D = Dimes;

    let short_change_D = short_change_Q % 10;
//    console.log(short_change_D);

    let Nickel = Math.floor(short_change_D/5);
//    console.log(Nickel);
    if (Nickel > 0) coins.N = Nickel;

    let short_change_N = short_change_D % 5;
//    console.log(short_change_N);

    let Pennie = Math.floor(short_change_N/1);
//    console.log(Pennie);
    if (Pennie > 0) coins.P = Pennie;

    return coins;
}
