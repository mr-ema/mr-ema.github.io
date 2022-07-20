interface IContactMe {
  name: string,
  email: string,
  message?: string
}

interface IContactMeErr extends Partial<IContactMe> {}