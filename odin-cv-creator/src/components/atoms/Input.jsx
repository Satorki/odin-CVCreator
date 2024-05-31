import PropTypes from 'prop-types';
import NameForm from './NameFrom';

function Input({name}) {
  return (
    <div className='flex gap-2 justify-between'>
      <p className="text-xl p-1">{name}: </p>
      <input type="text" name="" id="" onChange={NameForm} className="shadow-lg border border-black border-3 p-1" />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string
};

export default Input;
