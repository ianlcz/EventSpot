import { Metadata } from "next";
import LoginForm from "../components/Forms/LoginForm.component";

export const metadata: Metadata = {
  title: "Connectez-vous",
};

const Page = () => <LoginForm />;

export default Page;
