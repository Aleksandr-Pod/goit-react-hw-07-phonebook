// import { useDispatch, useSelector } from 'react-redux';
// import { changeFilter } from '../Redux/contactsSlice';

export const Filter = ({filter, setFilter}) => {
  // const myFilter = useSelector(store => store.contacts.filter);
  // const dispatch = useDispatch();
    return (<div>
      <h3>Find contacts by name</h3>
        <input
          type="text"
          value={filter}
          onChange={evt => setFilter(evt.currentTarget.value)} />
        </div>
    )
}