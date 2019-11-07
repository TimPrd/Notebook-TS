export class Dog{
  name: string
  constructor(name: string){
    this.name = name
  }
  bark(){
    return 'wouf'
  }
  icon(){
    return '🐶'
  }
}