## 作业
实现高度可变的无限循环滚动列表InfiniteScroll

## 思路
无限滚动的原理就是，用户滚动，当滚动条到底的时候就加载。所以很关键的一点是要知道滚动条和底部的距离。

- scrollHeight：只读属性，是一个元素内容高度的度量，包括由于溢出导致的视图中不可见内容。
- scrollTop：可以获取或设置一个元素的内容垂直滚动的像素数。
- clientHeight：只读属性，对于没有定义CSS或者内联布局盒子的元素为0，否则，它是元素内部的高度(单位像素)，包含内边距，但不包括水平滚动条、边框和外边距

通过计算就可以的得到滚动条到底部的距离：

distance = Element.scrollHeight - Element.scrollTop - Element.clientHeight

## 启动
cd element-plus && yarn && cd examples && yarn && yarn dev