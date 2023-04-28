import * as express from 'express'
import { IResponse } from '../../interface/api/response'
export const ErrorHandler = async (err, req, res, next) : Promise<IResponse> => {
   console.log("Middleware  Error Handling")
   const errStatus = err.StatusCode || 500
   const errMsg    = err.message || 'Something Went Wrong'
  return res.status(errStatus).json({
       ok: false,
       status: errStatus,
       stack: process.env.NODE_ENV === 'development' ? err.stack : {},
       message: errMsg
   })
} 