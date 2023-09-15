import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const blogData = {
    id: 1,
    title: "The Art of Cooking",
    author: "John Doe",
    date: "September 10, 2023",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum libero in nisl ullamcorper, at luctus lorem congue.
            Nullam et diam eu turpis vulputate suscipit a eget justo. Nulla facilisi.
      
            Vivamus gravida, felis at scelerisque auctor, felis odio tincidunt purus, eu dapibus tortor erat nec nunc.
            Sed sit amet quam a orci efficitur fermentum id eget neque.
      
            Integer a lectus eget lorem rhoncus dictum ac in quam. Nulla facilisi. Duis efficitur risus vel urna ullamcorper, eu tincidunt purus volutpat.
          `,
  };

  return (
    <div className="text-3xl text-center ">
      <div className="p-6 ">
        <p>{id}</p>
        <h1 className="text-2xl font-semibold mb-4">{blogData.title}</h1>
        <p className="text-gray-600 mb-2">{blogData.date}</p>
        <p className="text-gray-600 mb-4">{blogData.author}</p>
        <img
          src={blogData.imageUrl} // Replace with your blog post image URL
          alt="Blog Post Cover"
          className="w-full  rounded-lg p-28"
        />
        <div className="mt-4">
          <p className="text-gray-700">
            {blogData.content}
          </p>
       
        </div>
      </div>
    </div>
  );
};

export default page;
