import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";

type Props = {};
const blogs = [
  {
    id: 1,
    title: "Getting Started with Tailwind CSS",
    description:
      "Learn the basics of Tailwind CSS and how to use it in your projects.",
    username: "john_doe",
    image:
      "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    label: "Web Development",
  },
  {
    id: 2,
    title: "The Power of TypeScript",
    description:
      "Discover the advantages of using TypeScript in modern web development.",
    username: "jane_smith",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    label: "Programming",
  },
  {
    id: 3,
    title: "Mastering React Hooks",
    description:
      "Explore the world of React Hooks and how they can improve your React applications.",
    username: "susan_miller",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    label: "Web Development",
  },
  {
    id: 4,
    title: "Cooking Made Easy: Quick and Delicious Recipes",
    description:
      "Learn how to whip up mouthwatering dishes in no time with these easy recipes.",
    username: "chef_julia",
    image:
      "https://plus.unsplash.com/premium_photo-1661611585910-77ae42f0c71d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29vY2tpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    label: "Cooking",
  },
  {
    id: 5,
    title: "Exploring the Cosmos: A Journey into Space",
    description:
      "Embark on a fascinating journey through the mysteries of our universe and beyond.",
    username: "space_explorer",
    image:
      "https://media.istockphoto.com/id/597931174/photo/spacecraft-launch-into-space-elements-of-this-image-furnished-by.webp?b=1&s=170667a&w=0&k=20&c=4960UXF8L_EOYS5aOntyxSx0nYCwhVoxdhjwp2QTEOs=",
    label: "Science",
  },
  // Add more blog entries here
];
const page = (props: Props) => {
  return (
    <div className="py-3">
      <div className=" mx-auto p-4">
        <div className="py-3 ps-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold mb-4 first-letter:text-3xl">
            Latest Blogs
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-blue-500 hover:bg-blue-600  focus-visible:ring-transparent outline-none border-none">
                Select Types
              </Button>
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Blog Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Web Development</DropdownMenuItem>
              <DropdownMenuItem>Programming</DropdownMenuItem>
              <DropdownMenuItem>Cooking</DropdownMenuItem>
              <DropdownMenuItem>science</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="bg-white rounded-lg shadow-md "
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover mb-2 rounded"
              />
              <div className="card-body p-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-2">By {blog.username}</p>
                <p className="text-gray-700">{blog.description}</p>
                <div className="mt-4">
                  <span className="bg-blue-200 text-blue-600 text-xs font-semibold p-1 rounded">
                    {blog.label}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
