import express from 'express'
import asyncHandler from 'async-handler'
const router = express.Router()
import {becomeMerchant} from '../controllers/merchant.controller.js'

import validateToken from './../middlewares/validateUser.js'

router.get('/becomeMerchant', validateToken, becomeMerchant)

export default router