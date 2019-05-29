export class User  {
  constructor(    
    public firstName: string,
    public secondName: string,    
    public language: string[],
    public email: string,
    private password: string,
    public phoneNumber?: number,
  ) {}
}
