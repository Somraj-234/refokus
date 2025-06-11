import React from "react";
import Marquee from "./Marquee";
import StackIcon from "tech-stack-icons";

function Marquees() {
  const icons = [
    [
      { iconname: "django",
        iconurl: <StackIcon name="django" />,
      },
      { iconname: "flask",
        iconurl: <StackIcon name="flask" />,
      },
      { iconname: "figma", 
        iconurl: <StackIcon name="figma" />,
      },
      { iconname: "mysql",
        iconurl: <StackIcon name="mysql" />,
      },
      { iconname: "postgresql",
        iconurl: <StackIcon name="postgresql" />,
      },
      { iconname: "python",
        iconurl: <StackIcon name="python" />,
      },
      { iconname: "js",
        iconurl: <StackIcon name="js" />,
      },
      { iconname: "react",
        iconurl: <StackIcon name="react" />,
      },
      { iconname: "html5",
        iconurl: <StackIcon name="html5" />,
      },
      { iconname: "css3",
        iconurl: <StackIcon name="css3" />,
      },
      { iconname: "tailwindcss",
        iconurl: <StackIcon name="tailwindcss" />,
      },
      { iconname: "shadcnui",
        iconurl: <StackIcon name="shadcnui" />,
      },
      { iconname: "postman",
        iconurl: <StackIcon name="postman" />,
      },
      { iconname: "vscode",
        iconurl: <StackIcon name="vscode" />,
      },
    ],
    [
      { iconname: "django",
        iconurl: <StackIcon name="django" />,
      },
      { iconname: "flask",
        iconurl: <StackIcon name="flask" />,
      },
      { iconname: "figma",
        iconurl: <StackIcon name="figma" />,
      },
      { iconname: "mysql",
        iconurl: <StackIcon name="mysql" />,
      },
      { iconname: "postgresql",
        iconurl: <StackIcon name="postgresql" />,
      },
      { iconname: "python",
        iconurl: <StackIcon name="python" />,
      },
      { iconname: "js",
        iconurl: <StackIcon name="js" />,
      },
      { iconname: "react",
        iconurl: <StackIcon name="react" />,
      },
      { iconname: "html5",
        iconurl: <StackIcon name="html5" />,
      },
      { iconname: "css3",
        iconurl: <StackIcon name="css3" />,
      },
      { iconname: "tailwindcss",
        iconurl: <StackIcon name="tailwindcss" />,
      },
      { iconname: "shadcnui",
        iconurl: <StackIcon name="shadcnui" />,
      },
      { iconname: "postman",
        iconurl: <StackIcon name="postman" />,
      },
      { iconname: "vscode",
        iconurl: <StackIcon name="vscode" />,
      },
    ],
  ];

  return (
    <div className="py-20 mt-16 w-full relative overflow-hidden">
      {icons.map((row, index) => (
        <Marquee
          key={index}
          direction={index === 0 ? "left" : "right"}
          iconname={row.map(icon => icon.iconname)}
          stackicons={row.map(icon => icon.iconurl)}
        />
      ))}
    </div>
  );
}

export default Marquees;
