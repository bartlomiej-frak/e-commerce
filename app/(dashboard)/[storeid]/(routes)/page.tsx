import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: {
    storeid: string;
  };
}

export const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  //TODO: consider creating an api route
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeid,
    },
  });

  return (
    <div>
      <p>Active store: {store?.name}</p>
    </div>
  );
};

export default DashboardPage;
