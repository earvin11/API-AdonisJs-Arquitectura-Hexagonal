import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';

export default class CreatePlayerMiddleware {
  public handle = async ({ request, response }: HttpContextContract, next: () => Promise<void>) => {
    const playerSchema = schema.create({
      name: schema.string(),
      lastName: schema.string(),
      age: schema.number()
    });

    try {
      await request.validate({
        schema: playerSchema,
      });

      await next()
    } catch (error) {
      response.badRequest(error.messages);
    }
  }
}