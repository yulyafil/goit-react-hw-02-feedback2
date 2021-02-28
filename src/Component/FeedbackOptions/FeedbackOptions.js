import PropTypes from 'prop-types';
import './FeedbackOptions.css';
const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    // <h1>Please leave feedback</h1>
    <button
      className="Button"
      type="button"
      data-feedback={feedback}
      onClick={onLeaveFeedback}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackButton
      key={option.toString()}
      feedback={option}
      onLeaveFeedback={onLeaveFeedback}
    />
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
