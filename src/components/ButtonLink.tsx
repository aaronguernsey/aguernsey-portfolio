"use client";

export interface IButtonLinkProps {
  href: string;
  title: string;
  label: string;
  children: React.ReactNode;
  onHover: () => void;
}

export function ButtonLink({
  href,
  title,
  label,
  children,
  onHover,
}: Partial<IButtonLinkProps>) {
  return (
    <a
      className="button-link relative cursor-pointer rounded-full px-5 py-3 w-full border-4 border-slate-700 bg-white text-slate-700 text-xl text-center font-bold hover:bg-slate-700 hover:text-white transition-all duration-300"
      href={href}
      target="_blank"
      title={label}
      onMouseEnter={onHover}
    >
      {children}
    </a>
  );
}
