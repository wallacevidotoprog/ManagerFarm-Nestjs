export class UserRegisteredEvent {
  constructor(public readonly email: string, public readonly name: string) {}
}
export class UserKeyEvent {
  constructor(public readonly email: string, public readonly name: string,public readonly key: string) {}
}