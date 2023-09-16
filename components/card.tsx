"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from "@material-tailwind/react";
import Link from "next/link";
interface BlogData {
  id: string;
  image: string;
  description: string;
  slug: string;
  title: string;
  userId?: string ;
}
type CardProps = {
  blog: BlogData;
};
export function SimpleCard(props: CardProps) {
  return (
    <div className="bg-white rounded-lg object-cover h-80 relative  py-4 ">
      {/* <CardHeader>
        <img src={props.blog?.image ?? ""} alt={props.blog.title} />
      </CardHeader> */}
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {props.blog.title}
        </Typography>
        <Typography>{`${props.blog.description.slice(0, 200)}...`}</Typography>
      </CardBody>
      <Link
        href={`/blog/${props.blog.id}`}
        className="py-0  absolute bottom-2 px-5"
      >
        <Button className="w-full">Read More</Button>
      </Link>
    </div>
  );
}
