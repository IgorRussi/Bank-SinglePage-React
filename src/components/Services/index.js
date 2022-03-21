import React from "react";
import Icon1 from "../../images/img2.svg";
import Icon2 from "../../images/charts.svg";
import Icon3 from "../../images/savings.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="Signup">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2> Reduce expenses</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overwall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2> Virtual Offices</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overwall revenue.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2> Premium Benefits</ServicesH2>
            <ServicesP>
              We help reduce your fees and increase your overwall revenue.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
