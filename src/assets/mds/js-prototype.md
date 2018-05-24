## prototype
> 原型是一个对象，其他对象可以通过它实现属性继承。任何一个对象都可以成为继承，所有对象在默认的情况下都有一个原型，因为原型本身也是对象，所以每个原型自身又有一个原型。任何一个对象都有一个 `prototype` 的属性，记为: `__proto__` 。每当我们定义一个对象，其 `__proto__` 属性就指向了其 `prototype`。

### 原型的赋值
```javascript
// 声明a, b两个对象
var a = {
    name: "a",
    log: function () {
        console.log(this.name)
    }
};

var b = {
    name: "b"
};

// 没有赋值
console.log(b.__proto__);
// Object {...}
console.log(b.log);
// undefined
console.log(b.name);
// b

// 将对象a赋值给b作为其原型对象
b.__proto__ = a;
console.log(b.__proto__);
// Object { name: "a", log: log() }
console.log(b.log);
// function log()
console.log(b.name);
// b
```
> 可见在赋值之后 `a` 成为了 `b` 的原型，所以拥有了 `log` 方法。  
> 并且因为属性访问的优先级关系 `name` 属性依旧访问 `b` 对象自己的。

### 通过prototype实现类的继承
> ![原型图片](/assets/mds/prototype.png)

```javascript
var Person = function () {
    this.name = "a";
    this.call = function () {
        console.log("作为属性的call方法", this.name);
    }
};

console.log(Person.prototype);
// Object { … }
console.log(Person.__proto__);
// function ()

Person.prototype = {
    log: function () {
        console.log(this.name)
    },
    call: function () {
        console.log("name => ", this.name)
    }
};

var instancePerson = new Person();

console.log(instancePerson.prototype);
// undefined
console.log(instancePerson.__proto__);
// Object { log: log(), call: call() }
console.log(instancePerson.call);
// function Person/this.call()
instancePerson.call();
// 作为属性的call方法 a
```
> `prototype` 属性是存在于类上的，或者说是 `function` 上的。并且对于 `Person` 类来说同样具有 `__proto__` 属性。  
> 对于 `Person` 的实例来说是不具有 `prototype` 属性的，其 `__proto__` 则是 `Person` 类的 `prototype` 相同。  
> `call` 的调用因优先级原因调用对象自身的方法而不是原型方法。

```javascript
var Student = function () {
    this.school = "augmentum"
};

// 只继承方法
Student.prototype = Person.prototype;

var instanceStudent = new Student();
console.log(instanceStudent.name);
// undefined
instanceStudent.call();
// name =>  undefined
instanceStudent.log();
// undefined
```
```javascript
// 继承方法和属性
Student.prototype = instancePerson;

var instanceStudent = new Student();
instanceStudent.call();
// 作为属性的call方法 a
instanceStudent.log();
// a
```

> 原型的赋值本质上还是对象的赋值，赋值 `Person` 的实例就将 `name` 属性挂载到原型上。

```javascript
// 更新原型方法
Student.prototype.log = function () {
    console.log(this.name, this.school)
};

instanceStudent.log();
// a augmentum
```

```javascript
// 赋值原型后修改父级原型实现
Student.prototype = instancePerson;

instancePerson.call = function () {
    console.log("新的属性call", this.name)
};
var instanceStudent = new Student();
instanceStudent.call();
// 新的属性call a
```

```javascript
// 赋值原型后修改父级原型实现
Student.prototype = Person.prototype;

Person.prototype.call = function () {
    console.log("new call", this.name);
};
var instanceStudent = new Student();
instanceStudent.call();
// new call undefined
```

### 判断属性所属
```javascript
Student.prototype = instancePerson;

instanceStudent.name;
// a
console.log(instanceStudent.hasOwnProperty("name"));
// false
console.log(instanceStudent.hasOwnProperty("school"));
// true
```
> 属性可以访问但是并不代表此属性是实例自身的，`name` 现在是原型对象的属性。

### 判断原型对象
```javascript
Student.prototype = Person.prototype;

var instanceStudent = new Student();
console.log(Person.prototype.isPrototypeOf(instanceStudent));
// true
```