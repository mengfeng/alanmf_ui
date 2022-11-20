/*
 * @Author: alan_mf
 * @Date: 2022-11-20 10:30:50
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-20 10:30:58
 * @FilePath: /viteUI/examples/typings/vue-shim.d.ts
 * @Description: 
 * 
 */
declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component:DefineComponent<{},{},any>
}
