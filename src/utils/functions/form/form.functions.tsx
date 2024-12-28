import { type Rule } from 'antd/es/form'

import { formatMessage } from '../translation.function'
import { errorMessage } from '../../notifications/message.action'
import type { Field, MatchPassword, MaxProps, MinProps } from './type.form'

const requiredField = ({ field = 'Field' }: Field): Rule => ({
  required: true,
  message: formatMessage({
    id: 'text.inputObj',
    objVars: { field: formatMessage({ id: field }) },
  }),
})

const minLength = ({ field = 'Field', min = 3 }: MinProps): Rule => ({
  min,
  message: formatMessage({
    id: 'text.minLengthObj',
    objVars: { min, field: formatMessage({ id: field }) },
  }),
})

// formTranslation({id: 'texts', field})

const maxLength = ({ field = 'Field', max = 100 }: MaxProps): Rule => ({
  max,
  message: formatMessage({
    id: 'text.maxLengthObj',
    objVars: { max, field: formatMessage({ id: field }) },
  }),
})

const emailField = (): Rule => ({
  type: 'email',
  message: formatMessage({
    id: 'text.inputObj',
    objVars: { field: formatMessage({ id: 'text.mail' }) },
  }),
})

const phoneField = (): Rule => ({
  pattern: /^[1-9][0-9]*$/,
  message: formatMessage({ id: 'text.phoneField' }),
})

const postalCodeField = () => ({
  pattern: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/,
  message: formatMessage({ id: 'text.postalCodeField' }),
})

const numberField = () => ({
  pattern: /^[0-9.]+$/,
  message: formatMessage({ id: 'text.numberField' }),
})

const textField = () => ({
  pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/,
  message: formatMessage({ id: 'text.onlyLetters' }),
})

const checkValidation = (err: any) =>
  errorMessage({ error: err.errorFields[0].errors[0] })

const getSelectSearch = () => {
  const optionFilterProp = 'children'
  const filterOption = (input: string, option: any) => {
    try {
      return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    } catch (error) {
      return undefined
    }
  }

  return {
    showSearch: true,
    filterOption,
    optionFilterProp,
  }
}

const inputToUpperCase = () => ({
  normalize: (value: string) => (value || '').toUpperCase(),
})

const inputToLowerCase = () => ({
  normalize: (value: string) => (value || '').toLowerCase(),
})

const selectFilterOptions = () => ({
  showSearch: true,
  optionFilterProp: 'children',
  filterOption: (input: string, option: any) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
})

const selectFilterSort = () => ({
  optionFilterProp: 'children',
  filterSort: (optionA: any, optionB: any) =>
    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase()),
})

const matchPassword = ({ getFieldValue, field }: MatchPassword) => ({
  validator(_: any, value: string) {
    if (!value || getFieldValue(field) === value) return Promise.resolve()
    return Promise.reject(new Error(formatMessage({ id: 'text.passwordDoMatch' })))
  },
})

export {
  requiredField,
  emailField,
  phoneField,
  minLength,
  maxLength,
  numberField,
  checkValidation,
  postalCodeField,
  getSelectSearch,
  inputToUpperCase,
  inputToLowerCase,
  selectFilterOptions,
  selectFilterSort,
  matchPassword,
  textField,
}
