import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { trailersService } from '../services/TrailersService'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/mytrailers/:accountId', this.getMyActiveTrailerRentals)
      .put('', this.editAccount)
  }
/**this takes the account ID from the params and uses the account ID to get that accounts trailer listings to display them. these are not an array of booked trailer rentals. */
  async getMyActiveTrailerRentals(req, res, next) {
    try {
      let accountId = req.params.accountId
      const trailers = await trailersService.getMyActiveTrailerRentals(accountId)
      res.send(trailers)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async editAccount(req, res, next) {
    try {
      const accountData = req.body
      const userId = req.userInfo
      const account = await accountService.updateAccount(userId, accountData)
      return res.send(account)
    } catch (error) {
      next(error)
    }
  }
}
