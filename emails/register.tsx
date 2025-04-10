import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

const PricingEmail = () => {
  const previewText = `Métodos de pago`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="py-10">
          <Container>
            <Img
              src={
                "https://cpfmainbucket.s3.us-east-1.amazonaws.com/luxora-porcelain/email/registerEmail.png"
              }
              className="object-scale-dowm object-center max-w-[87%] max-h-[90%] mx-auto"
              alt="Luxora email"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PricingEmail;
