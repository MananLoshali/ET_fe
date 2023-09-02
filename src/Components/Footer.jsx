import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const list = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Income",
      link: "/incomes",
    },
    {
      name: "Expenses",
      link: "/expenses",
    },
    {
      name: "Dashboards",
      link: "/",
    },
  ];

  return (
    <footer className="w-full min-h-max  bg-gradient-to-b from-blue-400 to violet-400 rounded-md px-3 pt-3 pb-5 flex flex-col items-center mb-6 lg:hidden md:hidden">
      <h2 className="text-xl font-mono text-fuchsia-500 underline underline-offset-4 mb-3">
        Important Links
      </h2>
      <section className="w-2/3 flex flex-wrap justify-between">
        {list.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            className="w-3/6 text-lg font-semibold font-sans text-stone-600 active:text-xl"
          >
            {item.name}
          </Link>
        ))}
      </section>
    </footer>
  );
};

export default Footer;
