import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/extension'

const app = new Hono()
const prisma = new PrismaClient()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.put('/register', async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ error: 'All fields are required' }, 400);
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
      },
    });

    return c.json({
      message: 'Registration successful',
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    console.error(error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});
serve(app);

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
