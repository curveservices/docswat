import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { TRPCError } from '@trpc/server';

import { publicProcedure, router } from './trpc';
import { db } from '@/db';

export const appRouter = router({
 
  authCallback: publicProcedure.query(async () => {
    try {
      console.log('starting authcallback proceedure');
      
      const { getUser } = getKindeServerSession();
      const user = await getUser();
      console.log('User from Kinde:', user);

      if (!user || !user.id || !user.email) {
        console.log('Unauthorized user:', user);
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
      console.log("User:", user);

      let dbUser = await db.user.findFirst({
        where: { kindeId: user.id },
      });

      if (!dbUser) {
        dbUser = await db.user.create({
          data: {
            email: user.email,
            kindeId: user.id,
          },
        });
        console.log('User found in DB:', dbUser);
      }
      console.log('User found or created:', dbUser);
      

      return { success: true };
    } catch (error) {
      console.error("authhCallback error", error);
      throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', cause: error });
    } 
  }),
});

export type AppRouter = typeof appRouter;