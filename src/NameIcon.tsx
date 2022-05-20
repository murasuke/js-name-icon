import { VFC, Suspense } from "react";
import iconMaker from "./iconMaker";

let result: string = undefined;
const IconMaker: VFC<{ userName: string }> = ({ userName }) => {
  const iconMakerWrapper = (userName: string) => {
    if (!result) {
      throw iconMaker(userName).then((r) => (result = r));
    } else {
      return result;
    }
  };

  const iconData = iconMakerWrapper(userName);
  return <img alt="icon" src={iconData} />;
};

const NameIcon: VFC<{ userName: string }> = ({ userName }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <IconMaker userName={userName} />
    </Suspense>
  );
};

export default NameIcon;
