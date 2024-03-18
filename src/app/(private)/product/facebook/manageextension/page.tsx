

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FacebookTool } from "@/utility/constant";

export default function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={FacebookTool} />
    </div>
  );
}

