import PropTypes from 'prop-types';

function GeneralInfoForm({firstData, secondData, secondDataStyle}) {
  return (
    <>
      <p>{firstData}</p><p className={secondDataStyle}>{secondData}</p>
    </>
  )
}

GeneralInfoForm.propTypes = {
  firstData: PropTypes.string,
  secondData: PropTypes.string,
  secondDataStyle: PropTypes.string
};

export default GeneralInfoForm;
