// W JS stwórz program definiujący Listę towarów wraz z produktami. Produkty powinny być opisane minimum następującymi właściwościami: (id, nazwa, model, cena, zużycieEnergii (kWh)). Każdy produkt powinien posiadać następujące metody:
// koszt(), która zwraca wartość cenę prodkutu.
// kosztEnergii(), która zwraca koszt zużycia energii danego produktu przy założenej cenie energii (zmienna w programie) i zużyciu produktu.
// wiekProduktu(), która zwraca jego wiek na podstawie podanego rocznika.
// wiekProduktuLata(), która zwróci odpowiednio 1 rok, 2 lata, 3 lata, 4 lata, 5 lat, 6 lat, itd. w zależności od wieku zwróconego w metodzie wiekProduktu()
// konstruktor

// ListaTowarów zaś powinna zwierać metody:
// wypiszProdukt(idProduktu)
// wypiszWszystkieProdukty()
// dodajProdukt(produkt) - rzuca wyjątek jeśli produkt o tym id już jest na liście
// zmieńProdukt(idProduktu, produkt) - znajduje produkt o tym ID i podmienia wszystkie jego składowe wartościami z obiektu produkt

// Dodatkowo zdefiniuj dwa szczegółowe typy ListyTowarów mianowicie Magazyn oraz Sklep, które rozszerzają ListeTowarów.

// Magazyn będzie zawierał metodę dodajProdukt(produkt, ilość), która oprócz samego produktu będzie zawierała ilość sztuk, które zostają dane. Czyli Magazyn będzie dodatkowo będzie zawierał stan magazynowy danego produktu.

// W przypadku Magazynu będzie możliwość zabrania produktu tj. zwrócenia kopii obiektu Produkt oraz zmniejszenia odpowiednio stanu magazynowego.

// Sklep zaś będzie zwykłą listą towarów, które można wyświetlić lub dodawać za pomocą metod: 
// dodajProdukt(nazwa, model, cena, zużycieEnergii) - id produktu powinno być generowane automatycznie
// dodajProdukt(idProduktu, nazwa, model, cena, zużycieEnergii)

// Na koniec dodaj zamówienie, które będzie umożliwiało dodanie produktów do zamówienia (po ID istniejącego produktu) oraz metodę zrealizujZamowienie, która to usuwa produkt odpowiedniej ilości sztuk z magazynu z którego pochodzi.

class Product{
    constructor(id, name, year, price, powerUsage){
        this.id = id;
        this.name = name;
        this.year = year;
        this.price = price;
        this.powerUsage = powerUsage;
    }

    cost(){
        return this.price;
    }

    powerUsageCost(EnergyPrice){
        return this.powerUsage * EnergyPrice;
    }

    age(){
        return new Date().getFullYear() - this.year;
    }

    ageString(){
        let age = this.age();
        if(age == 1)
            return age + " year";
        else
            return age + " years";
    }
}

class ProductList{
    constructor(){}
    array = [];

    returnProduct(idp){
        if(!(this.array.some(prod => prod.id == idp)))
            throw new Error('Product with id ' + idp + " doesn't exist");
        else{
            let idx = this.array.findIndex(prod => prod.id == idp);
            let t = this.array[idx];
            console.log(t.id + " " + t.name + " " + t.year + " " + t.price + " " + t.powerUsage);
        }
    }

    returnAll(){
        this.array.forEach(element => {
            let t = element;
            console.log(t.id + " " + t.name + " " + t.year + " " + t.price + " " + t.powerUsage);
        });
    }

    add(product){
        if(this.array.some(prod => prod.id == product.id))
            throw new Error('Product with id ' + product.id + " already exist");
        else
            this.array.push(product);
    }

    replace(idp, product){
        if(!(this.array.some(prod => prod.id == idp)))
            throw new Error('Product with id ' + idp + " doesn't exist");
        else{
            let idx = this.array.findIndex(prod => prod.id == idp);

            this.array.splice(idx, 1, product);
        }
    }
}

class Warehouse extends ProductList{
    constructor(){
        super();
    }
    
    add(product, quantity){
        if(this.array.some(prod => prod.product.id == product.id)){
            let idx = this.array.findIndex(prod => prod.product.id == product.id);
            this.array[idx].quantity += quantity;
        }
        else{
            this.array.push({product: product, quantity : quantity});
        }
    }

    returnProduct(idp){
        if(!(this.array.some(prod => prod.product.id == idp)))
            throw new Error('Product with id ' + idp + " doesn't exist");
        else{
            let idx = this.array.findIndex(prod => prod.product.id == idp);

            if(this.array[idx].quantity > 1){
                this.array[idx].quantity--;
                return Object.assign(this.array[idx].product);
            }
            else{
                //let temp = Object.assign(this.array[idx]);
                return this.array.splice(idx, 1)[0];
                //return temp;
            }
        }
    }
}

class Shop extends ProductList{
    constructor(){
        super();
    }

    add(...spec){
        if(spec.length == 4){
            let id = 0;
            while(this.array.some(prod => prod.id == id)){
                id++;
            }
            this.array.push(new Product(id, ...spec));
        }
        else{
            if(this.array.some(prod => prod.id == spec[0]))
                throw new Error('Product with id ' + spec[0] + " already exist");
            else
                this.array.push(new Product(...spec));
        }
    }
}

class Order{
    constructor(){}
    array = []

    add(idp, quantity){
        if(this.array.some(prod => prod.id == idp)){
            let idx = this.array.findIndex(prod => prod.id == idp);
            this.array[idx].quantity += quantity;
        }
        else{
            this.array.push({id: idp, quantity : quantity});
        }
    }

    confirm(){
        this.array.forEach(element => {
            for(let i = 0; i < element.quantity; i++){
                wareList.returnProduct(element.id);
            }
        });
    }
}

let p1 = new Product(1, "microphone", 2017, 50, 0.001);
let p2 = new Product(2, "headphones", 2017, 50, 0.001);
let p3 = new Product(3, "mouse", 2017, 50, 0.001);
let p4 = new Product(4, "keyboard", 2017, 50, 0.001);
let p5 = new Product(5, "monitor", 2017, 50, 0.001);
let p6 = new Product(6, "USB cable", 2017, 50, 0.001);
let p7 = new Product(7, "mouse pad", 2017, 50, 0.001);
let p8 = new Product(8, "graphic tablet", 2017, 50, 0.001);

console.log(p1.cost());
console.log(p1.powerUsageCost(0.65));
console.log(p1.age());
console.log(p1.ageString());

// ProductList

let prodList = new ProductList();

prodList.add(p1);

console.log("\n");
console.log(prodList);

//prodList.add(p1); //Error

prodList.add(p2);
prodList.add(p3);
prodList.add(p4);
prodList.add(p5);
prodList.add(p6);

console.log("\nreturn all:");
prodList.returnAll();

console.log("\nreturn by id:");
prodList.returnProduct(p3.id);
//prodList.returnProduct(p7.id); //Error


prodList.replace(p6.id, p7);
console.log("\nafter replace:");
prodList.returnAll();

console.log(prodList);

// Warehouse

let wareList = new Warehouse();


wareList.add(p6, 5);
wareList.add(p7, 5);
wareList.add(p8, 5);
wareList.add(p8, 5);

console.log("\n");
console.log(wareList);

// wareList.returnProduct(p6.id);
// wareList.returnProduct(p6.id);
// wareList.returnProduct(p6.id);
// wareList.returnProduct(p6.id);
// wareList.returnProduct(p6.id);
// wareList.returnProduct(p6.id);

// Shop: id, name, year, price, powerUsage

let shopList = new Shop();

console.log("\n");
console.log(shopList);

shopList.add(1, "scale", 2020, 35, 0);
shopList.add("blender", 2019, 120, 0.02)
shopList.add("mixer", 2018, 180, 0.015)

// Order: id, quantity

let order = new Order();

order.add(p6.id, 4);
order.add(p7.id, 2);
order.add(p8.id, 7);

order.confirm();