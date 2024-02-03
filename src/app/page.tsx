import { righteous } from "./fonts";

const Home = () => {
  const propositions: { title: string; detail: string; icon?: JSX.Element }[] =
    [
      {
        title: "Explorez",
        icon: (
          <svg
            className='flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            width='24'
            height='24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z'
            />
          </svg>
        ),
        detail:
          "Plongez dans une base de données exhaustive d'événements culturels. Des musées renommés aux petites galeries d'art, des concerts intimes aux festivals de renommée internationale - tout est à portée de main.",
      },
      {
        title: "Personnalisez",
        icon: (
          <svg
            className='flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            width='24'
            height='24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42'
            />
          </svg>
        ),
        detail:
          "Créez votre propre itinéraire culturel. Ajoutez des événements à votre agenda, découvrez de nouvelles expériences et partagez-les avec vos amis.",
      },
      {
        title: "Connectez-vous",
        icon: (
          <svg
            className='flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            width='24'
            height='24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
            />
          </svg>
        ),
        detail:
          "Rejoignez une communauté passionnée d'amateurs de culture. Échangez des recommandations, discutez des derniers événements et partagez vos moments culturels préférés.",
      },
      {
        title: "Restez informé",
        icon: (
          <svg
            className='flex-shrink-0 w-5 h-5 text-gray-600 dark:text-gray-400'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
            width='24'
            height='24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5'
            />
          </svg>
        ),
        detail:
          "Recevez des notifications en temps réel sur les événements à ne pas manquer. Soyez toujours au courant des dernières actualités culturelles.",
      },
    ];

  return (
    <>
      <div className='p-4 lg:p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl shadow-md'>
        <h1 className='block text-xl text-center font-bold sm:text-3xl dark:text-white'>
          Découvrez l&apos;Art de la Culture en France
        </h1>
        <p className='mt-4 text-justify text-sm md:text-lg'>
          Bienvenue sur{" "}
          <span className={righteous.className + " uppercase"}>EventSpot</span>,
          votre compagnon ultime pour explorer le riche paysage culturel de la
          France. Que vous soyez passionné d&apos;art, de musique, de théâtre ou
          de tout ce qui concerne la culture, notre application est votre guide
          complet pour tous les événements culturels à travers le pays.
        </p>
      </div>

      <h2 className='mt-8 block text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary sm:text-2xl dark:text-white'>
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
      <div className='mt-4'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-12'>
          {propositions.map((p, idx) => (
            <div className='text-center' key={idx}>
              <div className='flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700'>
                {p.icon}
              </div>
              <div className='mt-3'>
                <h3 className='text-md sm:text-xl font-semibold text-gray-800 dark:text-white'>
                  {p.title}
                </h3>
                <p className='mt-1 text-sm md:text-lg text-gray-600 dark:text-gray-400'>
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <blockquote className='relative w-fit mx-auto mt-8 mb-4'>
        <svg
          className='absolute -top-6 -start-8 h-16 w-16 text-blue-100 dark:text-gray-700'
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
