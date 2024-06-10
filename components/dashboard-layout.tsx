import DashboardMenu from "@/components/menu";
import { ReactElement } from "react";


export default function DashboardLayout(props: any) {

  return (
    <div className="grid grid-cols-9 grid-rows-auto row-auto gap-5 p-8">
      <DashboardMenu user={props.user} />
        {props.first_element}
        {props.second_element}
    </div>
  )
}