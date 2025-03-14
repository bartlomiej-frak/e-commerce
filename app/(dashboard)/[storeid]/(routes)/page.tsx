import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: Promise<{
    storeId: string;
  }>;
}

export const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  //TODO: consider creating an api route
  const { storeId } = await params;
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
    },
  });

  return (
    <div>
      <p>Active store: {store?.name}</p>
    </div>
  );
};

export default DashboardPage;
