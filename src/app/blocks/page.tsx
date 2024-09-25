import { List } from "./_components/list";
import { getBlockListAction } from "./_components/get-block-list.action";

export default async function RoutePage() {
  const res = await getBlockListAction();
  const blocks = res?.data;

  return <>{blocks && <List items={blocks} />}</>;
}
