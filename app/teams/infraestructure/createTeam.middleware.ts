import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema } from '@ioc:Adonis/Core/Validator';

export default class CreatePlayerMiddleware {
  public handle = async ({ request, response }: HttpContextContract, next: () => Promise<void>) => {
    const teamSchema = schema.create({
      name: schema.string(),
      championships: schema.number(),
      conference: schema.string(),
    });

    try {
      await request.validate({
        schema: teamSchema,
      });

      await next();
    } catch (error) {
      response.badRequest(error.messages);
    }
  }
}