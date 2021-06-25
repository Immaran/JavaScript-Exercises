// Wypisz do konsoli wartości od 1 do 100, zastępując każdą wartość parzystą słowem "Fiz", a każdą podzielną przez trzy słowem "Buz" (lub słowem "FizBuz" jeśli jest podzielna zarówno przez 2 jak i przez 3). Wartości wypisz w pojedynczym wierszu - pojedynczą instrukcją console.log (np. budując string).
// Wczytaj od użytkownika (wykorzystując funkcję prompt()) długość promienia koła. Oblicz jego obwód i pole powierzchni. Wypisz je do konsoli, zaokrąglając wartość do dwóch miejsc po przecinku.
// Do każdego z poniższych podpunktów napisz osobną funkcję. Działanie zademonstruj wywołując je po kolei i wypisując zawartość tablicy po każdej operacji:
// Stwórz i wypełniaj tablicę losowymi wartościami z przedziału 1-10, do momentu gdy ich suma nie osiągnie 200.
// Znajdź wartość najmniejszą i usuń jej pierwsze wystąpienie.
// Znajdź wartość największą i usuń jej ostatnie wystąpienie.
// Wypisz do konsoli informację ile razy każda z wartości występuje w tablicy.
// Dziesięć pierwszych wartości (o indeksach 0-9) przenieś na koniec (nie zmieniając ich kolejności).
// Zadeklaruj tablicę wypełnioną pięcioma imionami (napisami). Następnie każde imię "zakoduj" zmieniając każdą literę "a" lub "A" na "4", a każdą "e" lub "E" na "3". Następnie z każdego imienia dłuższego niż 6 znaków wytnij środek, aby zostawić trzy pierwsze i trzy ostatnie litery, a na jego miejsce wstaw trzy kropki "...". Np. imię "Kazimierz" zmieni się w "K4z...3rz". Efekt wypisz do konsoli.
// Dany jest string zawierający nazwy towarów oddzielane przecinkami (np. "jajka, mleko, masło, chleb"). Na tej podstawie stwórz cennik - tablicę obiektów. Każdy obiekt w tej tablicy zawiera dwa pola - nazwę (wydobytą ze stringu) oraz cenę (losową wartość rzeczywistą z dokładnością do dwóch miejsc po przecinku). Wyświetl ją w konsoli. Następnie stwórz tablicę zakupów. Przenieś do niej wybrane losowo towary (nie więcej niż połowę), do każdego z nich dopisując ilość (losową). W konsoli wyświetl tablicę zakupów oraz całkowitą cenę.

console.log("Hello world!");

function FizBuz(){
    let string = "";

    for(i = 1; i <= 100; i++) {

        if( i % 2 == 0){
            string += "Fiz ";
        }
        if(i % 3 == 0){
            string += "Buz ";
        }
        if(i % 2 != 0 && i % 3 != 0){
            string += i + " ";
        }
    }
    return string;
}

function Circle(){
    let rad = prompt("Enter radius", "radius");

    console.log("Radius: " + rad);
    console.log("Circumference: " + Math.round(2*rad*Math.PI*100)/100);
    console.log("Area: " + Math.round(rad*rad*Math.PI*100)/100);
}

function create_array(){
    let array = [], sum = 0;
    do {
        let temp = Math.floor(Math.random() * 10) + 1;
        array.push(temp);
        sum += temp;
    } while(sum < 200);

    console.log(array);
    return array;
}

function remove_lowest(array){
    let lowest = array[0], index = 0;

    for(i = 1; i < array.length; i++){
        if(lowest > array[i]){
            lowest = array[i];
            index = i;
        }
    }

    array.splice(index, 1);
    console.log("lowest: " + lowest + " at index: " + index);
    console.log(array);
}

function remove_highest(array){
    let highest = array[0], index = 0;

    for(i = 1; i < array.length; i++){
        if(highest <= array[i]){
            highest = array[i];
            index = i;
        }
    }

    array.splice(index, 1);
    console.log("highest: " + highest + " at index: " + index);
    console.log(array);
}

function count_array(array, count){
    for(i = 0; i < array.length; i++){
        count[array[i]-1]++;
    }

    for(i = 0; i < count.length; i++){
        console.log(i + 1 + ": " + count[i]);
    }
}

function send_at_the_end(array){
    for(i = 0; i < 10; i++)
    {
        array.push(array.splice(0, 1)[0]);
    }
    console.log("3.5 Done. Here's result:");
    console.log(array);
}

function names(array){
    console.log(array);
    for(i = 0; i < array.length; i++){
        if(array[i].length > 6){
            array[i] =  array[i].replace(array[i].substring(3, array[i].length - 3), "...");
        }
        array[i] = array[i].replaceAll('A', '4');
        array[i] = array[i].replaceAll('a', '4');
        array[i] = array[i].replaceAll('E', '3');
        array[i] = array[i].replaceAll('e', '3');
    }
    console.log(array);
}

function shopping(string){
    let separated = goods.split(', ');
    let prices = [];

    for(i = 0; i < separated.length; i++)
    {
        prices.push({
            name: separated[i],
            price: Math.floor(Math.random() * 4000)/100
        })
    }
    console.log(prices);

    let shopping_list = [...prices];
    shopping_list = shopping_list.sort(() => Math.random() - 0.5);
    shopping_list.splice(1, Math.ceil(shopping_list.length / 2));
    console.log(shopping_list);

    for(i = 0; i < shopping_list.length; i++)
    {
        shopping_list[i].quantity = Math.floor(Math.random() * 5 + 1);
    }

    let sum = 0;

    for(i = 0; i < shopping_list.length; i ++)
    {
        sum += shopping_list[i].price * shopping_list[i].quantity;
        console.log(i+1 + ":\t" + shopping_list[i].name + "\t" + shopping_list[i].price + "\t* " + shopping_list[i].quantity + "\t" + (shopping_list[i].price * shopping_list[i].quantity).toFixed(2))
    }
    console.log("Sum: " + sum.toFixed(2));
}

// 1
// console.log(FizBuz());

// 2
// console.log(Circle());

// 3.1
// let array = create_array();

// 3.2
// remove_lowest(array);

// 3.3
// remove_highest(array);

// 3.4
// let count = new Array(10).fill(0);
// count_array(array, count);

// 3.5
// send_at_the_end(array);

// 4
// let names_array = ["Katarzyna", "Aleksandra", "Włodzimierz", "Paweł", "Anna"];
// names(names_array);

// 5
// let goods = "jajka, mleko, ser, masło, mąka, chleb, bułka, budyń, kisiel, ziemniaki, cebula, papryka, pomidor, ogórek, jabłko, banan, kiwi, mango, śliwka, baterie, płyn do naczyń, mydło, pasta, papier";
// shopping(goods);