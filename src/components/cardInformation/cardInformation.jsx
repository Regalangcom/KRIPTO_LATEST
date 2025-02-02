import { useState } from "react";
import security from "../../assets/cyber-security(1).png";
import privacy from "../../assets/privacy.png";
import confidencials from "../../assets/confidentiality.png";

const cardData = [
  {
    id: 1,
    title: "Security",
    image: security,
    description:
      "Security is paramount to us. A robust environment is maintained to safeguard user assets and information. By employing rigorous security measures and protocols, potential threats and vulnerabilities are mitigated. The focus on security provides users with confidence and trust when engaging in transactions within the platform.",
  },
  {
    id: 2,
    title: "Privacy",
    image: privacy,
    description:
      "Privacy is a foundational core value, emphasizing user data protection and transaction confidentiality. Privacy is prioritized to ensure individuals have full control over their personal information. Cutting-edge privacy technologies and protocols are implemented within the 0x0 ecosystem, enabling secure and private transactions.",
  },
  {
    id: 3,
    title: "Confidentiality",
    image: confidencials,
    description:
      "Confidentiality is a fundamental value within the 0x0 ecosystem. The protection of financial transactions and personal information is highly regarded. Advanced encryption and privacy-enhancing technologies are employed to ensure the confidentiality of user data. The commitment to confidentiality fosters trust and peace of mind for users.",
  },
];

const CardInformation = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState({});

  const toggleReadMore = (cardId) => {
    setIsReadMoreOpen((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

  const truncateText = (text, maxLines, cardId) => {
    const words = text.split(" ");

    if (!isReadMoreOpen[cardId] && words.length > maxLines * 10) {
      return (
        <>
          {words.slice(0, maxLines * 10).join(" ")}...
          <span
            className="cursor-pointer font-mono font-bold text-violet-600 hover:text-violet-800"
            onClick={() => toggleReadMore(cardId)}
          >
            Read more
          </span>
        </>
      );
    }

    return (
      <>
        {text}{" "}
        <span
          className="cursor-pointer font-mono text-violet-600 o font-bold hover:text-violet-800"
          onClick={() => toggleReadMore(cardId)}
        >
          Read less
        </span>
      </>
    );
  };

  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Our Core Values</h1>
      <div className="flex flex-wrap  justify-center gap-8 text-lg">
        {cardData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
            isReadMoreOpen={isReadMoreOpen[card.id] || false}
            toggleReadMore={toggleReadMore}
            truncateText={truncateText}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({
  id,
  title,
  image,
  description,
  isReadMoreOpen,
  toggleReadMore,
}) => {
  const maxWords = 40;
  const words = description.split(" ");
  const truncatedText = words.slice(0, maxWords).join(" ");

  return (
    <div className="flex flex-col justify-between w-full p-4 transition-all duration-300 ease-in-out transform card glass sm:w-72 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50">
      <figure>
        <img
          src={image}
          alt={title}
          className="object-contain w-64 h-40 mb-4 rounded-lg"
        />
      </figure>
      <div className="flex flex-col justify-between card-body">
        <h2 className="mb-4 text-2xl font-bold text-black font-mono card-title">
          {title}
        </h2>
        <p className="font-mono text-base font-bold text-white">
          {isReadMoreOpen ? description : truncatedText}...
          <span
            className="ml-2 cursor-pointer text-violet-600 font-mono hover:text-violet-800"
            onClick={() => toggleReadMore(id)}
          >
            {isReadMoreOpen ? "Read less" : "Read more"}
          </span>
        </p>
        <div className="justify-end mt-4 card-actions">
          <button className="transition duration-300 btn bg-violet-900 font-mono hover:bg-violet-600">
            Learn now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
