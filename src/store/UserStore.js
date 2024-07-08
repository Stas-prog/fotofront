import { makeAutoObservable } from 'mobx'


export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._open = true
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }

    setUser(user) {
        this._user = user
    }

    setOpen(bool) {
        this._open = bool
    }

    get isAuth() {
        return this._isAuth
    }

    get user() {
        return this._user
    }

    get open() {
        return this._open
    }

}