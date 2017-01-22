# Grid / GridCell

## Introduction
Grid / GridCell はグリッドレイアウトを実現するためのコンポーネントです。

## Usage

### 12分割セルレイアウト

領域を12分割したマス目に分けて、そこから n マス使ったセルを配置するレイアウトを実現します。

#### 1:2 の2カラムレイアウト

```xml
<Grid>
  <GridCell col="4of12">
    4/12 幅を持ったカラム
  </GridCell>
  <GridCell col="8of12">
    8/12 幅を持ったカラム
  </GridCell>
</Grid>
```

#### 1:2:1 の3カラムレイアウト

```xml
<Grid>
  <GridCell col="3of12">
    3/12 幅を持ったカラム
  </GridCell>
  <GridCell col="6of12">
    6/12 幅を持ったカラム
  </GridCell>
  <GridCell col="fill">
    残りの幅を持ったカラム
  </GridCell>
</Grid>
```

### 固定幅のカラムを持ったレイアウト

領域に固定幅のカラムと残りの幅を持ったカラムを配置するレイアウトを実現します。  
固定幅を指定する場合は外からクラスを与えて CSS で width を設定します。

#### 300px のカラムと、残りの幅を持ったカラムの2カラムレイアウト

```css
.HogeComponent-left {
  width: 300px;
}
```

```xml
<Grid>
  <GridCell className="HogeComponent-left">
    300px の幅を持ったカラム
  </GridCell>
  <GridCell col="fill">
    残りの幅を持ったカラム
  </GridCell>
</Grid>
```
