import { FC, useEffect, useState } from "react";
import modalStore from "../../../store/modal/modal.store";
import { Button } from "../../../ui/button/Button";
import { ITokenization } from "../tokenization.data";
import s from "./TokenizationContent.module.css";
export const TokenizationContent: FC<ITokenization> = ({
  image,
  titles,
  texts,
}) => {
  const [isTablet, setIsTablet] = useState(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsTablet(true);
      } else {
        setIsTablet(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const {
    initialState: { shown },
    setShown,
  } = modalStore;

  return (
    <div className={s.wrapper}>

      <div className={s.content}>
      {isTablet && (
          <div className={s.tokenization__buttons}>
            <div className={s.button}>

              <Button title="Book a demo" icon="/img/calendar.svg" link="https://calendly.com/companydao/intro" />
              <div onClick={() => setShown(true)}>
                <Button
                  title="Contact sales"

                  icon="/img/request.svg"
                  link=""
                />
              </div>
            </div>
            
            
            <button onClick={() => setView(!view)}>
              {!view ? (
                <>
                  <span>View</span>
                  <span>
                    <img src="/img/tokenization/show__icon.svg" alt="" />
                  </span>
                </>
              ) : (
                <>
                  <img src="/img/tokenization/hide__icon.svg" alt="" />
                </>
              )}
            </button>
          </div>
        )}
        {(!isTablet || view) && (
          <div className={s.image}>
            <img src={image} alt="" />
          </div>
        )}
        {(!isTablet || !view) && (
          <div className={s.text}>
            <div className={s.text__content}>
              {titles.map((title, index) => (
                <div className={s.item}>
                  <p>{title}</p>
                  <p>{texts[index]}</p>
                </div>
              ))}
            </div>
            {!isTablet && (
              <div className={s.button}>

                <Button title="Book a demo" icon="/img/calendar.svg" link="https://calendly.com/companydao/intro" />
                <div onClick={() => setShown(true)}>
                  <Button
                    title="Contact sales"

                    icon="/img/request.svg"
                    link=""
                  />
                </div>
              </div>
            )}
          </div>
        )}
       
      </div>
    </div>
  );
};
