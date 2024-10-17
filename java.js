
var Toyota = [
    {
        SerialNumber : 1,
        Model :" Toyota Fortuner",
        Sale : 29,
        price :19900000,

    },
    {
        SerialNumber : 2,
        Model :"Toyota Land Cruiser",
        Sale : 3,
        price :120000000,

    },
    {
        SerialNumber : 3,
        Model :" Toyota Corolla	",
        Sale : 12,
        price :	5970000

    },
    {
        SerialNumber : 4,
        Model :"Toyota Prius	",
        Sale : 23,
        price :4900000,

    },
    {
        SerialNumber : 5    ,
        Model :" Toyota 4Runner	",
        Sale : 30,
        price :14900000 

    },
]
var Mercedes = [
    {
        SerialNumber : 1,
        Model :" Mercedes Benz C Class",
        Sale: 16,
        price :27200000,

    },
    {
        SerialNumber : 2,
        Model :"Mercedes-Benz E-Class	",
        Sale : 4,
        price :72000000,

    },
    {
        SerialNumber : 3,
        Model:" Mercedes-maybach		",
        Sale : 7,
        price:	80000000


    },
    {
        SerialNumber : 4,
        Model :"Mercedes-amg Gt		",
        Sale : 9,
        price :33000000,

    },
    {
        SerialNumber : 5    ,
        Model :" Mercedes-Benz Sprinter	",
        Sale : 15,
        price:30000000


    },
]
var Audi = [
    {
        SerialNumber : 1,
        Model :" Audi E-tron",
        Sale : 16,
        price :81000000,

    },
    {
        SerialNumber : 2,
        Model :"Audi E-tron Gt	",
        Sale : 13,
        price :71000000,

    },
    {
        SerialNumber : 3,
        Model :"Audi Q8	",
        Sale: 12,
        price :85000000,

    },
    {
        SerialNumber : 4,
        Model :"Audi Q7",
        Sale : 23,
        price :25300000
        ,

    },
    {
        SerialNumber : 5    ,
        Model :" Audi RS5",
        Sale : 19,
        price :25000000 

    },
]
var Tesla = [
    {
        SerialNumber : 1,
        Model :"Tesla Model S	",
        Sale: 5,
        price :29000000        ,

    },
    {
        SerialNumber : 2,
        Model :"Tesla Model X	",
        Sale : 10,
        price :27700000,

    },
    {
        SerialNumber : 3,
        Model :"tesla model y",
        Sale: 12,
        price:	30000000,

    },
    {
        SerialNumber : 4,
        Model :"Tesla Cybertruck	",
        Sale: 8,
        price :8405269.15,

    },
    {
        SerialNumber : 5    ,
        Model:"Tesla Semi",
        Sale : 21,
        price :14900000 

    },
]

function display(e,target) {
    var target =document.getElementById(target);
    for(let i = 0 ; i < e.length ; i++){
        target.innerHTML +=(`<tr>
        <td>${e[i].SerialNumber}</td>
        <td>${e[i].Model}</td>
        <td>${e[i].Sale}</td>
        <td>${e[i].price}</td>
        <td>${e[i].price * e[i].Sale}</td>
        </tr>`)
     
    }
 
}

display(Toyota,"toyota");
display(Mercedes,"mercedes");
display(Audi,"Audi");
display(Tesla,"tesla");