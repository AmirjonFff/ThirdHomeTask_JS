![The San Juan Mountains are beautiful!](/img/oll.png "San Juan Mountains")
<h1> Scope in JS</h1>
В обшим JavaScript имеет четире типы **SCOPE**:
<ul>
<li>Global scope: Область по умолчанию для всего кода</li>
<li>Function scope: Это scope внутри fanction</li>
<li>Block scope: эта scope ограничивает переменную
внутри определенного блока, из доступа вне блока</li>
<li>Module scope</li>
</ul>

![The San Juan Mountains are beautiful!](/img/scope.png "San Juan Mountains")
**const** и **let** - block scope <br>
**var** - fanction scope

# Hoisting in JS
Hoisting в JavaScript — это поведение, при котором функцию или переменную можно использовать до ее создания.
В JavaScript **function declaration** и **var** 
является Hoisting <br><br>
**Function Expression** и **let** и **const** использовать до ее создания технический работают а практически не работают. Это процес на JavaScript називается **Temporal Dead Zone**(мертвые зона).<br>
![The San Juan Mountains are beautiful!](/img/housting.png "San Juan Mountains")
Например:<br>
### Hoisting
console.log(test); //result-undefined;<br>
console.log(getSummTwo(5,10));//result-15;<br>
var test = 20;<br>

function getSummTwo(a, b) {
    return a+b;
}

### Temporal Dead Zone in JS

console.log(numTem1);//result-ReferenceError: Cannot access 'numTem1' before initialization;<br>
console.log(numTem2); //ReferenceError: Cannot access 'numTem2' before initialization<br>
console.log(autoSumm(20,10));//ReferenceError: Cannot access 'autoSumm' before initialization<br>

const numTem1 = 23;<br>
let numTem2 = 23;<br>
let autoSumm = (a,b) => a+b;<br>

# Recursion in JS

Рекурсия — это исползовани function внутри function. Рекурсия — это когда функция вызывает сама себя до тех пор, пока кто-то ее не прервет.<br>
![The San Juan Mountains are beautiful!](/img/zam.png "San Juan Mountains")
Например: <br>
function factorial(n) { <br>
    if(n===1){ <br>
        return 1; <br>
    } <br>
    return n * factorial(n-1); <br>
} <br>

console.log(factorial(5)); <br>

# Closure in JS

Closure - внутри функции создат локалний функцию  и он доступен за радителский функцию. Для взваюший локалний функцию надо бахшидан за перемени.<br>
![The San Juan Mountains are beautiful!](/img/clouse.png.png "San Juan Mountains")
Например: <br>
function Domen(dom) {<br>
    return function comp(str) {<br>
        return `${str}.${dom}`;<br>
    }<br>
}<br>

let compani = Domen("com");<br>
console.log(compani("google"));//result-google.com<br>
console.log(compani("yandex"));//result-yandex.com<br>
