import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './details.css';

const CharacterDetails = ({ selectedCharacter }) => (
  <div className="characterdetails">

    <h1>
      <Link to="/"><span className="to-home"><i className="fa fa-chevron-left" /></span></Link>
      <img src={selectedCharacter?.img_url} alt="character" />
      {selectedCharacter?.name}
    </h1>
    <ul>
      <li>
        <span>   Gender:</span>
        <p>
          {selectedCharacter?.gender}
          <span><i className="fa fa-arrow-right" /></span>
        </p>

      </li>
      <li>
        <span> Status:</span>
        <p>
          {selectedCharacter?.status}
          <span><i className="fa fa-arrow-right" /></span>
        </p>
      </li>
      <li>
        <span>Species:</span>
        <p>
          {selectedCharacter?.species}
          <span><i className="fa fa-arrow-right" /></span>
        </p>
      </li>
      <li>
        <span>Hair:</span>
        <p>
          {selectedCharacter?.hair}
          <span>
            <i className="fa fa-arrow-right" />

          </span>
        </p>
      </li>
      <li>
        <span>1st Alias Name:</span>
        <p>
          {selectedCharacter?.alias[1]}
          <span>
            <i className="fa fa-arrow-right" />

          </span>
        </p>
      </li>
      <li>
        <span>2nd Alias Name:</span>
        <p>
          {selectedCharacter?.alias[2]}
          <span>
            <i className="fa fa-arrow-right" />

          </span>
        </p>
      </li>
    </ul>
  </div>
);

CharacterDetails.propTypes = {
  selectedCharacter: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default CharacterDetails;
