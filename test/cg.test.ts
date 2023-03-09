/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-03-08 16:50:21
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-03-09 09:42:36
 * @FilePath: /color-gradient-lamination/test/cg.test.ts
 * @Description: 测试用例
 */
import CG from '../src/index'

it('CG.gradientColorLamination', () => {
    expect(CG.gradientColorLamination('#ff3c00', '#adff2f', 5)).toContain('#ff3c00')
    expect(CG.gradientColorLamination('#ff3c00', '#adff2f', 5)).toContain('#adff2f')
    expect(CG.gradientColorLamination('#ff3c00', '#adff2f', 5)).toHaveLength(5)
    expect(()=>{
        CG.gradientColorLamination('#ff3c00', '#adff2f', 1)
    }).toThrow();
})