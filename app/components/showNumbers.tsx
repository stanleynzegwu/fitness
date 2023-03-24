const ShowNumbers = ({ value, name }: { value: string; name: string }) => {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-semibold text-purple-700">{value}</span>
      <span>{name}</span>
    </div>
  );
};

export default ShowNumbers;
