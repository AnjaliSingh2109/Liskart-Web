type TContactCardsProps = {
    icon: React.ReactNode;
    text: string;
    link?: string;
};

const ContactCards = (props: TContactCardsProps) => {
    const { icon, text, link = "" } = props;
    return (
        <>
            {icon}
            {link ? (
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}
                    className="link-medium link-opacity-50-hover fs-base transition-2_5"
                >
                    {text}
                </a>
            ) : (
                <span className="link-medium fs-base">{text}</span>
            )}
        </>
    );
};

export default ContactCards;
