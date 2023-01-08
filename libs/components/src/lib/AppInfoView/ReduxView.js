import AppMessageView from '../AppMessageView';
import AppLoader from '../AppLoader';
import { HIDE_MESSAGE } from '@crema/constants';
import { useDispatch, useSelector } from 'react-redux';

const AppInfoViewRedux = () => {
  const { error, loading, message } = useSelector(({ common }) => common);
  console.log('error, loading, message', error, loading, message);
  const dispatch = useDispatch();
  const clearInfoView = () => {
    dispatch(dispatch({ type: HIDE_MESSAGE }));
  };

  const showMessage = () => {
    return (
      <AppMessageView
        variant='success'
        message={message.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  const showError = () => {
    return (
      <AppMessageView
        variant='error'
        message={error.toString()}
        clearInfoView={clearInfoView}
      />
    );
  };

  return (
    <>
      {loading && <AppLoader />}

      {message && showMessage()}
      {error && showError()}
    </>
  );
};

export default AppInfoViewRedux;
