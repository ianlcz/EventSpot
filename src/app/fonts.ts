import { Poppins, Righteous } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const righteous = Righteous({ weight: "400", subsets: ["latin"] });
