// import { HomeButton } from "../../components/Buttons/HomeButton";

import Card from "../../components/bankcard/Card";
import CardStack from "../../components/bankcard/CardStack";
import { ButtonHome } from "../../components/button/ButtonHome";
import { PageTitle } from "../../components/pagetitle/PageTitle";

export function Home() {
  return (
    <>
      <PageTitle title={"E-WALLET"} secondTitle={"ACTIVE CARD"} />
      {/* <Card /> */}
      <CardStack />
      <ButtonHome />
    </>
  );
}
