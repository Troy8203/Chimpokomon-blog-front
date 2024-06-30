import React from "react";
import { Copy, CopyCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function CopyButton({ children }: { children: React.ReactNode }) {
  const [copyOk, setCopyOk] = React.useState(false);

  const handleClick = () => {
    if (children && React.isValidElement(children) && children.props.children) {
      navigator.clipboard.writeText(children.props.children);
      console.log(children);
    }

    setCopyOk(true);
    setTimeout(() => {
      setCopyOk(false);
    }, 500);
  };

  return (
    <div className="absolute right-2 bottom-2 flex items-center gap-1">
      <span
        className={` bg-[#e5e6e8] dark:bg-[#221e1f] p-2 rounded-xl transition-all ${
          copyOk ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      >
        Copied!
      </span>
      <Button variant="outline" size="icon" className="" onClick={handleClick}>
        <Copy
          className={`h-[1.2rem] w-[1.2rem] transition-all ${
            copyOk ? "-rotate-90 scale-0" : "rotate-0 scale-100"
          }`}
        />
        <CopyCheck
          className={`absolute h-[1.2rem] w-[1.2rem] transition-all text-primary-foreground dark:text-primary  ${
            copyOk ? "rotate-0 scale-100" : "rotate-90 scale-0"
          }`}
        />
      </Button>
    </div>
  );
}

export default CopyButton;
