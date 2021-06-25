// Wykonaj następujące zadania:
// Napisz funkcję, która łączy dwie tablice przy pomocy wskazanej operacji - jako pierwszy parametr przyjmuje pewną funkcję dwuparametrową i wypełnia tablicę wyjściową wynikiem wykonania tej funkcje na kolejnych elementach obu tablic. Np. jeśli przekazano funkcję obliczającą sumę dwóch liczb oraz tablice [4, 5, 6] i [10, 20, 30], zostanie zwrócone [14, 25, 36].
//      Wypróbuj użycie tej funkcji do stworzenia tablicy punktów z dwóch tablic wypełnionych odpowiednio współrzędnymi x oraz y (czyli np. z tablic [1, 2, 3] oraz [7, 8, 9] zostaną stworzone [{x:1,y:7}, {x:2,y:8}, {x:3,y:9}]).
//      (***) Spróbuj napisać taką wersję tej funkcji, która może przyjąć dowolną liczbę tablic (oraz pewną funkcję przyjmującą liczbę parametrów równą liczbie tablic) - wówczas np. przekazanie [1,2,3], [5,6,7] i [10,20,30] oraz funkcji dodającej trzy liczby zwróci [16,28,40].
// Napisz funkcję, która przyjmuje dwa parametry oznaczające początek i koniec zakresu, a następnie zwraca funkcję bezparametrową, której kolejne wywołania będą zwracać kolejne całkowite wartości tego zakresu (lub NaN po jego przekroczeniu). Np. dla argumentów 3 i 5 kolejne wywołania zwróconej funkcji będą zwracać 3, 4, 5, NaN. Funkcja powinna działać również wtedy, gdy pierwszy parametr jest większy od drugiego (przechodząc zakres w drugą stronę), np. dla argumentów 7 i 3 kolejno będą zwracane wartości 7, 6, 5, 4, 3, NaN.

// W poniższych zadaniach nie korzystaj z pętli, a jedynie metod tablic, takich jak forEach, map, filter, reduce:
// Napisz funkcję, która jako argument przyjmuje napis, następnie zlicza w nim wystąpienia każdego znaku i zwraca jako obiekt-słownik.
// Napisz funkcję, która jako parametr przyjmuje tablicę, z której usuwa co drugi element, a następnie skaluje zawartość do przedziału [0,1] (czyli poddaje każdy element takiemu przekształceniu, by najmniejsza wartość stała się zerem, a największa jedynką), po czym wypisuje całość do konsoli, z dokładnością do dwóch miejsc po przecinku. W zadaniu wykorzystaj metody map i filter.
// Stwórz tablicę o zadanym rozmiarze, wypełnij ją losowymi wartościami z przedziału 1-10, a następnie policz (korzystając z metody reduce) ile występuje w niej liczb parzystych i ile wynosi iloczyn wszystkich jej elementów.

console.log("Hello world!");

function ex1_1(merge1_1, ar1, ar2){
    console.table(merge1_1(ar1, ar2));
}

function merge1_1(ar1, ar2){
    let ar3 = [];
    for(let i = 0; i<ar1.length; i++){
        ar3[i] = ar1[i] + ar2[i];
    }
    return ar3;
}

function ex1_2(merge1_2, ar1, ar2){
    console.table(merge1_2(ar1, ar2));
}

function merge1_2(ar1, ar2){
    let list = [];
    for(let i = 0; i<ar1.length; i++){
        list.push({
            x: ar1[i],
            y: ar2[i]
        })
    }
    return list;
}

function ex1_3(merge1_3, ...arrays){
    console.table(merge1_3(arrays[0], arrays[1], arrays[2]));
}

function merge1_3(...arrays){
    let ar_out = [];
    for(let i = 0; i<arrays[0].length; i++){
        ar_out[i] = arrays[0][i] + arrays[1][i] + arrays[2][i];
    }
    return ar_out;
}

function range(a, b){
    let A = a;
    let B = b;
    let i = 0;

    function iterate(){

        if(B - A > 0){
            if(A + i > B){
                return NaN;
            }
            else{
                return A + i;
            }
            i++;
        }
        else{
            if(A + i < B){
                return NaN;
            }
            else{
                return A + i;
            }
            i--;
        }
    }
    return iterate;
}

function count (word) {
    let ar = word.split('');
    let result = ar.reduce((dictionary, element) => {
        dictionary[element] = (dictionary[element] ?? 0) + 1
        return dictionary;
    }, {})
    console.table(result);
}

function reduce_and_scale (ar) {
    let filtered = ar.filter(function (_, index) {
        return index % 2 == 0;
    })
    console.table(filtered);

    console.table(filtered);
    let max = Math.max.apply(null, filtered);
    let min = Math.min.apply(null, filtered);
    filtered = filtered.map(val => (val - min) / (max - min));
    console.table(filtered);
} 

function create_array(x){
    let array = [];

    for (let i = 0; i < x; i++)
    {
        let temp = Math.floor(Math.random() * 10) + 1;
        array.push(temp);
    }

    console.table(array);
    return array;
}

function analyse(x){
    let array = create_array(x);
    let e = 0;

    function count(last, curr){
        if(curr % 2 == 0){
            e++;
        }
        return last * curr;
    }

    console.log("Product: " + array.reduce(count, 1));
    console.log("Even: " + e);
}


// 1.1
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
ex1_1(merge1_1, ar1, ar2)

// 1.2
ex1_2(merge1_2, ar1, ar2)

// 1.3
let ar3 = [7,8,9]
ex1_3(merge1_3, ar1, ar2, ar3)

// 2
let f = range(12, 9);
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());

// 3
let word = "europarlamentarzysta"
count(word);

// 4
let ar4 = create_array(6)
reduce_and_scale(ar4);

// 5
analyse(4);
