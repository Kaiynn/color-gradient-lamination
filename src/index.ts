/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-03-03 15:19:46
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-03-09 14:37:58
 * @FilePath: /color-gradient/src/index.ts
 * @Description: 两个颜色区间，渐变色分层取值，用于定制化热力图
 */

/**
 * @description: 十六进制颜色转十进制
 * @param {string} hexNum 十六进制 - 颜色
 * @return {Array<number>} r - g - b 十进制颜色数组
 */
const parseColorTo_0x = (hexNum: string):Array<number> => {
    const hexSpliceHead = hexNum.substr(1);
    if( hexSpliceHead.length === 3 ){
        return hexSpliceHead.split('').map(function (s) { 
            return 0x11 * parseInt(s, 16);
        })
    }
    return [hexSpliceHead.substr(0, 2), hexSpliceHead.substr(2, 2), hexSpliceHead.substr(4, 2)].map(function (item) { 
        return parseInt(item, 16);
    })
}

const padStart = (targtStr: string):string => {
    return targtStr.length === 1 ? `0${targtStr}` : targtStr
}

/**
 * @description: 根据起始颜色生成相对应层数的渐变色，r - g - b 加权
 * @param {string} start_color 起始十六进制颜色
 * @param {string} end_color 结束十六进制颜色
 * @param {number} storey 颜色起始中间分层数
 * @return {Array<string>} decimalSystem_color_array 十六进制颜色素组
 */
const gradientColorLamination = (start_color:string, end_color:string, storey:number) => {
    if(!start_color || !end_color){
        throw new Error('Function accepts two hexadecimal color expressions, representing the initial color and the threshold color, respectively.')
    }
    if(!storey || storey <= 2){
        throw new Error('The third parameter of the function accepts a valid number greater than or equal to 2.')
    }
    let decimalSystem_color_array:Array<string> = [];
    let start_color_arr = parseColorTo_0x(start_color);
    let end_color_arr = parseColorTo_0x(end_color);
    for(let i:number = 0; i < storey; i++) {
        let weight_low:number = i / (storey - 1);
        let weight_height:number = 1 - weight_low;
        let weightingNumber_0x_arr:Array<string> = [];
        for(let j = 0; j < 3; j++){
            weightingNumber_0x_arr.push(padStart(Math.round(start_color_arr[j]*weight_height + end_color_arr[j]*weight_low).toString(16)))
        }
        decimalSystem_color_array.push(`#${weightingNumber_0x_arr.join('')}`)
    }
    return decimalSystem_color_array;
}

export { gradientColorLamination }

export default { gradientColorLamination }