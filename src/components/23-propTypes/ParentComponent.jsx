import PropTypes from './PropTypes.jsx';

const ParentComponent = () => {
  return (
    <div>
      <PropTypes name='children'></PropTypes>
      {
        // <PropTypes name=10></PropTypes>
        // error
      }
    </div>
  );
}

export default ParentComponent;