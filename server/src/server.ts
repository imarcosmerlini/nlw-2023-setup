import FastiFy from 'fastify'
import {PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const app = FastiFy()
const prisma = new PrismaClient()

app.register(cors, {
	origin: ['http://localhost:3000']
})

app.get('/habits', async () => {
	return prisma.habit.findMany({});
})

app.listen({
	port: 3333,
}).then(() => {
	console.log('HTTP Server running!')
})