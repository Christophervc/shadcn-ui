
import { Badge } from "@/components/ui/badge"
export default function Page() {
  return (
    <div className="flex gap-3">
       <Badge>Badge</Badge>
       <Badge variant={"destructive"} capitalize>destructive</Badge>
       <Badge variant={"secondary"} capitalize>secondary</Badge>
       <Badge variant={"outline"} capitalize>outline</Badge>
       <Badge variant={"success"} capitalize>success</Badge>
       <Badge variant={"warning"} capitalize>warning</Badge>
       <Badge variant={"info"} capitalize>info</Badge>
    </div>
  );
}
