import React from "react";

const About = () => {


  return (
      <div className="flex items-center justify-center pb-10">
          <p className="text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{" "}
            <a href="https://github.com/kashyap0O7/zcoder" rel="nofollow">
              Kashyap Pansuriya
            </a>
          </p>
      </div>
  );
};
export default About;
