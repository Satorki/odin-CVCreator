const CardTitle = ({ title }) => {
  return (
    <div className="flex justify-between ">
      <h2 className="text-lg">{title}</h2>
      <p>Arrow</p>
    </div>
  );
};

export default CardTitle;
