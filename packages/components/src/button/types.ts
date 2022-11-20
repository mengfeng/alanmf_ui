/*
 * @Author: alan_mf
 * @Date: 2022-11-20 16:09:38
 * @LastEditors: alan_mf
 * @LastEditTime: 2022-11-20 16:10:02
 * @FilePath: /viteUI/packages/components/src/button/types.ts
 * @Description: 
 * 
 */


import { ExtractPropTypes } from 'vue'


export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];


export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>







