import {
  CalendarDaysIcon,
  PresentationChartBarIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import HeadingSection from "../components/HeadingSection.component";
import IconSection from "../components/IconSection.component";
import { righteous } from "../fonts";

export const metadata: Metadata = {
  title: "À propos",
};

const Page = () => {
  const keyFeatures: { title: string; detail: string; icon?: JSX.Element }[] = [
    {
      title: "Achat de billets",
      icon: (
        <TicketIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Achetez directement des billets depuis l'application pour une expérience d'achat fluide et pratique.",
    },
    {
      title: "Votre Agenda Culturel",
      icon: (
        <CalendarDaysIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Créez votre propre agenda culturel en ajoutant des événements qui résonnent avec vos intérêts.",
    },
    {
      title: "Évolution constante",
      icon: (
        <PresentationChartBarIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Attendez-vous à des améliorations continues, car je suis déterminé à faire de EventSpot un compagnon culturel toujours plus riche.",
    },
  ];

  return (
    <>
      <HeadingSection title='À Propos de EventSpot'>
        <p className='text-justify text-sm md:text-lg'>
          <span className={righteous.className + " uppercase"}>EventSpot</span>{" "}
          est un projet ambitieux née du désir de partager la richesse
          culturelle de la France avec le monde. Je suis{" "}
          <span className='font-semibold'>Yann Le Coz</span>, le fondateur et le
          seul membre de ce projet. Mon objectif est de vous offrir une
          expérience unique, vous permettant de découvrir et de vivre pleinement
          chaque aspect de la scène culturelle française.
        </p>
      </HeadingSection>

      <h2 className='block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
        L&apos;Origine
      </h2>
      <p className='mt-4 text-sm md:text-lg text-gray-800 dark:text-gray-400 text-justify'>
        2024 a marqué le début de cette aventure solo. J&apos;ai entrepris de
        construire EventSpot comme une réponse à la quête personnelle de
        découvrir et partager les trésors culturels de la France.
      </p>

      <h2 className='mt-8 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
        Ma Vision
      </h2>
      <p className='mt-4 text-sm md:text-lg text-gray-800 dark:text-gray-400 text-justify'>
        Chez EventSpot, je crois en la puissance de la culture pour connecter
        les individus, inspirer la créativité et enrichir nos vies. Ma vision
        est de devenir le compagnon incontournable de tous les passionnés de
        culture, en leur offrant ainsi un accès facile à une diversité
        d&apos;événements.
      </p>

      <h2 className='mt-8 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
        Fonctionnalités clés
      </h2>
      <div
        className={`mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12`}
      >
        {keyFeatures.map(({ title, detail, icon }, idx) => (
          <IconSection key={idx} title={title} detail={detail} icon={icon} />
        ))}
      </div>

      <h2 className='mt-8 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
        Contactez-moi
      </h2>
      <p className='mt-4 text-sm md:text-lg text-gray-800 dark:text-gray-400 text-justify'>
        Je suis ravi de vous avoir à bord de cette aventure culturelle ! Pour
        toute question ou suggestion, n&apos;hésitez pas à me contacter via les
        réseaux sociaux.
      </p>
      <p className='mt-2 text-sm md:text-lg text-gray-800 dark:text-gray-400 text-justify'>
        Rejoignez-moi dans l&apos;exploration du riche patrimoine culturel de la
        France avec EventSpot.
      </p>
    </>
  );
};

export default Page;
