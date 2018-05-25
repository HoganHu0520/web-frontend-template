## var
> javascript 只有函数作用域，没有块级作用域。  
> 局部变量的优先级高于全局变量

### ES5下变量声明
```javascript
var hello = "hello world";
console.log(hello);
// hello world
```

### 全局变量提升
```javascript
(function () {
    hi = "hi";  // 没有var关键字，自动提升到全局作用域
})();
console.log(hi);
// hi
```

### 局部变量提升
```javascript
var hello = "hello world";
(function () {
    console.log(hello);
    // undefined
    var hello = "hello hogan";
    console.log(hello);
    // hello hogan
})();
console.log(hello);
// hello world
```
> 可见 `function` 内部的第一次打印并不是全局变量 `hello` 的值，而是 `undefined`。因为方法内部的局部变量 `hello` 声明被提升。变量提升，所有的变量定义都会在代码执行时将其声明提升到对应函数的顶部，等同于以下代码。

```javascript
var hello = "hello world";
(function () {
    var hello;
    console.log(hello);
    // undefined
    hello = "hello hogan";
    console.log(hello);
    // hello hogan
})();
console.log(hello);
// hello world
```

### 函数作用域
> Javascript 的变量在ES5标准中是函数级作用域，从上面的例子可以看出 `hello` 在函数内部的变量并没有影响全局作用域的变量。接下来证明块级作用域是不是适用于函数定义。

```javascript
var hello = "hello world";

if (true) {
    var hello = "hello if";
}

console.log(hello);
// hello if
```
> 可见 `if` 方法块中的声明被提升到全局作用域，而不是块级作用域中。

### 函数提升
```javascript
test();
// test function
fun();
// Exception: TypeError: fun is not a function

function test() {
    console.log("test function");
}

var fun = function () {
    console.log("fun function");
};
```
> 将整个函数都提升都当前函数作用域的前面。  
只有函数声明才会被提升，函数变量是不会被提升的。