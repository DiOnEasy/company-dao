import { FC } from "react";
import s from "./Propositon.module.css";
import { PropositionItem } from "./proposition-item/PropositonItem";
import { PropositionServices } from "./proposition-services/PropositionServices";
interface IProposition {
  title: string;
  text: string;
}
const propositionData: IProposition[] = [
  {
    title: "Speed",
    text: "Complete on-boarding and be ready to launch in minutes",
  },
  {
    title: "Cost Efficiency",
    text: "Reduce legal and operating expenses with our end to end solution",
  },
  {
    title: "Accessibility",
    text: "Provide a gas-less and seed less user experience to your stakeholders",
  },
  {
    title: "Interoperability",
    text: "Integrate our solution with your product via smart contracts and API",
  },
];

export const Proposition: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.propositon__wrapper}>
        <div className={s.title}>
          <p>Value Proposition</p>
        </div>
        <div className={s.content}>
          {propositionData.map((item, index) => (
            <PropositionItem
              title={item.title}
              text={item.text}
              image={`/img/proposition/proposition-${index + 1}.svg`}
            />
          ))}
        </div>
      </div>
      <div className={s.services}>
        <PropositionServices />
      </div>
    </div>
  );
};
