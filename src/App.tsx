
//import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { Admin, Resource, ListGuesser, EditGuesser} from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from "./users";
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from './dashboard';
import { authProvider } from './authProvider';


export const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        dashboard={Dashboard}
	>
       <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} icon = {PostIcon} />
       <Resource name="users" list={UserList} recordRepresentation= "name" icon={UserIcon}/>
       
    </Admin>
);

    