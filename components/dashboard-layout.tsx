import DashboardMenu from "@/components/menu";


export default function DashboardLayout(props: any) {

  return (
    <div className="grid grid-cols-9 grid-rows-auto max-h-full row-auto gap-5 p-8">
      <DashboardMenu />
        {props.first_element}
        {props.second_element}
    </div>
  )
}