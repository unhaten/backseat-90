export interface IUser {
	name: string
}

export interface UserState {
	data: IUser | null
	isAuth: boolean
}
