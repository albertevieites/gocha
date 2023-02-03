// Import components
import BoomarkList from '../../components/BookmarkList/BookmarkList';
import DeleteAllButton from '../../components/DeleteAllButton/DeleteAllButton';
import Form from '../../components/Form/Form';

function Home() {
  return (
    <div>
      <Form />
      <BoomarkList/>
      <DeleteAllButton />
    </div>
  );
}

export default Home;
