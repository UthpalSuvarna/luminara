import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  inquiryType: string;
}

export default function ContactFormEmail({
  name,
  email,
  phone,
  subject,
  message,
  inquiryType,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your contact form</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">You received a new message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>From: {name}</Text>
              <Text>Email: {email}</Text>
              {phone && <Text>Phone: {phone}</Text>}
              <Text>Inquiry Type: {inquiryType}</Text>
              <Text>Subject: {subject}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
