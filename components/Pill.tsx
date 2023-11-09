type Props = {
    text: string;
  };

const Pill = ({ text }: Props) => {
    return (
        <div className="py-1 px-2 bg-sky-950 border-sky-900 border rounded-full text-sky-400 text-xs font-bold">
            {text}
        </div>
    );
}

export default Pill;
