
import { SimpleCard } from "@/components/card";
import prisma from "@/prisma/prismadb";
import React, { useEffect, useState } from "react";

type Props = {};
interface BlogData {
  id: string;
  image: string;
  description: string;
  slug: string;
  title: string;
  userId: string;
}

interface BlogListProps {
  blogs: BlogData[];
}
const page: React.FC<BlogListProps> =async (props: Props) => {

const blogs = await prisma.blog.findMany()
  // console.log(blogs);

  return (
    <div className="py-3">
      <div className=" mx-auto p-4">
        <div className="py-3 ps-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold mb-4 first-letter:text-3xl">
            Latest Blogs
          </h1>
          {/* <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-blue-500 hover:bg-blue-600  focus-visible:ring-transparent outline-none border-none">
                Select Types
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Blog Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {blogs &&
                blogs.map((blog) => (
                  <div key={blog.id}>
                    <DropdownMenuItem
                      onClick={() => handleFilterBlog(blog.slug)}
                    >
                      {blog.slug}
                    </DropdownMenuItem>
                  </div>
                ))}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog) => {
            return (
              <div key={blog.id}>{blog && <SimpleCard blog={blog} />}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
