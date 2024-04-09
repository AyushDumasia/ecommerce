import 'react-toastify/dist/ReactToastify.css'
import CustomToastContainer from './../Toast/CustomToastContainer'
import AdminCard from './../Cards/AdminCard'

function AdminPage() {
    return (
        <div className="">
            <CustomToastContainer />
            <AdminCard />
        </div>
    )
}

export default AdminPage