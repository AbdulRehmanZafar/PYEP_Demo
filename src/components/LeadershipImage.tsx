interface Props {
  name: string;
  title: string;
  src: string;
  size?: "sm" | "lg";
}

export default function LeadershipImage({ name, title, src, size = "sm" }: Props) {
  return (
    <figure className="bg-white border border-border rounded-2xl overflow-hidden shadow-[0_14px_32px_rgba(23,32,25,0.08)]">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="w-full aspect-[3/4] object-cover object-top"
      />
      <figcaption className={size === "lg" ? "p-5 font-bold text-base" : "p-3.5 font-bold text-sm"}>
        {name}
        <small className="block font-medium text-sub text-xs mt-0.5">{title}</small>
      </figcaption>
    </figure>
  );
}
