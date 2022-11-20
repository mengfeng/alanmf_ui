/*
 * @Author: alan_mf
 * @Date: 2022-11-20 15:37:32
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-20 16:10:38
 * @FilePath: /viteUI/packages/components/src/button/index.ts
 * @Description: 
 * 
 */
import button from './button.vue'
import type {App,Plugin} from "vue"
type SFCWithInstall<T> = T&Plugin
const withInstall = <T>(comp:T) => {
    (comp as SFCWithInstall<T>).install = (app:App)=>{
        //注册组件
        app.component((comp as any).name,comp)
    }
    return comp as SFCWithInstall<T>
}
const Button = withInstall(button)
export default Button