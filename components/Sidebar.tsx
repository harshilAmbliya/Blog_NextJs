import { ScrollArea } from "./ui/scroll-area";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <ScrollArea className="h-screen  w-[350px] bg-[#143a3a]">
      <ul className="px-2 py-3">
        <li className="bg-green-100 px-3 py-2 rounded-full text-center shadow-md my-5 text-violet-400">
          Home
        </li>
        <li className="bg-green-100 px-3 py-2 rounded-full text-center shadow-md my-5 text-violet-400">
          AbOut
        </li>
        <li className="bg-green-100 px-3 py-2 rounded-full text-center shadow-md my-5 text-violet-400">
          Contact
        </li>
        <li className="bg-green-100 px-3 py-2 rounded-full text-center shadow-md my-5 text-violet-400">
          Blog
        </li>
        <li className="bg-green-100 px-3 py-2 rounded-full text-center shadow-md my-5 text-violet-400">
          Suggestions
        </li>
      </ul>
    </ScrollArea>
  );
};

export default Sidebar;
