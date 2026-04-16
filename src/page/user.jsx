import UserTable from "../components/user/user";
import UserForm from "../components/user/user.form";

const UserPage = () => {
    return(
        <>
          <div>
            <UserForm />
            <UserTable />
          </div>
        
        </>
    )
}

export default UserPage;