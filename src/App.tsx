import Posts from "./components/Posts";
import { Skeleton } from "./components/ui/skeleton";
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-3xl font-bold">Partner Dashboard</h1>
      <Posts/>
      <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
    </div>
  );
}

export default App;
