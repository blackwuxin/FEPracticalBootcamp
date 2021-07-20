实现下面代码中的 render 方法，并将模板字符串渲染成 DOM。

```
let tmpl = `<div class="newslist">
    <div class="img" v-if="info.showImage"><img src="{{image}}"/></div>
    <div class="date" v-if="info.showDate">{{info.name}}/></div>
    <div class="img">{{info.name}}/></div>
</div>`;

render(tmpl, {
	image: "some img", 
    info: {showImage: true, showDate:false, name: "aaa"}
})
```
