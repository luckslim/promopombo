import { Flex, Tabs } from "@radix-ui/themes";

type Props ={
    value: string;
    name:string;
    urlImage:string;
}
export function TabRadix({name,urlImage,value}:Props) {
  return (
    <>
      <Tabs.Trigger value={value}>
        {" "}
        <Flex align={"center"} gap={"2"}>
          {name}{" "}
          <img
            style={{ borderRadius: "9999px" }}
            width="30px"
            src={urlImage}
            alt=""
          />
        </Flex>
      </Tabs.Trigger>
    </>
  );
}
