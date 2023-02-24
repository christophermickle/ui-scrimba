import Groceries from "~/components/Groceries";
export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="text-center mx-auto text-4xl font-bold">Grocery List</h1>
      <Groceries/>
    </main>
  );
}
