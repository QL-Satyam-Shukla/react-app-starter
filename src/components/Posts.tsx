import { useEffect, useState } from "react";
import { STATUS } from "@/constants";
import { usePostStore } from "@/store/usePostStore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Posts = () => {
  const rowsPerPage = 10;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  const getFirstPostData = usePostStore((s: any) => s.getFirstPostData);
  const postList = usePostStore((s: any) => s.postList);
  const postStatus = usePostStore((s: any) => s.postStatus);
  const loading = postStatus === STATUS.FETCHING;
  console.log("Loading",loading)
  
  useEffect(() => {
    getFirstPostData();
  }, []);

  return (
    <div className="p-8">
      <Table className="w-full">
        <TableCaption>A list All Posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead className="text-right">Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {postList &&
            postList.slice(startIndex, endIndex).map((post: any) => {
              return (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.id}</TableCell>
                  <TableCell className="font-medium">{post.body}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
          <PaginationPrevious  
              className={startIndex === 0 ? "pointer-events-none opacity-50" : undefined}
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              } } />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink size={4} href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
          <PaginationNext 
              className={endIndex === 100 ? "pointer-events-none opacity-50" : "pointer-events-auto"}
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage);
                setEndIndex(endIndex + rowsPerPage);
              } } />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Posts;
