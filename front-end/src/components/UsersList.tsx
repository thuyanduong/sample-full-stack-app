
import User from '../models/User'

interface UsersListsProps {
  users: User[]
}

const UsersList: React.FC<UsersListsProps> = ({users}) => {
  return (
    <div>
      { users.map(user => <div key={user.id}>{user.name}</div>) }
    </div>
  )
}

export default UsersList