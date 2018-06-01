## CSS counters 计数器
> CSS3 Counters可以允许我们使用css对页面中的任意元素进行计数，实现类似于有序列表的功能。与有序列表相比，突出特性在于可以对任意元素计数，同时实现个性化计数。

### 计数器属性
1. `counter-reset` : 定义计数器标识符，包括初始值。
2. `counter-increment` : 设置计数器的增数。
3. `content` : 在 `before` 和 `after` 伪类中设置显示内容。
4. `counter()` : 在 `content` 属性中使用，用来调用计数器。
5. `counters()` : 在 `content` 属性中使用，重复计数器。
6. `@counter-style` : 自定义列表样式。
    > `@counter-style` `counerStyleName` {
            system : 算法;  
            range : 使用范围;  
            symbols : 符号;  
            additive-symbols : 符号;  
            prefix : 前缀;  
            suffix : 后缀;  
            pad : 补零(eg.01,02,03);  
            negative : 负数策略;  
            fallback : 出错后的默认值; 
            speakas : 语音策略;  
            }

### 示例
html template
```html
<div>
    <li></li>
    <li></li>
    <li></li>
</div>
```


#### 基础示例
```css
div {
    counter-reset: counterA;
}

li:after {
    counter-increment: counterA;
    content: counter(counterA);
}
```
结果
```text
1
2
3
```


### `counter-reset` 和 `counter-increment` 的使用
* 例子1
    ```css
    div {
        counter-reset: counterA 2; // 设置初始值
    }

    li:after {
        counter-increment: counterA 2; // 每次增加2
        content: counter(counterA);
    }
    ```
    结果
    ```text
    4
    6
    8
    ```

* 例子2

    ```css
    div {
        counter-reset: counterA 2; // 设置初始值
    }

    li:after {
        counter-increment: counterA 2; // 每次增加2
        content: counter(counterA);
    }
    ```
    结果
    ```text
    4
    6
    8
    ```

* 例子3
     ```css
    div {
        counter-reset: counterA 2; // 设置初始值
    }

    li:after {
        counter-increment: counterA -1; // 每次减少1
        content: counter(counterA);
    }
    ```
    结果
    ```text
    1
    0
    -1
    ```


### `counter()` 的使用
* 例子1
    > 多个计数器的使用

    ```css
    div {
        counter-reset: counterA 2 counterB; // 设置counterA=2，counterB=0
    }

    li:after {
        counter-increment: counterA 1 counterB 2; // counterA递加1，counterB递加2
        content: counter(counterA) "." counter(counterB);
    }
    ```

    结果

    ```text
    3.2
    4.4
    5.6
    ```

* 例子2
    > 格式化输出

    ```css
    div {
        counter-reset: counterA 2 counterB; // 设置counterA=2，counterB=0
    }

    li:after {
        counter-increment: counterA 1 counterB 2; // counterA递加1，counterB递加2
        content: counter(counterA) "." counter(counterB, lower-roman);  // counterB 小写罗马字符格式化
    }
    ```
    结果

    ```text
    3.ii
    4.iv
    5.vi
    ```


### `counters()` 的使用
Html template
```html
<ol class="test">
    <li>Node
        <ol>
            <li>Node</li>
            <li>Node</li>
        </ol>
    </li>
    <li>Node</li>
    <li>Node</li>
</ol>
```

* 采用counter()
    ```css
    ol {
        counter-reset: item;
    }
    li:before {
        counter-increment: item;
        content: counter(item);
    }
    ```
    结果
    ```text
    1 Node
        1 Node
        2 Node
    2 Node
    3 Node
    ```

* 采用counters()
    ```css
    ol {
        counter-reset: item;
    }
    li:before {
        counter-increment: item;
        content: counters(item, '.');   // 第二个参数为分隔符
    }
    ```
    结果
    ```text
    1 Node
        1.1 Node
        1.2 Node
    2 Node
    3 Node
    ```

