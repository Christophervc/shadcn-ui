import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const acordioInfo = [
  {
    id: "1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "2",
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
  },
  {
    id: "3",
    title: "Is it animated?",
    content:
      "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
  },
];

export default function Page() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {acordioInfo.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
