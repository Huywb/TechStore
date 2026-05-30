import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import bodyParser from 'body-parser'
import AuthWebhook from './webhooks/clerk-webhook.route.js'
import stripeRoutes from './routes/payment.route.js'

import authRoute from './routes/auth.route.js'
import blogRoute from './routes/blog.route.js'
import brandRoute from './routes/brand.route.js'
import categoryRoute from './routes/category.route.js'
import orderRoute from './routes/order.route.js'
import productRoute from './routes/product.route.js'
import cookieParser from 'cookie-parser'
const PORT = process.env.PORT || 4000

const app = express()
app.use(cors({ origin: "http://localhost:3000", credentials: true }))


app.use('/v1/api/stripe',stripeRoutes)
app.use('/v1/api/webhooks/clerk',AuthWebhook)
app.use(express.json())
app.use(cookieParser())

app.use('/v1/api/user',authRoute)
app.use('/v1/api/blog',blogRoute)
app.use('/v1/api/brand',brandRoute)
app.use('/v1/api/category',categoryRoute)
app.use('/v1/api/order',orderRoute)
app.use('/v1/api/product',productRoute)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    console.log("key",process.env.STRIPE_SECRET_KEY)
    console.log("webhook secret",process.env.STRIPE_WEBHOOK_SECRET)
    console.log("clerk secret",process.env.CLERK_SECRET_KEY)
    console.log("clerk webhook secret",process.env.CLERK_WEBHOOK_SIGNING_SECRET)
})