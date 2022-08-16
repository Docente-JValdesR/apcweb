import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Banner() {
  return (
    <div className="text-end mx-3">
      <FontAwesomeIcon className="mx-3 facebook" icon={faFacebook} />
      <FontAwesomeIcon className="mx-3 instagram" icon={faInstagram} />
      <FontAwesomeIcon className="mx-3 twitter" icon={faTwitter} />
    </div>
  );
}
