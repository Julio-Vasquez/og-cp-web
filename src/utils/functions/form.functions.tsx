import { type Rule } from 'antd/es/form'
import { formTranslate } from './translation.function'
import { errorMessage } from '../notifications/message.action'

const requiredField = ({ field = 'Field' }) => ({
  required: true,
  message: formTranslate({
    id: 'text.inputObj',
    objVars: { field: formTranslate({ id: field }) },
  }),
})

const minLength = ({ field = 'Field', min = 3 }) => ({
  min: min,
  messages: `${field} should be ${min} characters at least`,
  message: formTranslate({
    id: 'text.minLengthObj',
    objVars: { min, field: formTranslate({ id: field }) },
  }),
})

// formTranslation({id: 'texts', field})

const maxLength = ({ field = 'Field', max = 100 }) => ({
  max,
  message: formTranslate({
    id: 'text.maxLengthObj',
    objVars: { max, field: formTranslate({ id: field }) },
  }),
})

const emailField = (): Rule => ({
  type: 'email',
  message: formTranslate({
    id: 'text.inputObj',
    objVars: { field: formTranslate({ id: 'text.mail' }) },
  }),
})

const phoneField = () => ({
  pattern: /^[1-9][0-9]*$/,
  message: formTranslate({ id: 'text.phoneField' }),
})

const postalCodeField = () => ({
  pattern: /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/,
  message: formTranslate({ id: 'text.postalCodeField' }),
})

const numberField = () => ({
  pattern: /^[0-9.]+$/,
  message: formTranslate({ id: 'text.numberField' }),
})

const textField = () => ({
  pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ]+$/,
  message: formTranslate({ id: 'text.onlyLetters' }),
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

type MatchPassword = {
  getFieldValue: (name: string) => any
  field: string
}

const matchPassword = ({ getFieldValue, field }: MatchPassword) => ({
  validator(_: any, value: string) {
    if (!value || getFieldValue(field) === value) return Promise.resolve()
    return Promise.reject(new Error(formTranslate({ id: 'text.passwordDoMatch' })))
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
