# color-gradient-lamination
两个颜色区间的渐变色取值，适用于定制化的热力图展示

The gradient value of two color ranges is suitable for customized display of thermal diagram

### Show
**Color gradient between two colors.（两个颜色之间的色阶图）**    

![demo-1](https://raw.githubusercontent.com/Kaiynn/resource-file/main/cg-stroe/image/demo1.png) 

**Using color picker from a color gradient chart and applying it to a table to display a heatmap variation.（从色阶图取色应用到table中，呈现一个热力变化）** 

![demo-1](https://raw.githubusercontent.com/Kaiynn/resource-file/main/cg-stroe/image/demo2.png) 

### Install

```
npm install color-gradient-lamination --save
```

### Methods

```js
CG.gradientColorLamination(start_color, end_color, lamination);         // start_color: 起始颜色（十六进制）  end_color：临界颜色（十六进制）  lamination：等分色阶
```

### Usage

```js
import CG from 'color-gradient-lamination'
CG.gradientColorLamination('#ff3c00', '#adff2f', 5);    // ['#ff3c00', '#eb6d0c', '#d69e18', '#c2ce23', '#adff2f']
CG.gradientColorLamination('#ff3c00', '#adff2f', 7);     // ['#ff3c00', '#f15d08', '#e47d10', '#d69e18', '#c8be1f', '#bbdf27', '#adff2f']
```


PS：The higher the lamination value, the finer the particle size, the smoother the color gradient, and the better the display performance.（lamination值越大，颗粒度越细，颜色渐变更为顺滑，展示表现效果更佳。）
### License
MIT