import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { colors } from '../../../utils'

const Input = ({placeholder, editable, ...rest}) => {
  return (
    <TextInput style={style.input} placeholder={placeholder} editable={editable} {...rest} />
  )
}

export default Input;

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 13,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.default
  }
})
