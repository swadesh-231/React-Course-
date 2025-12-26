const Card = ({ name, country, description, image }) => {
  return (
    <div className="bg-white w-40 h-40 rounded-md shadow-sm overflow-hidden">
      
      <img
        src={image}
        alt={name}
        className="w-full h-20 object-cover"
      />

      <div className="p-2">
        <h2 className="text-xs font-semibold truncate">{name}</h2>
        <p className="text-[10px] text-gray-500">{country}</p>
        <p className="text-[10px] truncate">{description}</p>
      </div>
    </div>
  );
};

export default Card;
