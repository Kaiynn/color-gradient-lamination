/*
 * @Author: kayinn许小强 79544105@qq.com
 * @Date: 2023-03-08 16:54:50
 * @LastEditors: kayinn许小强 79544105@qq.com
 * @LastEditTime: 2023-03-09 09:42:20
 * @FilePath: /color-gradient-lamination/jest.config.js
 * @Description: jest配置文件
 */
module.exports = {
  "transform": {
    ".(ts|tsx)": "ts-jest"
  },
  "testRegex": "/test/.*\\.(test|spec)\\.(ts)$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "collectCoverageFrom": [
    "src/*.{js,ts}",
    "src/**/*.{js,ts}"
  ],
}