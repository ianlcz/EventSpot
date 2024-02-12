import {
  BellAlertIcon,
  ChatBubbleLeftRightIcon,
  MapIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import HeadingSection from "./components/HeadingSection.component";
import { IconGrid } from "./components/IconGrid/IconGrid.component";
import { righteous } from "./fonts";

const Home = () => {
  const proposals: { title: string; detail: string; icon?: JSX.Element }[] = [
    {
      title: "Explorez",
      icon: (
        <MapIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Plongez dans une base de données exhaustive d'événements culturels. Des musées renommés aux petites galeries d'art, des concerts intimes aux festivals de renommée internationale - tout est à portée de main.",
    },
    {
      title: "Personnalisez",
      icon: (
        <PaintBrushIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Créez votre propre itinéraire culturel. Ajoutez des événements à votre agenda, découvrez de nouvelles expériences et partagez-les avec vos amis.",
    },
    {
      title: "Connectez-vous",
      icon: (
        <ChatBubbleLeftRightIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Rejoignez une communauté passionnée d'amateurs de culture. Échangez des recommandations, discutez des derniers événements et partagez vos moments culturels préférés.",
    },
    {
      title: "Restez informé",
      icon: (
        <BellAlertIcon className='flex-shrink-0 w-6 h-6 text-gray-600 dark:text-gray-400' />
      ),
      detail:
        "Recevez des notifications en temps réel sur les événements à ne pas manquer. Soyez toujours au courant des dernières actualités culturelles.",
    },
  ];

  return (
    <>
      <HeadingSection title="Découvrez l'Art de la Culture en France">
        <p className='text-justify text-sm md:text-lg'>
          Bienvenue sur{" "}
          <span className={righteous.className + " uppercase"}>EventSpot</span>,
          votre compagnon ultime pour explorer le riche paysage culturel de la
          France. Que vous soyez passionné d&apos;art, de musique, de théâtre ou
          de tout ce qui concerne la culture, notre application est votre guide
          complet pour tous les événements culturels à travers le pays.
        </p>
      </HeadingSection>

      <h2 className='block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
        Pourquoi choisir EventSpot ?
      </h2>
      <ul className='mt-4 list-disc text-sm md:text-lg list-inside text-gray-800 dark:text-gray-400 text-justify'>
        <li className='mb-1'>
          <span className='font-semibold dark:text-white'>Tout en un :</span>{" "}
          Explorez une multitude d&apos;événements culturels, des expositions
          d&apos;art aux concerts en passant par les festivals de cinéma, tout
          sous un même toit.
        </li>
        <li className='mb-1'>
          <span className='font-semibold dark:text-white'>
            Localisation précise :
          </span>{" "}
          Trouvez rapidement les événements près de chez vous avec une recherche
          basée sur la localisation, garantissant que vous ne manquerez jamais
          une occasion de vous immerger dans la culture.
        </li>
        <li className='mb-1'>
          <span className='font-semibold dark:text-white'>
            Personnalisation :
          </span>{" "}
          Créez votre agenda culturel personnalisé en ajoutant vos événements
          préférés, et recevez des notifications pour vous assurer de ne rien
          manquer.
        </li>
        <li>
          <span className='font-semibold dark:text-white'>
            Avis et notations :
          </span>{" "}
          Partagez votre expérience avec la communauté en laissant des avis et
          des notations sur les événements auxquels vous avez participé.
        </li>
      </ul>

      <h2 className='mt-6 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
        Que propose EventSpot ?
      </h2>
      <IconGrid sections={proposals} />

      <blockquote className='relative w-fit mx-auto mt-8'>
        <svg
          className='absolute -top-6 -start-8 h-16 w-16 text-blue-100 dark:text-blue-400'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            d='M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z'
            fill='currentColor'
          />
        </svg>

        <div className='relative z-10'>
          <p className='text-sm md:text-md text-gray-800 dark:text-white'>
            <em>Découvrez, partagez, vivez la Culture avec EventSpot.</em>
          </p>
        </div>
      </blockquote>
    </>
  );
};

export default Home;
