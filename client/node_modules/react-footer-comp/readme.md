# React Footer Comp
React Footer Comp is a react based footer component with dynamic year generation.

### [Try React Footer Comp](https://codesandbox.io/s/8xl4vwkz49)
React footer comp is developed by Raja Raghav.

#### Example
![React Footer Comp Example](https://image.ibb.co/gGEXOJ/Screen_Shot_2018_05_28_at_5_36_45_PM.png)

###### [Try it here](https://codesandbox.io/s/8xl4vwkz49)
## Features 
* Dynamic Date generation, i.e. date changes every year
* Set Dates range with 'years' props.
* Custom text using 'text' props.
* Copyright icon ©
* Every component and element is stylable.

## Installation
1. `npm install --save react-footer-comp`
2. Intialize
    `import Footer from "react-footer-comp"`
    
## Plugins
* copyrightText
* copyrightIcon
* text
* initial year

## Props
| Prop Name        | type           | Example  |
| ------------- |:-------------:| -----:|
| text      | string | <Footer text={"All rights reserved."}/> |
| years      |  array     |   <Footer years={[2012]}/> |
| copyrightIcon | boolean      |    <Footer copyrightIcon/> |
| copyrightText | boolean      |    <Footer copyrightText/> |
| height | number      |    <Footer height={150}/> |
| bgColor | string      |    <Footer bgColor={"yellow"}/> |
| copyrightTextStyle | style object | <Footer copyrightTextStyle={{alignSelf:"flex-start"}}/>|
| copyrightIconStyle | style object      |    <Footer copyrightTextStyle={{alignSelf:"flex-end"}}/> |
| textStyle | style object |    <Footer copyrightTextStyle={{alignSelf:"center"}}/> |

## Note
React footer comp uses flexbox so all position based styling should be done using flexbox.



