import { Metadata } from "next";
import SignUpForm from "../components/Forms/SignUpForm.component";

export const metadata: Metadata = {
  title: "Créez votre compte",
};

const Page = () => <SignUpForm />;

export default Page;
