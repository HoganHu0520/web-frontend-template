## HTML meta 标签
> `<meta>` 标签用于提供 `metadata` 元数据，是用于描述数据的数据。它不会显示在页面上，但是机器却可以识别。  
> `<meta>` 标签常用语定义页面的说明，关键字等其他元数据。这些元数据服务于浏览器，搜索引擎和其他网络服务。

### 属性
> `<meta>` 标签具有多个属性，例如`http-equiv`, `name` 和 `charset`。

* `name` 属性
    > `name` 属性主要用于描述网页，比如网页的关键词，叙述等。与之对应的属性值为 `content` ，`content` 中的内容是对name填入类型的具体描述，便于搜索引擎抓取。

    ```html
    <meta name="参数" content="具体的描述">
    ```

    * keywords
        > 用于告诉搜索引擎，你网页的关键字。

        ```html
        <meta name="keywords" content="china, blog, web">
        ```

    * description
        > 用于告诉搜索引擎，你网站的主要内容。
        
        ```html
        <meta name="description" content="WEB开发技术博客。">
        ```

    * robots （搜索引擎的爬虫所有方式）
        > `robots` 用来告诉爬虫哪些页面需要索引，哪些页面不需要索引。  
        `content` 的参数有`all`, `none`, `index`, `noindex`, `follow`, `nofollow`。默认是`all`。

        ```html
        <meta name="robots" content="none">
        ```

        具体参数如下：
        1. `none` : 搜索引擎将忽略此网页，等价于 `noindex` ， `nofollow` 。  
        2. `noindex` : 搜索引擎不索引此网页。  
        3. `nofollow`: 搜索引擎不继续通过此网页的链接索引搜索其它的网页。  
        4. `all` : 搜索引擎将索引此网页与继续通过此网页的链接索引，等价于 `index` ， `follow` 。  
        5. `index` : 搜索引擎索引此网页。  
        6. `follow` : 搜索引擎继续通过此网页的链接索引搜索其它的网页。    

    * author
        > 用于标注网页作者。

        ```html
        <meta name="author" content="Hogan Hu">
        ```

    * copyright
        > 用于标注版权信息

        ```html
        <meta name="copyright" content="Hogan Hu">
        ```

    * revisit-after (搜索引擎爬虫重访时间)
        > 如果页面不是经常更新，为了减轻搜索引擎爬虫对服务器带来的压力，可以设置一个爬虫的重访时间。如果重访时间过短，爬虫将按它们定义的默认时间来访问。

        ```html
        <meta name="revisit-after" content="7 days">
        ```

    * renderer (双核浏览器渲染方式)
        > `renderer` 是为双核浏览器准备的，用于指定双核浏览器默认以何种方式渲染页面。比如说360浏览器。

        ```html
        <meta name="renderer" content="webkit"> //默认webkit内核
        <meta name="renderer" content="ie-comp"> //默认IE兼容模式
        <meta name="renderer" content="ie-stand"> //默认IE标准模式
        ```

    * viewport (移动端)
        > 手机浏览器是把页面放在一个虚拟的“窗口”（`viewport`）中，通常这个虚拟的“窗口”（`viewport`）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。移动版的 Safari 浏览器最新引进了 `viewport` 这个 meta tag，让网页开发者来控制 `viewport` 的大小和缩放，其他手机浏览器也基本支持。

        ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        ```

        1. `width`：控制 `viewport` 的大小，可以指定的一个值，如果 `600`，或者特殊的值，如 `device-width` 为设备的宽度（单位为缩放为 `100%` 时的 CSS 的像素）。
        2. `height`：和 `width` 相对应，指定高度。
        3. `initial-scale`：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。
        4. `maximum-scale`：允许用户缩放到的最大比例。
        5. `minimum-scale`：允许用户缩放到的最小比例。
        6. `user-scalable`：用户是否可以手动缩放


* `http-equiv` 属性
    > `http-equiv` 属性为名称/值对提供了名称。并指示服务器在发送实际的文档之前先在要传送给浏览器的 MIME 文档头部包含名称/值对。  
    当服务器向浏览器发送文档时，会先发送许多名称/值对。虽然有些服务器会发送许多这种名称/值对，但是所有服务器都至少要发送一个：`content-type: text/html`。这将告诉浏览器准备接受一个 HTML 文档。  
    使用带有 `http-equiv` 属性的 `<meta>` 标签时，服务器将把名称/值对添加到发送给浏览器的内容头部。

    `meta` 标签中 `http-equiv` 属性语法格式是：
    ```html
    <meta http-equiv="参数" content="具体的描述">
    ```

    * content-Type(设定网页字符集)(推荐使用HTML5的方式)
        > 用于设定网页字符集，便于浏览器解析与渲染页面

        ```html
        <meta http-equiv="content-Type" content="text/html;charset=utf-8">  //旧的HTML，不推荐  

        <meta charset="utf-8"> //HTML5设定网页字符集的方式，推荐使用UTF-8
        ```

    * X-UA-Compatible(浏览器采取何种版本渲染当前页面)
        > 用于告知浏览器以何种版本来渲染页面。

        ```html
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/> //指定IE使用最新版本渲染当前页面
        ```
        此属性针对IE浏览器，`chrome=1` 表示应用[Google Chrome Frame](https://en.wikipedia.org/wiki/Google_Chrome_Frame)。该框架已于2014年停止服务支持，所以上述设置等同于：
        ```html
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        ```

    * cache-control(指定请求和响应遵循的缓存机制)
        > 指导浏览器如何缓存某个响应以及缓存多长时间。此设置只对网页有效，对网页内的其他资源加载无效。

        ```html
        <meta http-equiv="cache-control" content="no-cache">
        ```

        1. `no-cache`: 先发送请求，与服务器确认该资源是否被更改，如果未被更改，则使用缓存。
        2. `no-store`: 不允许缓存，每次都要去服务器上，下载完整的响应。
        3. `public` : 缓存所有响应，但并非必须。因为max-age也可以做到相同效果
        4. `private` : 只为单个用户缓存，因此不允许任何中继进行缓存。
        5. `maxage` : 表示当前请求开始，该响应在多久内能被缓存和重用，而不去服务器重新请求。例如：`max-age=60` 表示响应可以再缓存和重用 60 秒。

    * expires(网页到期时间)
        > 用于设定网页的到期时间，过期后网页必须到服务器上重新传输。

        ```html
        <meta http-equiv="expires" content="Sunday 26 October 2018 01:00 GMT" />
        ```

    * refresh(自动刷新并指向某页面)
        > 网页将在设定的时间内，自动刷新并调向设定的网址。

        ```html
        <meta http-equiv="refresh" content="2;URL=http://www.baidu.com/">
        ```
