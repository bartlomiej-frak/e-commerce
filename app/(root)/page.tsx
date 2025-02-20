import { UserButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <div>
      <p>This is a protected route</p>
      <UserButton />
    </div>
  );
}
