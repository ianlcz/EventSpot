import IconSection from "./IconSection.component";

export type IconGridProps = {
  sections: { title: string; detail: string; icon?: JSX.Element }[];
};

export const IconGrid = ({ sections }: IconGridProps) => (
  <div
    className={`mt-4 grid sm:grid-cols-2 lg:grid-cols-${sections.length} gap-8 md:gap-12`}
  >
    {sections.map(({ title, detail, icon }, idx) => (
      <IconSection key={idx} title={title} detail={detail} icon={icon} />
    ))}
  </div>
);
