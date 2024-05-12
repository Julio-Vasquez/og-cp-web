export type CustomDropDownProps = {
    payload:
        | {
              birthDate: string
              lastNameOne: string
              lastNameTwo: string
              mail: string
              middleName: string
              name: string
              phoneNumber: string | number
              role: string
              username: string
          }
        | undefined
}
