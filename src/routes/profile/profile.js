import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_PROFILE_SHOW_NAME } from '../../components/store/action';

export const Profile = () => {
  const dispatch = useDispatch();
  const showName = useSelector((state) => state.showName);
  const user = useSelector((state) => state.user);

  const setShowName = () => {
    dispatch({
      type: CHANGE_PROFILE_SHOW_NAME
    })
  }

  return (
    <div>
      <h4>Profile</h4>
      <label>Показать имя пользователя?</label>
      <input
        type='checkbox'
        checked={showName}
        value={showName}
        onChange={setShowName} />
      {showName && <div>Имя пользователя: {user}</div>}
    </div>
  )
}