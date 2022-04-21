import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: "/",
      title: "Homepage",
    },
    {
      href: "/button",
      title: "Button",
    },
    {
      href: "/input",
      title: "Input",
    },
    {
      href: "/divider",
      title: "Divider",
    },
    {
      href: "/select",
      title: "Select",
    },
    {
      href: "/date",
      title: "DatePicker",
    },
    {
      href: "/slider",
      title: "Slider",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-300 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        RL UI Kit 2022
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-green-100 w-full md:w-60">
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className="m-2" key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-green-300rounded hover:bg-green-400 cursor-pointer ${
                        router.asPath === href && "bg-green-600 text-white"
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
