
import Dashboard from "@/components/Dashboard";
import { buttonVariants } from "@/components/ui/button";
import { db } from "@/db";
import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
   const { getUser } = getKindeServerSession();
   const user = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard")
  
  const dbUser = await db.user.findFirst({
    where: {
      kindeId: user.id
    }
  })

  if(!dbUser) redirect("/auth-callback?origin=dashboard");
  
  return (
    <>
      <Dashboard/>
      <LogoutLink
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
        })}
      >Log Out</LogoutLink>
    </>
  );
};

export default DashboardPage;
