import CardDetailsItem from "./CardDetailsItem";

const CardList = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <CardDetailsItem
                price="500"
                planType="BASIC"
                deliveryNumber={4}
                revisionNumber={4}
            >
                <li>Social Media Branding</li>
                <li>Brand Guidelines</li>
                <li>Growing of Social Media Accounts</li>
                <li>
                    Social Media Ads (Facebook, Youtube, Instagram, Twitter Etc)
                </li>
            </CardDetailsItem>

            <CardDetailsItem
                price="800"
                planType="PRO"
                deliveryNumber={8}
                revisionNumber={8}
            >
                <li>Pro Social Media Branding</li>
                <li>Pro Brand Guidelines</li>
                <li>Pro Growing Of Social Media Account</li>
                <li>
                    Pro Social Media Ads (Facebook, Youtube, Instagram, Twitter
                    Etc)
                </li>
            </CardDetailsItem>

            <CardDetailsItem
                price="1000"
                planType="PREMIUM"
                deliveryNumber={10}
                revisionNumber={10}
            >
                <li>Premium Social Media Branding</li>
                <li>Premium Brand Guidelines</li>
                <li>Premium Growing of Social Media Accounts</li>
                <li>
                    Premium Social Media Ads (Facebook, Youtube, Instagram,
                    Twitter Etc)
                </li>
            </CardDetailsItem>
        </div>
    );
};

export default CardList;
