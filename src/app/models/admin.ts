export class Admin{
	constructor(
		public username: string,
		public password: string,
		public level: string = 'admin'
	){}
}